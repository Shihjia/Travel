/* ============================================================
   ShihChia 的旅行地圖 — 共用邏輯
   Leaflet 地圖初始化 ＋ Open-Meteo 天氣小工具 ＋ 資訊卡互動
   ============================================================ */

/* ---------- 每日代表色（地圖路線／圖例用） ---------- */
window.DAY_COLORS = {
  1: "#FF6B4A", // coral
  2: "#3AAED8", // sky
  3: "#2BA6A4", // teal
  4: "#FF9F43", // sun-deep
  5: "#9B72CF", // 紫（新增輔色，僅用於地圖區分)
  6: "#E5502E"  // coral-deep
};

/* ---------- 小工具 ---------- */

function shortDate(dateStr) {
  const parts = (dateStr || "").split("-");
  if (parts.length !== 3) return dateStr || "";
  return `${parseInt(parts[1], 10)}/${parseInt(parts[2], 10)}`;
}

function escapeHtml(str) {
  if (str == null) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* ============================================================
   Leaflet 地圖
   ============================================================ */

/**
 * 建立「單日」地圖：畫出該天所有 stop 的標記＋連線
 * @param {string} containerId - 地圖容器 DOM id
 * @param {object} day - TRIP.days[i]（需 ready:true 且含 items）
 */
function initDayMap(containerId, day) {
  const el = document.getElementById(containerId);
  if (!el || typeof L === "undefined") return;
  if (!day || !day.ready || !Array.isArray(day.items)) return;

  const stops = day.items.filter((it) => it.type === "stop" && it.lat && it.lon);
  if (stops.length === 0) return;

  const color = window.DAY_COLORS[day.day] || "#FF6B4A";
  const map = L.map(containerId, { scrollWheelZoom: false });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; OpenStreetMap',
    maxZoom: 19
  }).addTo(map);

  const latlngs = stops.map((s) => [s.lat, s.lon]);
  let allBounds = latlngs.slice();

  if (latlngs.length > 1) {
    L.polyline(latlngs, { color: color, weight: 4, opacity: 0.8, dashArray: "1,10", lineCap: "round" }).addTo(map);
  }

  stops.forEach((s, idx) => {
    const icon = L.divIcon({
      className: "",
      html: `<div style="
        width:28px;height:28px;border-radius:50%;
        background:${color};color:#fff;font-weight:900;font-size:13px;
        display:flex;align-items:center;justify-content:center;
        border:3px solid #fff;box-shadow:0 3px 8px rgba(0,0,0,0.25);
        font-family:'Fredoka',sans-serif;
      ">${idx + 1}</div>`,
      iconSize: [28, 28],
      iconAnchor: [14, 14]
    });
    const marker = L.marker([s.lat, s.lon], { icon }).addTo(map);
    const popupHtml = `
      <div style="font-family:'Noto Sans TC',sans-serif;min-width:140px;">
        <div style="font-weight:900;font-size:13.5px;color:#22303D;">${escapeHtml(s.title)}</div>
        ${s.time ? `<div style="font-size:11.5px;color:#8A8060;margin-top:2px;">${escapeHtml(s.time)}${s.timeEnd ? " - " + escapeHtml(s.timeEnd) : ""}</div>` : ""}
        ${s.mapUrl ? `<a href="${s.mapUrl}" target="_blank" rel="noopener" style="font-size:11.5px;font-weight:800;color:${color};">在 Google 地圖開啟 →</a>` : ""}
      </div>`;
    marker.bindPopup(popupHtml);

    // 二選一/多選一子地點：用小圓點標示 + 細虛線連回主點
    if (Array.isArray(s.choices)) {
      s.choices.forEach((c, cIdx) => {
        if (!c.lat || !c.lon) return;
        const label = c.label || String.fromCharCode(65 + cIdx);
        L.polyline([[s.lat, s.lon], [c.lat, c.lon]], {
          color: "#B7AD8F", weight: 2, opacity: 0.7, dashArray: "3,6"
        }).addTo(map);
        const cIcon = L.divIcon({
          className: "",
          html: `<div style="
            width:20px;height:20px;border-radius:50%;
            background:#fff;color:${color};font-weight:900;font-size:10px;
            display:flex;align-items:center;justify-content:center;
            border:2.5px solid ${color};box-shadow:0 2px 6px rgba(0,0,0,0.2);
            font-family:'Fredoka',sans-serif;
          ">${escapeHtml(label)}</div>`,
          iconSize: [20, 20],
          iconAnchor: [10, 10]
        });
        const cMarker = L.marker([c.lat, c.lon], { icon: cIcon }).addTo(map);
        cMarker.bindPopup(`
          <div style="font-family:'Noto Sans TC',sans-serif;min-width:140px;">
            <div style="font-size:11px;color:#8A8060;font-weight:800;">選項${escapeHtml(label)}</div>
            <div style="font-weight:900;font-size:13px;color:#22303D;">${escapeHtml(c.title)}</div>
            ${c.mapUrl ? `<a href="${c.mapUrl}" target="_blank" rel="noopener" style="font-size:11.5px;font-weight:800;color:${color};">在 Google 地圖開啟 →</a>` : ""}
          </div>`);
        allBounds.push([c.lat, c.lon]);
      });
    }
  });

  if (allBounds.length > 1) {
    map.fitBounds(allBounds, { padding: [28, 28] });
  } else {
    map.setView(allBounds[0], 15);
  }
}

/**
 * 產生地點照片區塊 HTML,三種形態:
 *   1. 實照      - 附 Commons 授權標示「照片：作者 / 授權」
 *   2. 示意插圖  - photo.illustration === true,附「示意插圖」標籤
 *                 (畫的是同類型場所而非該店實景,一定要標示)
 *   3. 佔位圖    - photo.placeholder === true,該天代表色的漸層＋emoji
 * @param {object} photo - item.photo
 * @param {number} dayNum - 第幾天(決定佔位圖配色)
 */
function renderPhoto(photo, dayNum) {
  if (!photo) return "";
  const color = window.DAY_COLORS[dayNum] || "#FF6B4A";

  if (photo.placeholder) {
    return `
      <div class="stop-photo stop-photo--placeholder"
           style="background:linear-gradient(135deg, ${color}22 0%, ${color}4D 100%); border-color:${color}66;"
           role="img" aria-label="${escapeHtml(photo.alt || "照片待補")}">
        <span class="stop-photo__emoji" aria-hidden="true">${photo.emoji || "📷"}</span>
        <span class="stop-photo__pending">照片待補</span>
      </div>`;
  }

  const c = photo.credit || {};
  let noteHtml = "";
  if (photo.illustration) {
    // 示意插圖：畫的是同類型場所，不是該地點的實際照片，必須標示清楚
    noteHtml = `<span class="stop-photo__credit stop-photo__tag">示意插圖</span>`;
  } else if (c.author && c.license && c.sourceUrl) {
    noteHtml = `<a class="stop-photo__credit" href="${c.sourceUrl}" target="_blank" rel="noopener">照片：${escapeHtml(c.author)} / ${escapeHtml(c.license)}</a>`;
  }

  return `
    <figure class="stop-photo">
      <img src="${photo.src}" alt="${escapeHtml(photo.alt || "")}"
           width="1200" height="675" loading="lazy" decoding="async">
      ${noteHtml}
    </figure>`;
}

/**
 * 產生逐時時間軸 HTML,插入到指定容器(供各天頁面共用)
 * @param {string} containerId
 * @param {Array} items - day.items
 * @param {number} [dayNum] - 第幾天,用於佔位圖配色(省略時退回預設珊瑚紅)
 */
function renderTimeline(containerId, items, dayNum) {
  const el = document.getElementById(containerId);
  if (!el || !Array.isArray(items)) return;
  el.innerHTML = "";

  items.forEach((item) => {
    if (item.type === "transport") {
      const row = document.createElement("div");
      row.className = "timeline-transport" + (item.note && item.note.includes("步行") ? " walk" : "");
      row.innerHTML = `🚗 ${escapeHtml(item.note || "")}`;
      el.appendChild(row);
      return;
    }
    const row = document.createElement("div");
    row.className = "timeline-item" + (item.highlight ? " is-highlight" : "");
    const timeLabel = item.time ? (item.timeEnd ? `${item.time} - ${item.timeEnd}` : item.time) : "";

    let choicesHtml = "";
    if (Array.isArray(item.choices)) {
      choicesHtml = `<div class="timeline-choices">` + item.choices.map((c, idx) => {
        const label = c.label || String.fromCharCode(65 + idx);
        return `
          <div class="timeline-choice">
            <span class="timeline-choice__label">${escapeHtml(label)}</span>
            <div class="timeline-choice__body">
              <div class="timeline-choice__title">${escapeHtml(c.title)}</div>
              ${c.sub ? `<div class="timeline-choice__sub">${escapeHtml(c.sub)}</div>` : ""}
            </div>
            ${c.mapUrl ? `<a class="timeline-link" href="${c.mapUrl}" target="_blank" rel="noopener">地圖 →</a>` : ""}
          </div>`;
      }).join("") + `</div>`;
    }

    row.innerHTML = `
      <div class="timeline-item__icon">${item.icon || (item.isEnd ? "🏨" : (item.highlight ? "⭐" : "📍"))}</div>
      <div class="timeline-item__body">
        <div class="timeline-item__time">${escapeHtml(timeLabel)}</div>
        <div class="timeline-item__title">${escapeHtml(item.title)}</div>
        <div class="timeline-item__sub">${item.sub || ""}</div>
        ${renderPhoto(item.photo, dayNum)}
        ${item.mapUrl ? `<a class="timeline-link" href="${item.mapUrl}" target="_blank" rel="noopener" style="display:inline-block; margin-top:8px;">Google 地圖 →</a>` : ""}
        ${item.detailLink ? `<a class="timeline-link" href="${item.detailLink.href}" style="display:inline-block; margin-top:8px; margin-left:6px; background:#FFF0EC; border-color:#FFC9BB; color:#E5502E;">${escapeHtml(item.detailLink.label)}</a>` : ""}
        ${choicesHtml}
      </div>
    `;
    el.appendChild(row);
  });
}

/**
 * 建立「全行程總覽」地圖：每天各自一條路線＋圖例可切換顯示
 * @param {string} containerId - 地圖容器 DOM id
 * @param {string} legendId - 圖例容器 DOM id
 * @param {object} trip - window.TRIP
 */
function initOverviewMap(containerId, legendId, trip) {
  const el = document.getElementById(containerId);
  if (!el || typeof L === "undefined") return;

  const map = L.map(containerId, { scrollWheelZoom: false });
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; OpenStreetMap',
    maxZoom: 19
  }).addTo(map);

  const dayLayers = {};
  let allBounds = [];

  trip.days.forEach((day) => {
    const color = window.DAY_COLORS[day.day] || "#FF6B4A";
    const group = L.layerGroup();

    if (day.ready && Array.isArray(day.items)) {
      const stops = day.items.filter((it) => it.type === "stop" && it.lat && it.lon);
      const latlngs = stops.map((s) => [s.lat, s.lon]);

      if (latlngs.length > 0) {
        L.polyline(latlngs, { color, weight: 4, opacity: 0.8 }).addTo(group);
        stops.forEach((s, idx) => {
          const icon = L.divIcon({
            className: "",
            html: `<div style="
              width:22px;height:22px;border-radius:50%;
              background:${color};color:#fff;font-weight:900;font-size:10.5px;
              display:flex;align-items:center;justify-content:center;
              border:2.5px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,0.25);
              font-family:'Fredoka',sans-serif;
            ">${idx + 1}</div>`,
            iconSize: [22, 22],
            iconAnchor: [11, 11]
          });
          const marker = L.marker([s.lat, s.lon], { icon });
          marker.bindPopup(
            `<div style="font-family:'Noto Sans TC',sans-serif;">
              <div style="font-weight:900;font-size:12.5px;">Day${day.day}・${escapeHtml(s.title)}</div>
            </div>`
          );
          marker.addTo(group);
        });
        allBounds = allBounds.concat(latlngs);
      }
    } else {
      // 尚未展開細節的天數：只標飯店位置示意
      const hotel = trip.hotels.find((h) => h.id === day.hotel);
      if (hotel) {
        allBounds.push([hotel.lat, hotel.lon]);
      }
    }

    group.addTo(map);
    dayLayers[day.day] = group;
  });

  if (allBounds.length > 0) {
    map.fitBounds(allBounds, { padding: [30, 30] });
  } else {
    map.setView([26.35, 127.8], 10);
  }

  // 圖例（可點擊切換顯示／隱藏）
  const legendEl = document.getElementById(legendId);
  if (legendEl) {
    legendEl.innerHTML = "";
    trip.days.forEach((day) => {
      const color = window.DAY_COLORS[day.day] || "#FF6B4A";
      const item = document.createElement("span");
      item.className = "map-legend-item";
      item.innerHTML = `<span class="map-legend-item__dot" style="background:${color}"></span>Day${day.day} ${escapeHtml(day.title)}`;
      item.addEventListener("click", () => {
        const layer = dayLayers[day.day];
        if (!layer) return;
        if (map.hasLayer(layer)) {
          map.removeLayer(layer);
          item.classList.add("is-off");
        } else {
          layer.addTo(map);
          item.classList.remove("is-off");
        }
      });
      legendEl.appendChild(item);
    });
  }
}

/* ============================================================
   Open-Meteo 天氣小工具
   ============================================================ */

const WEATHER_ICONS = {
  0: "☀️", 1: "🌤️", 2: "⛅", 3: "☁️",
  45: "🌫️", 48: "🌫️",
  51: "🌦️", 53: "🌦️", 55: "🌦️",
  56: "🌧️", 57: "🌧️",
  61: "🌧️", 63: "🌧️", 65: "🌧️",
  66: "🌧️", 67: "🌧️",
  71: "🌨️", 73: "🌨️", 75: "🌨️", 77: "🌨️",
  80: "🌦️", 81: "🌧️", 82: "⛈️",
  85: "🌨️", 86: "🌨️",
  95: "⛈️", 96: "⛈️", 99: "⛈️"
};

function weatherIcon(code) {
  return WEATHER_ICONS[code] || "🌤️";
}

/**
 * 抓取指定座標＋日期的天氣，塞進指定容器。
 * Open-Meteo 免費預報通常只能提前約 10-16 天查詢，
 * 若日期超出範圍會優雅顯示「尚未到預報範圍」而非報錯。
 * @param {string} containerId
 * @param {number} lat
 * @param {number} lon
 * @param {string} dateStr - "YYYY-MM-DD"
 * @param {object} [options] - { variant: "badge" } day 頁 hero 右上角版型；
 *                             { variant: "mini" }  總覽頁逐日卡片右上角的一行極簡版型；
 *                             省略時維持最早的卡片版型(保留給其他頁面日後使用)
 */
async function loadWeather(containerId, lat, lon, dateStr, options) {
  const el = document.getElementById(containerId);
  if (!el) return;

  const variant = (options && options.variant) || "";
  const isBadge = variant === "badge";
  const isMini = variant === "mini";

  const pending = (past) => {
    if (isMini) return weatherMiniPendingHtml(el);
    if (isBadge) return weatherBadgePendingHtml(past);
    return weatherPendingHtml(dateStr, past);
  };

  const today = new Date();
  const target = new Date(dateStr + "T00:00:00");
  const diffDays = Math.round((target - today) / 86400000);

  // 明顯超出免費預報範圍（通常 16 天內），直接顯示提示，不發請求
  if (diffDays > 16) {
    el.innerHTML = pending(false);
    return;
  }
  if (diffDays < -1) {
    el.innerHTML = pending(true);
    return;
  }

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=Asia%2FTokyo&start_date=${dateStr}&end_date=${dateStr}`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("weather fetch failed");
    const data = await res.json();
    const daily = data.daily;
    if (!daily || !daily.time || daily.time.length === 0) {
      el.innerHTML = pending(false);
      return;
    }
    const code = daily.weathercode[0];
    const tMax = Math.round(daily.temperature_2m_max[0]);
    const tMin = Math.round(daily.temperature_2m_min[0]);
    const rain = daily.precipitation_probability_max[0];

    if (isMini) {
      // 一行放完、不折行：🌤️ 24-28° ☔30%
      el.innerHTML = `<span aria-hidden="true">${weatherIcon(code)} ${tMin}-${tMax}° ☔${rain}%</span>`;
      const label = `當日預報 ${tMin} 到 ${tMax} 度，降雨機率 ${rain}%`;
      el.setAttribute("aria-label", label);
      el.setAttribute("title", label);
      return;
    }

    if (isBadge) {
      el.innerHTML = `
        <div class="weather-badge__icon" aria-hidden="true">${weatherIcon(code)}</div>
        <div class="weather-badge__body">
          <div class="weather-badge__temp">${tMin}° - ${tMax}°</div>
          <div class="weather-badge__rain">☔ ${rain}%</div>
        </div>
      `;
      el.setAttribute("aria-label", `當日預報 ${tMin} 到 ${tMax} 度，降雨機率 ${rain}%`);
      return;
    }

    el.innerHTML = `
      <div class="weather__icon" style="font-size:22px;">${weatherIcon(code)}</div>
      <div>
        <div class="weather__label">當日預報</div>
        <div class="weather__temp">${tMin}° - ${tMax}°C</div>
        <div class="weather__rain">☔ 降雨機率 ${rain}%</div>
      </div>
    `;
  } catch (err) {
    el.innerHTML = pending(false);
  }
}

/**
 * hero 右上角天氣的「還查不到」版型。
 * 刻意用 🗓️ 而不是 ☀️／🌤️，避免被誤看成「當天是晴天」。
 */
/**
 * 總覽頁逐日卡片右上角的「還查不到」版型：只有一個 🗓️，不放任何說明文字。
 * 說明統一放在「📅 逐日行程」標題下方，整區只講一次。
 */
function weatherMiniPendingHtml(el) {
  if (el) {
    el.setAttribute("aria-label", "天氣預報尚未開放");
    el.setAttribute("title", "天氣預報尚未開放");
  }
  return `<span aria-hidden="true">🗓️</span>`;
}

function weatherBadgePendingHtml(isPast) {
  const main = isPast ? "已無預報" : "預報未開放";
  const note = isPast ? "此日期已過" : "出發前約 2 週開放查詢";
  return `
    <div class="weather-badge__icon" aria-hidden="true">🗓️</div>
    <div class="weather-badge__body">
      <div class="weather-badge__temp">${main}</div>
      <div class="weather-badge__note">${note}</div>
    </div>
  `;
}

function weatherPendingHtml(dateStr, isPast) {
  const msg = isPast
    ? "此日期已過，無預報資料"
    : "天氣預報通常只能提前約 10-16 天查詢，出發前再回來看這裡就會顯示囉";
  return `
    <div class="weather__icon" style="font-size:20px;">🌤️</div>
    <div>
      <div class="weather__label">${escapeHtml(dateStr)}</div>
      <div class="weather__note">${msg}</div>
    </div>
  `;
}

/* ============================================================
   資訊卡（班機／飯店）展開收合
   ============================================================ */

function initInfoCardToggles() {
  document.querySelectorAll(".info-card__head").forEach((head) => {
    head.addEventListener("click", (e) => {
      // 標題列裡的圖示連結(官網／地圖)不應該順便把卡片收起來
      if (e.target.closest("a")) return;
      const card = head.closest(".info-card");
      if (card) card.classList.toggle("is-open");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initInfoCardToggles();
});

/* ============================================================
   飯店詳情頁渲染
   ============================================================ */

function facilityBadgesHtml(item) {
  return (item.badges || []).map((b) => {
    const cls = b.tone === "pick" ? "chip chip--pick" : (b.tone === "warn" ? "chip chip--warn" : "chip");
    return `<span class="${cls}">${escapeHtml(b.label)}</span>`;
  }).join("");
}

function facilityRowsHtml(item) {
  return (item.rows || []).map((r) => `<div class="facility-card__row">${r}</div>`).join("");
}

/**
 * 卡片底部的外部連結（官網介紹／線上訂位）
 * @param {string} url
 * @param {string} text - 連結文字(不含箭頭)
 * @param {string} name - 場所名稱,用來組 aria-label
 * @param {boolean} [primary] - true 時用主要動作樣式(實心珊瑚紅)
 */
function cardLinkHtml(url, text, name, primary) {
  if (!url) return "";
  const label = `在新分頁開啟「${name}」的${text}`;
  return `<a class="timeline-link${primary ? " timeline-link--primary" : ""}" href="${escapeHtml(url)}"
             target="_blank" rel="noopener"
             title="${escapeHtml(label)}" aria-label="${escapeHtml(label)}">${text} →</a>`;
}

function renderFacilityCard(item) {
  // photo 若尚未提供就整段不輸出(插圖是分批補上的)
  const photoHtml = item.photo ? renderPhoto(item.photo) : "";
  const linksHtml = cardLinkHtml(item.url, "官網介紹", item.title);
  return `
    <div class="facility-card${item.free ? " is-free" : ""}">
      <div class="facility-card__title">${escapeHtml(item.title)}</div>
      <div class="facility-card__badges">${facilityBadgesHtml(item)}</div>
      ${facilityRowsHtml(item)}
      ${photoHtml}
      ${linksHtml ? `<div class="card-links">${linksHtml}</div>` : ""}
    </div>`;
}

function renderRestaurantCard(item) {
  // 訂位是主要動作(實心),官網介紹是次要動作(白底外框)
  const linksHtml = cardLinkHtml(item.url, "官網介紹", item.title)
    + cardLinkHtml(item.bookingUrl, "線上訂位", item.title, true);
  return `
    <div class="facility-card">
      <div class="facility-card__title">${escapeHtml(item.title)}</div>
      <div class="facility-card__row" style="font-weight:800; color:var(--sky-ink);">📍 ${escapeHtml(item.location || "")}</div>
      <div class="facility-card__badges">${facilityBadgesHtml(item)}</div>
      ${facilityRowsHtml(item)}
      ${linksHtml ? `<div class="card-links">${linksHtml}</div>` : ""}
    </div>`;
}

/**
 * 渲染飯店詳情頁(設施/活動 + 餐廳)
 * @param {string} hotelId - "hotel1" / "hotel2"
 */
function renderHotelDetail(hotelId) {
  const trip = window.TRIP;
  const hotel = trip.hotels.find((h) => h.id === hotelId);
  if (!hotel) return;

  document.title = `${hotel.name} － 沖繩親子自由行`;
  const nameEl = document.getElementById("hotel-name");
  if (nameEl) nameEl.textContent = hotel.name;
  const areaEl = document.getElementById("hotel-area");
  if (areaEl) areaEl.textContent = `${hotel.area}　${hotel.checkIn} → ${hotel.checkOut}（${hotel.nights}）`;
  const introEl = document.getElementById("hotel-intro");
  if (introEl) introEl.textContent = hotel.intro || "";
  const photoEl = document.getElementById("hotel-photo");
  if (photoEl && hotel.photo) {
    // 佔位圖配色沿用該飯店入住當天的代表色
    photoEl.innerHTML = renderPhoto(hotel.photo, hotelId === "hotel1" ? 1 : 4);
  }
  const websiteEl = document.getElementById("hotel-website");
  if (websiteEl) websiteEl.href = hotel.website;
  const mapEl = document.getElementById("hotel-map-link");
  if (mapEl) mapEl.href = hotel.mapUrl;

  const facGrid = document.getElementById("facility-grid");
  if (facGrid && Array.isArray(hotel.facilities)) {
    facGrid.innerHTML = hotel.facilities.map(renderFacilityCard).join("");
  }
  const facNoteEl = document.getElementById("facility-note");
  if (facNoteEl) facNoteEl.textContent = hotel.facilitiesNote || "";

  const resGrid = document.getElementById("restaurant-grid");
  if (resGrid && Array.isArray(hotel.restaurants)) {
    resGrid.innerHTML = hotel.restaurants.map(renderRestaurantCard).join("");
  }
  const resNoteEl = document.getElementById("restaurant-note");
  if (resNoteEl) resNoteEl.textContent = hotel.restaurantsNote || "";
}
