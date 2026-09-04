/* ============================================================
   沖繩親子自由行 — 結構化行程資料
   2026/10/20(二) - 10/25(日),6天5夜
   注意:座標為概略值(用於地圖示意呈現整體路線),
   實際導航一律以每個地點附的 Google Maps 連結為準。
   ============================================================ */

window.TRIP = {
  slug: "2026-okinawa",
  title: "沖繩親子自由行",
  subtitle: "帶著4.5歲的孩子，飛去沖繩曬太陽、玩水、吃燒肉。",
  dateStart: "2026-10-20",
  dateEnd: "2026-10-25",
  datesLabel: "2026/10/20（二）－ 10/25（日）",

  flights: [
    {
      dir: "去程",
      date: "2026/10/20（二）",
      carrier: "長榮航空",
      flightNo: "BR112",
      aircraft: "空中巴士 A321・經濟艙",
      from: "桃園機場 T2",
      to: "那霸機場 國際線航廈",
      depart: "06:45",
      arrive: "09:15",
      baggage: "手提1件7公斤（含個人物品）／託運1件23公斤",
      note: "建議提前2小時到機場",
      website: "https://www.evaair.com"
    },
    {
      dir: "回程",
      date: "2026/10/25（日）",
      carrier: "星宇航空",
      flightNo: "JX871",
      aircraft: "空中巴士 A350-900・經濟艙",
      from: "那霸機場 國際線航廈",
      to: "桃園機場 T1",
      depart: "15:25",
      arrive: "16:10",
      baggage: "手提1件7公斤（含個人物品）／託運2件23公斤",
      note: "建議提前2小時到機場",
      website: "https://www.starlux-airlines.com"
    }
  ],

  hotels: [
    {
      id: "hotel1",
      name: "沖繩嘉利吉海灘海洋溫泉度假村",
      nameEn: "Kariyushi Beach Resort Ocean Spa",
      area: "恩納村",
      checkIn: "2026/10/20",
      checkOut: "2026/10/23",
      nights: "3晚",
      room: "翼塔頂層5F海洋觀景房／39-42㎡",
      features: "含早餐・私人停車位・室內泳池・室外泳池",
      website: "https://kariyushi-oceanspa.jp/",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=%E6%B2%96%E7%B8%84%E3%81%8B%E3%82%8A%E3%82%86%E3%81%97%E3%83%93%E3%83%BC%E3%83%81%E3%83%AA%E3%82%BE%E3%83%BC%E3%83%88%20%E3%82%AA%E3%83%BC%E3%82%B7%E3%83%A3%E3%83%B3%E3%82%B9%E3%83%91",
      lat: 26.4850, lon: 127.8250,
      detailUrl: "hotel1.html",
      hasDetail: true,
      photo: { src: "images/hotel1.jpg", alt: "海灘度假村的示意插圖：泳池、沙灘與玩沙的小孩", illustration: true },
      intro: "以「森之湯」大展望浴場、多樣海洋活動與六間風格餐廳聞名的度假村，Day3飯店自由日整天都會待在這裡，以下是完整設施、活動與餐廳資訊（2026-09-01已用官網查證）。",
      facilities: [
        {
          title: "森之湯（大展望風呂／大展望浴場）",
          url: "https://kariyushi-oceanspa.jp/spa/",
          photo: { src: "images/hotel1-spa.jpg", alt: "森之湯大展望浴場的示意插圖：木造浴場、落地窗外的森林與海", illustration: true },
          badges: [{ label: "大人¥600・小學生¥300／單次", tone: "" }],
          rows: [
            "全天票：大人¥1,000／小學生¥500（可無限次使用至隔日9:00）",
            "未就學兒童由保護者陪同免費（我們家小孩4.5歲適用）",
            "時間：6:00-9:00、13:00-23:00（週三15:00起）",
            "不需預約，無特別年齡限制"
          ]
        },
        {
          title: "ワンダールーム（兒童遊戲室，室內）",
          url: "https://kariyushi-oceanspa.jp/kids/",
          photo: { src: "images/hotel1-kidsroom.jpg", alt: "室內兒童遊戲室的示意插圖：木製攀爬架、溜滑梯、球池與家家酒廚房", illustration: true },
          badges: [{ label: "免費", tone: "pick" }, { label: "07:00-21:00", tone: "" }],
          rows: [
            "木製叢林攀爬架／溜滑梯／球池／家家酒區",
            "無年齡限制、不需預約，下雨天也能玩",
            "最推薦：免費、無限制、風雨無阻"
          ],
          free: true
        },
        {
          title: "かりゆしウォーターランド（水上樂園）",
          url: "https://kariyushi-beach.co.jp/activities/water_land/",
          photo: { src: "images/hotel1-waterland.jpg", alt: "海上水上樂園的示意插圖：充氣滑水道、彈跳床與攀岩牆", illustration: true },
          badges: [{ label: "大人¥3,300・小孩¥2,750", tone: "" }, { label: "滿4歲以上", tone: "warn" }],
          rows: [
            "10月營業時間9:00-17:00（12:00-13:00安全檢查暫停）",
            "現場報名，有小尺寸救生衣",
            "小孩剛好符合最低年齡限制"
          ]
        },
        {
          title: "チャイルドチューブ（兒童拖曳圈）",
          url: "https://kariyushi-beach.co.jp/activities/child_tube/",
          photo: { src: "images/hotel1-childtube.jpg", alt: "兒童拖曳圈的示意插圖：大人抱著小孩坐在拖曳圈上，前方小艇牽引", illustration: true },
          badges: [{ label: "¥4,400／次・約10分", tone: "" }, { label: "1-6歲限定", tone: "pick" }],
          rows: [
            "現場報名，無法預約",
            "需家長陪同，大人不可單獨參加",
            "專為這個年齡設計，很適合"
          ]
        },
        {
          title: "ジェットスキー（水上摩托車同乘）",
          url: "https://kariyushi-beach.co.jp/activities/jet_ski/",
          photo: { src: "images/hotel1-jetski.jpg", alt: "水上摩托車同乘的示意插圖：教練載著小孩，兩人戴安全帽穿救生衣", illustration: true },
          badges: [{ label: "¥3,300／約10分", tone: "" }, { label: "3歲以上可同乘", tone: "" }],
          rows: [
            "由教練駕駛，定員1名乘客同乘",
            "現場報名，無法預約",
            "小孩坐同乘不用自己操控，適合"
          ]
        },
        {
          title: "グラスボート（玻璃底船）",
          url: "https://kariyushi-beach.co.jp/activities/glass_boat/",
          photo: { src: "images/hotel1-glassboat.jpg", alt: "玻璃底船的示意插圖：船上一家人與水下觀景窗，窗外是珊瑚與海龜", illustration: true },
          badges: [{ label: "大人¥2,200・小孩¥1,100", tone: "" }, { label: "約20分", tone: "" }],
          rows: [
            "每小時00分、30分各一班，9:00-16:30",
            "建議預約（電話／信箱）",
            "未特別標示年齡限制"
          ]
        },
        {
          title: "ドラゴンボート（拖曳龍舟）",
          url: "https://kariyushi-beach.co.jp/activities/dragon_boat/",
          photo: { src: "images/hotel1-dragonboat.jpg", alt: "拖曳龍舟的示意插圖：長條充氣船上多人穿救生衣乘坐", illustration: true },
          badges: [{ label: "大人¥2,500・小孩¥2,000", tone: "" }, { label: "身高100cm以上", tone: "warn" }],
          rows: [
            "約10分，現場報名，全年開放",
            "4.5歲平均身高約100-107cm，建議現場請店員量測確認",
            "⚠️視小孩實際身高而定"
          ]
        },
        {
          title: "海灘用品租借",
          url: "https://kariyushi-beach.co.jp/rental/",
          photo: { src: "images/hotel1-rental.jpg", alt: "海灘用品租借的示意插圖：沙灘椅、陽傘與租借小屋", illustration: true },
          badges: [{ label: "躺椅¥1,650／傘¥1,650", tone: "" }],
          rows: [
            "傘椅套組（傘1＋躺椅2）¥3,850／日",
            "官網未查到「海灘入場費」項目，建議向飯店櫃台確認"
          ]
        }
      ],
      facilitiesNote: "⚠️海底漫步（シーウォーク，限小學生以上／¥9,900）、浮潛行程（スノーケルツアー，限6-59歲／¥5,500）、海上拖曳傘（パラセーリング，限滿10歲以上／¥9,900）三項因年齡限制小孩都不能玩，已從清單移除。チャイルドチューブ／水上摩托車／ドラゴンボート／水上樂園皆為現場當天報名，無法事先預約，建議當天早上先到海灘服務台（マリンカウンター）詢問排隊狀況。電話：0980-52-4093（8:30-17:30）。",
      restaurants: [
        {
          title: "THE DINING 暖琉満菜",
          url: "https://kariyushi-oceanspa.jp/restaurant/dining/",
          location: "ウイングタワー1F",
          badges: [{ label: "早／午／晚餐", tone: "" }, { label: "無國界百匯", tone: "pick" }],
          rows: [
            "使用自家農園及沖繩契約農家直送島野菜、近海魚、島豬等食材",
            "選擇多元適合全家"
          ],
          bookingUrl: "https://www.tablecheck.com/shops/kariyushi-oceanspa-dining/reserve"
        },
        {
          title: "BBQガーデン CHI",
          url: "https://kariyushi-oceanspa.jp/restaurant/bbq/",
          location: "ウイングタワーBF",
          badges: [{ label: "僅晚餐", tone: "" }, { label: "BBQ吃到飽", tone: "pick" }],
          rows: [
            "30種嚴選牛肉及新鮮海鮮吃到飽",
            "泳池海景特等席可邊看夕陽邊吃"
          ],
          bookingUrl: "https://www.tablecheck.com/shops/kariyushi-oceanspa-bbq/reserve"
        },
        {
          title: "やきにく 朝Cho（燒肉 朝Cho）",
          url: "https://kariyushi-oceanspa.jp/restaurant/cho/",
          location: "ウイングタワー1F",
          badges: [{ label: "僅晚餐", tone: "" }, { label: "⚠️查證時休業中", tone: "warn" }],
          rows: [
            "完全預約制燒肉專門店，沖繩和牛／やんばる島豬，備長炭燒烤",
            "出發前請再次確認是否恢復營業"
          ]
        },
        {
          title: "サンセットテラス（夕陽露臺）",
          url: "https://kariyushi-oceanspa.jp/restaurant/sunsetterrace/",
          location: "オーシャンタワー1F",
          badges: [{ label: "僅晚餐", tone: "" }, { label: "夏季季節限定", tone: "warn" }],
          rows: [
            "泳池畔全席露天座，度假風輕食",
            "週末有沖繩縣內藝人島唄／Jazz現場演出",
            "10月是否營業需另外向飯店確認"
          ],
          bookingUrl: "https://www.tablecheck.com/shops/kariyushi-oceanspa-sunsetterrace/reserve"
        },
        {
          title: "バーラウンジ タイラ",
          url: "https://kariyushi-oceanspa.jp/restaurant/bar_taira/",
          location: "ウイングタワー1F",
          badges: [{ label: "全天", tone: "" }, { label: "調酒／世界名酒", tone: "" }],
          rows: ["海景第一排，適合大人晚上小酌"],
          bookingUrl: "https://www.tablecheck.com/shops/kariyushi-oceanspa-taira/reserve"
        },
        {
          title: "デリ＆カフェ",
          url: "https://kariyushi-oceanspa.jp/restaurant/delicafe-menu/",
          location: "ウイングタワー1F（酒吧廊入口旁）",
          badges: [{ label: "11:00-21:30", tone: "" }, { label: "熟食／輕食", tone: "" }],
          rows: ["20多種飯糰／三明治等沖繩食材輕食，可外帶，數量有限售完為止"]
        }
      ],
      restaurantsNote: "餐廳線上訂位系統（THE DINING／BBQガーデン CHI／サンセットテラス皆可透過此系統）：TableCheck訂位頁｜飯店代表電話：098-967-8731。建議：晚餐若想輕鬆吃到飽、小孩也方便自己夾菜 → THE DINING暖琉満菜或BBQガーデン CHI；若朝Cho燒肉屆時已恢復營業，也是不錯選項但需另外確認訂位規則。"
    },
    {
      id: "hotel2",
      name: "沖繩國際通那霸棕櫚皇家度假飯店",
      nameEn: "Hotel Palm Royal Naha Kokusai Street",
      area: "那霸・國際通",
      checkIn: "2026/10/23",
      checkOut: "2026/10/25",
      nights: "2晚",
      room: "尊貴雙床房",
      features: "含早餐",
      website: "https://en.palmroyal.co.jp/index.php",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=%E3%83%9B%E3%83%86%E3%83%AB%E3%83%91%E3%83%BC%E3%83%A0%E3%83%AD%E3%82%A4%E3%83%A4%E3%83%ABNAHA%E5%9B%BD%E9%9A%9B%E9%80%9A",
      lat: 26.2141, lon: 127.6893,
      photo: { src: "images/hotel2.jpg", alt: "市區飯店的示意插圖：街景、頂樓泳池與夕陽", illustration: true },
      intro: "位於國際通上的都會度假飯店，官網主打「國際通上唯一擁有戶外泳池與樓頂大型公共浴池」的飯店，設施規模比恩納村的度假村小，適合Day4-6在市區逛街購物的兩晚（2026-09-01已用官網查證，內容以英文版官網為主，中文資訊較少，建議入住時再向櫃台確認細節）。",
      facilities: [
        {
          title: "Royal Spa（樓頂大型公共浴池）",
          badges: [{ label: "國際通唯一", tone: "pick" }],
          rows: ["位於建築樓頂的大型公共浴池", "官網強調是國際通上唯一擁有大型公共浴池的飯店"]
        },
        {
          title: "戶外游泳池",
          badges: [{ label: "奈米科技水處理", tone: "" }],
          rows: ["國際通上少見的戶外泳池設施", "與Poolside Bar相鄰"]
        },
        {
          title: "RAM 藝術畫廊",
          badges: [{ label: "免費參觀", tone: "pick" }],
          rows: ["RAM（皇家藝術博物館）塔樓各樓層主題不同", "收藏古代琉球王國至現代世界藝術作品"]
        }
      ],
      facilitiesNote: "⚠️此飯店官網英文版內容較精簡，未列出詳細開放時間／年齡限制／收費資訊，設施規模也明顯比飯店1的度假村小很多；建議Check-in時直接向櫃台索取設施導覽或詢問泳池、浴池的開放時間。",
      restaurants: [
        {
          title: "KUNCHI Meal（早餐）",
          location: "－",
          badges: [{ label: "早餐", tone: "" }, { label: "含在房價內", tone: "pick" }],
          rows: ["以沖繩特色食材為主，強調「平衡飲食」", "融合當地海鮮與農產品"]
        },
        {
          title: "Poolside Bar & Dining",
          location: "戶外泳池畔",
          badges: [{ label: "飲品／輕食", tone: "" }],
          rows: ["泳池邊酒吧，提供音樂與飲品服務", "透過粉紅色牆通道進入，走「熱帶綠洲」風格"]
        }
      ],
      restaurantsNote: "此飯店附設餐飲選擇不多，晚餐建議以Day4已排定的國際通／屋台村夜市周邊自由覓食為主；飯店代表電話：098-865-5551。",
      detailUrl: "hotel2.html",
      hasDetail: true
    }
  ],

  days: [
    /* ---------------- Day1 ---------------- */
    {
      day: 1,
      date: "2026-10-20",
      dateLabel: "2026年10月20日",
      weekday: "二",
      title: "抵達日",
      desc: "那霸機場 → 波上宮 → 美國村 → 殘波岬公園 → MaxValu讀谷店 → 入住飯店1",
      hotel: "hotel1",
      transport: "4人座包車・10小時（JPY 34,000）",
      weatherAnchor: { lat: 26.4850, lon: 127.8250 },
      ready: true,
      items: [
        {
          type: "stop",
          time: "09:10", timeEnd: "10:30",
          title: "那霸機場",
          photo: {
            src: "images/day1-naha-airport.jpg",
            alt: "那霸機場航廈外觀與候機大樓",
            credit: { author: "663highland", license: "CC BY 2.5", sourceUrl: "https://commons.wikimedia.org/wiki/File:Naha_Airport12s3s4350.jpg" }
          },
          sub: "拿行李，上車補眠",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E9%82%A3%E8%A6%87%E7%A9%BA%E6%B8%AF",
          lat: 26.1958, lon: 127.6459
        },
        { type: "transport", note: "約15分鐘" },
        {
          type: "stop",
          time: "11:00", timeEnd: "12:00",
          title: "波上宮",
          photo: {
            src: "images/day1-naminoue.jpg",
            alt: "波上宮座落於海崖之上，下方為波之上海灘",
            credit: { author: "Zairon", license: "CC BY 4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Naha_Naminoue_Beach_%26_Naminoue-gu_06.jpg" }
          },
          sub: "沖繩最具代表性的神社之一",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E6%B3%A2%E4%B8%8A%E5%AE%AE",
          lat: 26.2136, lon: 127.6693
        },
        { type: "transport", note: "約40分鐘" },
        {
          type: "stop", highlight: true,
          time: "12:40", timeEnd: "15:30",
          title: "美國村",
          photo: {
            src: "images/day1-american-village.jpg",
            alt: "美國村（美浜town resort）色彩繽紛的街景與 BLUE SEAL 冰淇淋店",
            credit: { author: "Suikotei", license: "CC BY-SA 4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Mihama_Town_Resort_American_Village_20160720.jpg" }
          },
          sub: "在美國村逛街放鬆，午餐二選一（依當天現場決定，兩個選項都保留）",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E7%BE%8E%E6%B5%9C%E3%82%A2%E3%83%A1%E3%83%AA%E3%82%AB%E3%83%B3%E3%83%93%E3%83%AC%E3%83%83%E3%82%B8",
          lat: 26.3156, lon: 127.7583,
          choices: [
            {
              label: "A",
              title: "迴轉壽司市場 美浜店",
              sub: "迴轉壽司，新鮮海鮮選擇多，適合全家",
              mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%9B%9E%E8%BB%A2%E5%AF%BF%E5%8F%B8%E5%B8%82%E5%A0%B4%E7%BE%8E%E6%B5%9C%E5%BA%97",
              lat: 26.3129, lon: 127.7601
            },
            {
              label: "B",
              title: "牛骨琉球拉麵 MARUMARO 北谷店",
              sub: "沖繩傳統牛骨湯頭拉麵",
              mapUrl: "https://www.google.com/maps/search/?api=1&query=%E7%89%9B%E9%AA%A8%E7%90%89%E7%90%83%E3%83%A9%E3%83%BC%E3%83%A1%E3%83%B3MARUMARO%E5%8C%97%E8%B0%B7%E5%BA%97",
              lat: 26.3149, lon: 127.7595
            }
          ]
        },
        { type: "transport", note: "步行約10分鐘" },
        {
          type: "stop",
          time: "15:30", timeEnd: "16:00",
          title: "BLUE SEAL 北谷デポアイランド店",
          photo: { src: "images/day1-icecream.jpg", alt: "冰淇淋店的示意插圖：店內櫃檯與冰淇淋", illustration: true },
          sub: "沖繩人氣冰淇淋，美國村必吃甜點",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E3%83%96%E3%83%AB%E3%83%BC%E3%82%B7%E3%83%BC%E3%83%AB%E3%83%87%E3%83%9D%E3%82%A2%E3%82%A4%E3%83%A9%E3%83%B3%E3%83%89%E5%BA%97",
          lat: 26.3162, lon: 127.7607
        },
        { type: "transport", note: "約20-25分鐘" },
        {
          type: "stop",
          time: "16:20", timeEnd: "17:10",
          title: "殘波岬公園",
          photo: {
            src: "images/day1-zanpa.jpg",
            alt: "殘波岬的隆起珊瑚礁斷崖與東海海景",
            credit: { author: "そらみみ (Soramimi)", license: "CC BY-SA 4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Cliff_of_Cape_Zampa.JPG" }
          },
          sub: "斷崖絕景／燈塔／風獅爺拍照",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E6%AE%98%E6%B3%A2%E5%B2%AC%E5%85%AC%E5%9C%92",
          lat: 26.5010, lon: 127.7086
        },
        { type: "transport", note: "約20-25分鐘" },
        {
          type: "stop",
          time: "17:35", timeEnd: "18:10",
          title: "MaxValu 讀谷店",
          photo: { src: "images/day1-supermarket.jpg", alt: "超市的示意插圖：生鮮區與便當冷藏櫃", illustration: true },
          sub: "買熟食／便當當晚餐，順便採買",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E3%83%9E%E3%83%83%E3%82%AF%E3%82%B9%E3%83%90%E3%83%AA%E3%83%A5%E8%AA%AD%E8%B0%B7%E5%BA%97",
          lat: 26.3945, lon: 127.7280
        },
        { type: "transport", note: "約20-25分鐘" },
        {
          type: "stop", isEnd: true,
          time: "約18:30",
          title: "入住沖繩嘉利吉海灘海洋溫泉度假村",
          photo: { src: "images/hotel1.jpg", alt: "海灘度假村的示意插圖：泳池、沙灘與玩沙的小孩", illustration: true },
          sub: "Check-in，晚餐已在MaxValu解決",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E6%B2%96%E7%B8%84%E3%81%8B%E3%82%8A%E3%82%86%E3%81%97%E3%83%93%E3%83%BC%E3%83%81%E3%83%AA%E3%82%BE%E3%83%BC%E3%83%88%20%E3%82%AA%E3%83%BC%E3%82%B7%E3%83%A3%E3%83%B3%E3%82%B9%E3%83%91",
          lat: 26.4850, lon: 127.8250
        }
      ]
    },

    /* ---------------- Day2 ---------------- */
    {
      day: 2,
      date: "2026-10-21",
      dateLabel: "2026年10月21日",
      weekday: "三",
      title: "沖繩北部",
      desc: "美麗海水族館 → 燒肉King名護店 → MEGA唐吉訶德名護店",
      hotel: "hotel1",
      transport: "計程車分段叫車（已定案，約JPY 19,850）",
      weatherAnchor: { lat: 26.4850, lon: 127.8250 },
      ready: true,
      transportNote: "已定案採三段計程車分段叫車，總車資約JPY 19,850；需分3次分別叫車（尤其晚上唐吉訶德返程建議提前用App預約），且計程車無兒童安全座椅可用。詳見沖繩行程規劃文件。",
      items: [
        {
          type: "stop",
          time: "約10:00",
          title: "沖繩嘉利吉海灘海洋溫泉度假村",
          photo: { src: "images/hotel1.jpg", alt: "海灘度假村的示意插圖：泳池、沙灘與玩沙的小孩", illustration: true },
          sub: "飯店早餐，約10:00出發",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E6%B2%96%E7%B8%84%E3%81%8B%E3%82%8A%E3%82%86%E3%81%97%E3%83%93%E3%83%BC%E3%83%81%E3%83%AA%E3%82%BE%E3%83%BC%E3%83%88%20%E3%82%AA%E3%83%BC%E3%82%B7%E3%83%A3%E3%83%B3%E3%82%B9%E3%83%91",
          lat: 26.4850, lon: 127.8250
        },
        { type: "transport", note: "計程車約47分鐘・33.2公里／¥9,750" },
        {
          type: "stop", highlight: true,
          time: "11:00", timeEnd: "16:00",
          title: "沖繩美麗海水族館",
          photo: {
            src: "images/day2-churaumi.jpg",
            alt: "沖繩美麗海水族館「黑潮之海」大水槽中悠游的鯨鯊與魟魚",
            credit: { author: "Megapixie", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:Churaumi_Aquarium_main_tank_%27Kuroshio_Sea%27.jpg" }
          },
          sub: "海洋博公園園區，餵鯨鯊15:00／17:00，海豚秀／海豚礁湖，海豚／海龜餵食¥500，停留拉長為約5小時",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E6%B2%96%E7%B8%84%E7%BE%8E%E3%82%89%E6%B5%B7%E6%B0%B4%E6%97%8F%E9%A4%A8",
          lat: 26.6940, lon: 127.8778
        },
        { type: "transport", note: "計程車約40分鐘・17.8公里／¥5,350" },
        {
          type: "stop", highlight: true,
          time: "17:00", timeEnd: "19:00",
          title: "燒肉King 名護店",
          photo: { src: "images/day2-yakiniku.jpg", alt: "燒肉店的示意插圖：桌上的烤爐與牛肉片", illustration: true },
          sub: "吃到飽燒肉，小孩可自由取用喜歡的肉，務必事先訂位（平日17:00-23:00）",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E7%84%BC%E8%82%89%E3%82%AD%E3%83%B3%E3%82%B0%20%E5%90%8D%E8%AD%B7%E5%BA%97",
          lat: 26.5904, lon: 127.9757
        },
        { type: "transport", note: "步行約400公尺，約6分鐘" },
        {
          type: "stop",
          time: "19:00", timeEnd: "19:45",
          title: "MEGA唐吉訶德 名護店",
          photo: { src: "images/day2-variety-store.jpg", alt: "量販雜貨店的示意插圖：堆滿商品的貨架走道", illustration: true },
          sub: "逛街採買，已取代原本的MAX Valu Nago",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=MEGA%E5%94%90%E5%90%89%E8%A8%B6%E5%BE%B7%20%E5%90%8D%E8%AD%B7%E5%BA%97",
          lat: 26.5919, lon: 127.9722
        },
        { type: "transport", note: "計程車約23分鐘・15.8公里／¥4,750" },
        {
          type: "stop", isEnd: true,
          time: "約20:10",
          title: "返回沖繩嘉利吉海灘海洋溫泉度假村",
          photo: { src: "images/hotel1.jpg", alt: "海灘度假村的示意插圖：泳池、沙灘與玩沙的小孩", illustration: true },
          sub: "結束一天行程，休息",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E6%B2%96%E7%B8%84%E3%81%8B%E3%82%8A%E3%82%86%E3%81%97%E3%83%93%E3%83%BC%E3%83%81%E3%83%AA%E3%82%BE%E3%83%BC%E3%83%88%20%E3%82%AA%E3%83%BC%E3%82%B7%E3%83%A3%E3%83%B3%E3%82%B9%E3%83%91",
          lat: 26.4850, lon: 127.8250
        }
      ]
    },

    /* ---------------- Day3 ---------------- */
    {
      day: 3,
      date: "2026-10-22",
      dateLabel: "2026年10月22日",
      weekday: "四",
      title: "飯店自由日",
      desc: "不包車、不叫車，飯店設施／水上活動／餐廳自由運用",
      hotel: "hotel1",
      transport: "不包車、不叫車",
      weatherAnchor: { lat: 26.4850, lon: 127.8250 },
      ready: true,
      noMap: true,
      items: [
        {
          type: "stop", highlight: true,
          time: "09:30", timeEnd: "16:00",
          title: "飯店設施＋海洋活動自由選",
          photo: { src: "images/day3-marine.jpg", alt: "海洋活動的示意插圖：拖曳圈與玻璃底船", illustration: true },
          sub: "整天在飯店自由活動：免費ワンダールーム兒童遊戲室、かりゆしウォーターランド水上樂園（滿4歲）、チャイルドチューブ兒童拖曳圈（1-6歲限定）、水上摩托車同乘、玻璃底船、ドラゴンボート（需身高100cm以上）等，完整費用／時段／年齡限制請見飯店詳情頁",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E6%B2%96%E7%B8%84%E3%81%8B%E3%82%8A%E3%82%86%E3%81%97%E3%83%93%E3%83%BC%E3%83%81%E3%83%AA%E3%82%BE%E3%83%BC%E3%83%88%20%E3%82%AA%E3%83%BC%E3%82%B7%E3%83%A3%E3%83%B3%E3%82%B9%E3%83%91",
          lat: 26.4850, lon: 127.8250,
          detailLink: { href: "hotel1.html", label: "查看飯店完整設施／活動／年齡限制 →" }
        },
        {
          type: "stop",
          time: "17:00", timeEnd: "19:00",
          title: "飯店晚餐",
          photo: { src: "images/day3-dinner.jpg", alt: "泳池畔BBQ晚餐的示意插圖：夕陽與串燈", illustration: true },
          sub: "飯店內餐廳選一間：THE DINING暖琉満菜、BBQガーデンCHI吃到飽、サンセットテラス（季節性）等，餐廳介紹與訂位連結請見飯店詳情頁",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E6%B2%96%E7%B8%84%E3%81%8B%E3%82%8A%E3%82%86%E3%81%97%E3%83%93%E3%83%BC%E3%83%81%E3%83%AA%E3%82%BE%E3%83%BC%E3%83%88%20%E3%82%AA%E3%83%BC%E3%82%B7%E3%83%A3%E3%83%B3%E3%82%B9%E3%83%91",
          lat: 26.4850, lon: 127.8250,
          detailLink: { href: "hotel1.html", label: "查看飯店餐廳完整介紹 →" }
        }
      ]
    },

    /* ---------------- Day4 ---------------- */
    {
      day: 4,
      date: "2026-10-23",
      dateLabel: "2026年10月23日",
      weekday: "五",
      title: "換飯店日",
      desc: "Check-out → 沖繩兒童王國 → AEON MALL沖縄ライカム → Check-in飯店2 → 國際通自由逛街",
      hotel: "hotel2",
      transport: "4人座包車・8小時（JPY 32,000）",
      weatherAnchor: { lat: 26.2141, lon: 127.6893 },
      ready: true,
      items: [
        {
          type: "stop",
          time: "N/A", timeEnd: "09:30",
          title: "沖繩嘉利吉海灘海洋溫泉度假村",
          photo: { src: "images/hotel1.jpg", alt: "海灘度假村的示意插圖：泳池、沙灘與玩沙的小孩", illustration: true },
          sub: "Check-out，帶行李",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E6%B2%96%E7%B8%84%E3%81%8B%E3%82%8A%E3%82%86%E3%81%97%E3%83%93%E3%83%BC%E3%83%81%E3%83%AA%E3%82%BE%E3%83%BC%E3%83%88%20%E3%82%AA%E3%83%BC%E3%82%B7%E3%83%A3%E3%83%B3%E3%82%B9%E3%83%91",
          lat: 26.4850, lon: 127.8250
        },
        { type: "transport", note: "約44分鐘・35.1公里" },
        {
          type: "stop",
          time: "10:15", timeEnd: "12:15",
          title: "沖繩兒童王國",
          photo: {
            src: "images/day4-kodomonokuni.jpg",
            alt: "沖繩兒童王國入口的動物造型招牌",
            credit: { author: "Abasaa", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:Entrance_to_Okinawa_Zoo_%26_Museum.JPG" }
          },
          sub: "動物園＋室內兒童館，約150種動物；15歲以下免費入園（16歲以上¥1,000／人，我們2大人共¥2,000）。必玩：11:00動物餵食秀（屋久島猴／河馬，時間內剛好碰得到）、動物廣場餵食体驗¥300（平日10:00-12:00）、小火車／旋轉木馬¥400、迷你車¥100、スプラッシュパーク免費戲水區（水深約20cm）。行李留在包車上，不用帶進園區",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E6%B2%96%E7%B8%84%E3%81%93%E3%81%A9%E3%82%82%E3%81%AE%E5%9B%BD",
          lat: 26.3283, lon: 127.8034,
          links: [
            { url: "https://www.okzm.jp/", label: "官網介紹" },
            { url: "https://fullfenblog.tw/okinawa-zoo/", label: "中文介紹" }
          ]
        },
        { type: "transport", note: "約9分鐘・2.6公里" },
        {
          type: "stop", highlight: true,
          time: "12:25", timeEnd: "16:20",
          title: "AEON MALL沖縄ライカム",
          photo: {
            src: "images/day4-rycom.jpg",
            alt: "AEON MALL 沖縄ライカム主入口與棕櫚樹",
            credit: { author: "Kugel~commonswiki", license: "CC BY-SA 4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:AEON_Mall_Okinawa_Rycom_01.JPG" }
          },
          sub: "午餐／大創／UNIQLO／寶可夢中心／3COINS+plus／超市。現場各樓層都有置物櫃（大中小尺寸、1F含冷藏櫃），建議先到服務台拿折扣券",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E3%82%A4%E3%82%AA%E3%83%B3%E3%83%A2%E3%83%BC%E3%83%AB%E6%B2%96%E7%B8%84%E3%83%A9%E3%82%A4%E3%82%AB%E3%83%A0",
          lat: 26.3395, lon: 127.8016
        },
        { type: "transport", note: "約39分鐘・21.1公里" },
        {
          type: "stop", isEnd: true,
          time: "17:00", timeEnd: "17:30",
          title: "入住那霸棕櫚皇家度假飯店",
          photo: { src: "images/hotel2.jpg", alt: "市區飯店的示意插圖：街景、頂樓泳池與夕陽", illustration: true },
          sub: "Check-in飯店2，包車行程至此結束",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E3%83%9B%E3%83%86%E3%83%AB%E3%83%91%E3%83%BC%E3%83%A0%E3%83%AD%E3%82%A4%E3%83%A4%E3%83%ABNAHA%E5%9B%BD%E9%9A%9B%E9%80%9A",
          lat: 26.2141, lon: 127.6893
        },
        { type: "transport", note: "步行約10分鐘" },
        {
          type: "stop",
          time: "17:30", timeEnd: "",
          title: "平和通商店街 → 牧志公設市場 → 國際通／屋台村夜市",
          photo: {
            src: "images/day4-kokusai.jpg",
            alt: "那霸國際通街景，兩側是伴手禮店與棕櫚行道樹",
            credit: { author: "663highland", license: "CC BY 2.5", sourceUrl: "https://commons.wikimedia.org/wiki/File:Kokusai-dori08s3s4440.jpg" }
          },
          sub: "逛街購物、買海產樓上代客料理、藥妝店逛街，吃晚餐，自由活動不趕時間，玩累直接回飯店",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%9B%BD%E9%9A%9B%E9%80%9A%E3%82%8A%E5%B1%8B%E5%8F%B0%E6%9D%91",
          lat: 26.2160, lon: 127.6890
        }
      ]
    },

    /* ---------------- Day5 ---------------- */
    {
      day: 5,
      date: "2026-10-24",
      dateLabel: "2026年10月24日",
      weekday: "六",
      title: "沖繩世界＆PARCO City",
      desc: "玉泉洞&沖繩世界 → PARCO City",
      hotel: "hotel2",
      transport: "計程車分段叫車（已定案，約JPY 12,750）",
      weatherAnchor: { lat: 26.2141, lon: 127.6893 },
      ready: true,
      items: [
        {
          type: "stop",
          time: "N/A", timeEnd: "09:30",
          title: "那霸棕櫚皇家度假飯店",
          photo: { src: "images/hotel2.jpg", alt: "市區飯店的示意插圖：街景、頂樓泳池與夕陽", illustration: true },
          sub: "飯店早餐後出發（一日來回，仍住飯店2，不用搬行李）",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E3%83%9B%E3%83%86%E3%83%AB%E3%83%91%E3%83%BC%E3%83%A0%E3%83%AD%E3%82%A4%E3%83%A4%E3%83%ABNAHA%E5%9B%BD%E9%9A%9B%E9%80%9A",
          lat: 26.2141, lon: 127.6893
        },
        { type: "transport", note: "計程車約36分鐘・12.8公里／¥3,850" },
        {
          type: "stop", highlight: true,
          time: "10:10", timeEnd: "13:00",
          title: "玉泉洞＆沖繩世界",
          photo: {
            src: "images/day5-gyokusendo.jpg",
            alt: "玉泉洞鐘乳石洞內的步道與鐘乳石群",
            credit: { author: "FoxyStranger Kawasaki", license: "CC BY-SA 3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Gyokusendo_Cave_-_panoramio.jpg" }
          },
          sub: "超過一百萬個鐘乳石柱的巨大天然洞窟，停留拉長為約2.8小時",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E3%81%8A%E3%81%8D%E3%81%AA%E3%82%8F%E3%83%AF%E3%83%BC%E3%83%AB%E3%83%89%20%E7%8E%89%E6%B3%89%E6%B4%9E",
          lat: 26.1004, lon: 127.7318
        },
        { type: "transport", note: "計程車約40-51分鐘・約23-24公里／¥6,750（不走高速）" },
        {
          type: "stop", isEnd: true,
          time: "13:40", timeEnd: "20:00",
          title: "PARCO City",
          photo: { src: "images/day5-mall.jpg", alt: "購物中心的示意插圖：中庭電扶梯與天窗", illustration: true },
          sub: "逛街購物用餐。回程可選計程車（約28分／¥2,150）或公車309號（約50分／約¥280-500）",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E6%B2%96%E7%B8%84PARCO%20CITY",
          lat: 26.1560, lon: 127.6474
        }
      ]
    },

    /* ---------------- Day6 ---------------- */
    {
      day: 6,
      date: "2026-10-25",
      dateLabel: "2026年10月25日",
      weekday: "日",
      title: "回程日",
      desc: "退房 → IIAS沖繩豐崎 → 那霸機場搭JX871返台",
      hotel: "hotel2",
      transport: "計程車分段叫車（已定案，約JPY 5,200-5,800）",
      weatherAnchor: { lat: 26.2141, lon: 127.6893 },
      ready: true,
      items: [
        {
          type: "stop",
          time: "N/A", timeEnd: "10:00",
          title: "那霸棕櫚皇家度假飯店",
          photo: { src: "images/hotel2.jpg", alt: "市區飯店的示意插圖：街景、頂樓泳池與夕陽", illustration: true },
          sub: "退房，帶行李搭計程車",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E3%83%9B%E3%83%86%E3%83%AB%E3%83%91%E3%83%BC%E3%83%A0%E3%83%AD%E3%82%A4%E3%83%A4%E3%83%ABNAHA%E5%9B%BD%E9%9A%9B%E9%80%9A",
          lat: 26.2141, lon: 127.6893
        },
        { type: "transport", note: "計程車約30分鐘・10.2公里／¥3,150" },
        {
          type: "stop", highlight: true,
          time: "10:30", timeEnd: "13:00",
          title: "IIAS沖繩豐崎",
          photo: { src: "images/day6-iias.jpg", alt: "購物中心的示意插圖：賣場與大型水族箱", illustration: true },
          sub: "DMM水族館、購物、美食、退稅通通有；行李可寄放1F置物櫃（含冷藏櫃，10:00-21:00當日付費使用），逛街不用隨身帶著",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E3%82%A4%E3%83%BC%E3%82%A2%E3%82%B9%E6%B2%96%E7%B8%84%E8%B1%8A%E5%B4%8E",
          lat: 26.1478, lon: 127.6470
        },
        { type: "transport", note: "計程車約12分鐘・6.5公里／¥2,050" },
        {
          type: "stop", isEnd: true, icon: "✈️",
          time: "約13:30",
          title: "那霸機場",
          photo: {
            src: "images/day1-naha-airport.jpg",
            alt: "那霸機場航廈外觀與候機大樓",
            credit: { author: "663highland", license: "CC BY 2.5", sourceUrl: "https://commons.wikimedia.org/wiki/File:Naha_Airport12s3s4350.jpg" }
          },
          sub: "取回行李，提前2小時到機場，準備搭乘星宇航空JX871 15:25起飛→16:10抵達桃園T1",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E9%82%A3%E8%A6%87%E7%A9%BA%E6%B8%AF",
          lat: 26.1958, lon: 127.6459
        }
      ]
    }
  ],

  /* ============================================================
     行前準備物品清單（packing.html 使用）
     分類陣列，每個分類底下是項目字串陣列。
     ============================================================ */
  packingList: [
    {
      category: "證件與財力",
      items: [
        "護照（效期需6個月以上）",
        "Visit Japan Web 入境申請（入境審查＋海關申報 QR code，出發前至少 6 小時完成）",
        "電子機票／登機證",
        "訂房確認信（沖繩嘉利吉海灘海洋溫泉度假村／那霸棕櫚皇家度假飯店）",
        "信用卡",
        "日圓現金",
        "旅遊平安險保單"
      ]
    },
    {
      category: "3C與充電",
      items: [
        "手機",
        "行動電源",
        "萬用轉接頭（日本為A型雙孔110V，台灣電器可直接使用不用變壓器）",
        "相機／記憶卡",
        "各裝置充電線",
        "SIM卡或eSIM"
      ]
    },
    {
      category: "兒童專用",
      items: [
        "小孩護照",
        "常備藥（退燒藥／止瀉藥／暈車藥）",
        "兒童牙刷牙膏",
        "兒童沐浴組、浴巾、洗臉巾",
        "安撫玩具／繪本",
        "兒童餐具湯匙",
        "濕紙巾",
        "防走失手鍊（選配）"
      ]
    },
    {
      category: "衣物",
      items: [
        "泳衣泳褲（Day2水族館周邊、Day3飯店水上活動都會用到）",
        "快乾毛巾",
        "薄長袖／防曬外套（室內冷氣強，10月沖繩戶外仍炎熱）",
        "拖鞋／涼鞋",
        "帽子、太陽眼鏡",
        "備用衣物（小孩容易弄濕弄髒，建議多帶1-2套）"
      ]
    },
    {
      category: "盥洗與藥品",
      items: [
        "牙刷牙膏",
        "防曬乳（建議SPF50，10月沖繩仍炎熱）",
        "蘆薈膠／曬後修復",
        "個人慣用藥品",
        "水壺"
      ]
    },
    {
      category: "其他",
      items: [
        "輕便雨具（10月沖繩偶有陣雨）",
        "環保袋（購物用）",
        "行李秤（避免託運超重）",
        "萬用夾鏈袋（裝濕衣物／收據）"
      ]
    }
  ],

  shoppingList: [
    {
      category: "藥妝與保健",
      emoji: "💊",
      items: [
        {
          name: "休足時間（足貼）",
          desc: "走一整天路後睡前貼，隔天腳沒那麼痠。帶小孩走行程很需要。",
          where: "Day2 唐吉訶德名護店／Day4 AEON MALL（BIC CAMERA 3F）／Day4 國際通藥妝店",
          photo: { placeholder: true, emoji: "💊", alt: "休足時間（足貼）（照片待補）" }
        },
        {
          name: "EVE 止痛藥",
          desc: "日本經典止痛藥，台灣旅客回購率很高，家庭常備。",
          where: "Day2 唐吉訶德名護店／Day4 國際通藥妝店",
          photo: { placeholder: true, emoji: "💊", alt: "EVE 止痛藥（照片待補）" }
        },
        {
          name: "合利他命 EX PLUS",
          desc: "維生素B群保健品，日本熱銷款，送長輩很合適。",
          where: "Day2 唐吉訶德名護店／Day4 AEON MALL、國際通藥妝店",
          photo: { placeholder: true, emoji: "💊", alt: "合利他命 EX PLUS（照片待補）" }
        },
        {
          name: "花王 蒸氣眼罩",
          desc: "溫熱敷眼罩，多種香味可選，回國後自用或送人都好。",
          where: "Day2 唐吉訶德名護店／Day4 國際通藥妝店",
          photo: { placeholder: true, emoji: "💊", alt: "花王 蒸氣眼罩（照片待補）" }
        },
        {
          name: "參天 FX 眼藥水",
          desc: "清涼感明顯，緩解眼睛疲勞的經典款。",
          where: "Day4 國際通藥妝店／Day2 唐吉訶德名護店",
          photo: { placeholder: true, emoji: "💊", alt: "參天 FX 眼藥水（照片待補）" }
        },
        {
          name: "LuLuLun 面膜（沖繩限定）",
          desc: "含香檬、苦瓜、蘆薈、月桃等沖繩在地植萃，只有沖繩買得到的限定款。",
          where: "Day2 唐吉訶德名護店／Day4 國際通藥妝店",
          photo: { placeholder: true, emoji: "💊", alt: "LuLuLun 面膜（沖繩限定）（照片待補）" }
        },
        {
          name: "安耐曬（沖繩限定包裝）",
          desc: "高係數防曬、防水抗汗，限定包裝有收藏感；Day2、Day3 戲水也用得到。",
          where: "Day2 唐吉訶德名護店／Day4 AEON MALL",
          photo: { placeholder: true, emoji: "💊", alt: "安耐曬（沖繩限定包裝）（照片待補）" }
        },
        {
          name: "首里石鹼 SuiSavon 手工皂／護手霜",
          desc: "沖繩在地品牌，用月桃、洛神花等天然植物成分，包裝好看、送禮體面。",
          where: "Day4 AEON MALL沖縄ライカム",
          photo: { placeholder: true, emoji: "💊", alt: "首里石鹼 SuiSavon 手工皂／護手霜（照片待補）" }
        }
      ]
    },
    {
      category: "零食伴手禮",
      emoji: "🍪",
      items: [
        {
          name: "御菓子御殿 紅芋塔",
          desc: "100% 沖繩紫心地瓜內餡配酥軟塔皮，沖繩最經典的伴手禮，分送同事的安全牌。",
          where: "Day4 國際通／Day6 IIAS、那霸機場／Day2 唐吉訶德名護店",
          photo: { placeholder: true, emoji: "🍪", alt: "御菓子御殿 紅芋塔（照片待補）" }
        },
        {
          name: "南風堂 雪鹽金楚糕",
          desc: "宮古島雪鹽融入傳統琉球點心金楚糕，鹹甜層次很有記憶點。",
          where: "Day4 國際通／Day6 那霸機場",
          photo: {
            src: "images/shop-chinsuko.jpg",
            alt: "那霸店家貨架上成排的金楚糕盒裝伴手禮",
            credit: { author: "Yuet Man Lee", license: "CC BY-SA 4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Chinsuk%C5%8D_for_sale_in_Naha,_Okinawa.jpg" }
          }
        },
        {
          name: "雪鹽夾心餅乾",
          desc: "宮古島雪鹽搭空氣感巧克力夾心，鹹甜酥脆很涮嘴。",
          where: "Day4 國際通／Day6 那霸機場",
          photo: { placeholder: true, emoji: "🍪", alt: "雪鹽夾心餅乾（照片待補）" }
        },
        {
          name: "KitKat 沖繩限定紅芋口味",
          desc: "紅芋粉末配白巧克力，沖繩限定、台灣買不到，適合分小包送人。",
          where: "Day2 唐吉訶德名護店／Day6 那霸機場",
          photo: { placeholder: true, emoji: "🍪", alt: "KitKat 沖繩限定紅芋口味（照片待補）" }
        },
        {
          name: "ROYCE' 石垣島海鹽巧克力洋芋片",
          desc: "洋芋片裹巧克力再撒石垣島海鹽，甜鹹交錯。屬冷藏／怕熱商品，建議接近回程再買。",
          where: "Day5 PARCO CITY／Day6 IIAS、那霸機場",
          photo: { placeholder: true, emoji: "🍪", alt: "ROYCE' 石垣島海鹽巧克力洋芋片（照片待補）" }
        },
        {
          name: "Calbee+ 黑糖三色薯塊",
          desc: "紫薯、黃薯、白薯三色加沖繩黑糖調味，國際通門市有現做的。",
          where: "Day4 國際通",
          photo: { placeholder: true, emoji: "🍪", alt: "Calbee+ 黑糖三色薯塊（照片待補）" }
        },
        {
          name: "沖繩黑糖／黑糖糖果",
          desc: "平價又好分送，超市就買得到，重量輕、不怕壓。",
          where: "Day1 MaxValu讀谷店／Day4 AEON STYLE 超市",
          photo: { placeholder: true, emoji: "🍪", alt: "沖繩黑糖／黑糖糖果（照片待補）" }
        },
        {
          name: "風獅爺造型餅乾",
          desc: "造型可愛、口味有多種組合，小孩會喜歡，也適合送小朋友。",
          where: "Day4 國際通商店街",
          photo: { placeholder: true, emoji: "🍪", alt: "風獅爺造型餅乾（照片待補）" }
        },
        {
          name: "Orion 啤酒（含沖繩水果口味）",
          desc: "沖繩在地啤酒，另有鳳梨、檸檬等水果口味。酒類要託運，注意台灣入境限量。",
          where: "Day1 MaxValu讀谷店／Day2 唐吉訶德名護店／Day6 那霸機場",
          photo: { placeholder: true, emoji: "🍪", alt: "Orion 啤酒（含沖繩水果口味）（照片待補）" }
        },
        {
          name: "沖繩麵（生麵／乾麵組）",
          desc: "豬骨或雞骨結合柴魚湯底的沖繩鄉土料理，帶回家自己煮很有旅行延續感。",
          where: "Day4 牧志公設市場／Day1 MaxValu讀谷店",
          photo: {
            src: "images/shop-okinawa-soba.jpg",
            alt: "一碗附三層肉、魚板與紅薑的沖繩麵",
            credit: { author: "pelican from Tokyo, Japan", license: "CC BY-SA 2.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Okinawa_soba_noodle_(42195524970).jpg" }
          }
        }
      ]
    },
    {
      category: "兒童用品玩具",
      emoji: "🧸",
      items: [
        {
          name: "寶可夢中心 沖繩限定周邊",
          desc: "沖繩限定皮卡丘商品，空間寬敞、不需要抽整理券就能進去逛。Day4 在 AEON MALL 有 4.5 小時，時間很夠。",
          where: "Day4 AEON MALL沖縄ライカム 4F",
          photo: { placeholder: true, emoji: "🧸", alt: "寶可夢中心 沖繩限定周邊（照片待補）" }
        },
        {
          name: "三麗鷗專賣店（Sanrio）",
          desc: "Hello Kitty、美樂蒂等角色商品專賣。",
          where: "Day4 AEON MALL沖縄ライカム 4F",
          photo: { placeholder: true, emoji: "🧸", alt: "三麗鷗專賣店（Sanrio）（照片待補）" }
        },
        {
          name: "吉卜力 橡子共和國",
          desc: "龍貓、魔女宅急便等吉卜力周邊。",
          where: "Day4 AEON MALL沖縄ライカム 4F",
          photo: { placeholder: true, emoji: "🧸", alt: "吉卜力 橡子共和國（照片待補）" }
        },
        {
          name: "蠟筆小新專賣店",
          desc: "蠟筆小新角色周邊，日本限定款式多。",
          where: "Day4 AEON MALL沖縄ライカム 4F",
          photo: { placeholder: true, emoji: "🧸", alt: "蠟筆小新專賣店（照片待補）" }
        },
        {
          name: "曬黑款 Hello Kitty（日燒Kitty）",
          desc: "沖繩限定的曬黑造型 Kitty，吊飾、娃娃、T恤都有，是很有辨識度的沖繩紀念品。",
          where: "Day4 國際通／Day2 唐吉訶德名護店",
          photo: { placeholder: true, emoji: "🧸", alt: "曬黑款 Hello Kitty（日燒Kitty）（照片待補）" }
        },
        {
          name: "AEON STYLE 4F 婦嬰童裝玩具區",
          desc: "童裝、玩具、婦嬰用品集中在同一層，一次逛完最省力。",
          where: "Day4 AEON MALL沖縄ライカム 4F",
          photo: { placeholder: true, emoji: "🧸", alt: "AEON STYLE 4F 婦嬰童裝玩具區（照片待補）" }
        },
        {
          name: "3COINS+plus 兒童小物",
          desc: "平價生活雜貨，兒童餐具、收納、小玩具都很好逛，大多 300 日圓起。",
          where: "Day4 AEON MALL沖縄ライカム 2-3F／Day5 PARCO CITY",
          photo: { placeholder: true, emoji: "🧸", alt: "3COINS+plus 兒童小物（照片待補）" }
        },
        {
          name: "UNIQLO／GU 童裝",
          desc: "日本本地價格通常比台灣便宜，10 月的沖繩還熱，可以挑回台灣秋冬穿的。",
          where: "Day4 AEON MALL沖縄ライカム／Day5 PARCO CITY",
          photo: { placeholder: true, emoji: "🧸", alt: "UNIQLO／GU 童裝（照片待補）" }
        },
        {
          name: "美麗海水族館 鯨鯊周邊",
          desc: "鯨鯊玩偶、筆袋、紀念T恤等，只有水族館館內買得到，是 Day2 專屬的紀念品。",
          where: "Day2 沖繩美麗海水族館",
          photo: { placeholder: true, emoji: "🧸", alt: "美麗海水族館 鯨鯊周邊（照片待補）" }
        }
      ]
    },
    {
      category: "沖繩在地特產",
      emoji: "🐟",
      items: [
        {
          name: "宮古島雪鹽",
          desc: "礦物質含量高的細粉狀海鹽，可以入菜，也可以撒水果或冰淇淋上吃。",
          where: "Day4 國際通（塩屋）／Day6 那霸機場",
          photo: { placeholder: true, emoji: "🐟", alt: "宮古島雪鹽（照片待補）" }
        },
        {
          name: "塩屋 調味鹽",
          desc: "日本最大的鹽專賣店，超過 60 種調味鹽可以現場試吃再挑，很適合買來送愛下廚的朋友。",
          where: "Day4 國際通",
          photo: { placeholder: true, emoji: "🐟", alt: "塩屋 調味鹽（照片待補）" }
        },
        {
          name: "邊銀食堂 石垣島辣油",
          desc: "石垣島辣椒、薑黃、大蒜製成，香氣濃郁但不會死辣，很多人一次帶好幾瓶。",
          where: "Day4 國際通、牧志公設市場",
          photo: { placeholder: true, emoji: "🐟", alt: "邊銀食堂 石垣島辣油（照片待補）" }
        },
        {
          name: "泡盛",
          desc: "日本歷史最悠久的蒸餾酒，酒精濃度約 30 度。有小瓶裝可以買來試。酒類必須託運，注意台灣入境限量 1 公升。",
          where: "Day4 牧志公設市場／Day2 唐吉訶德名護店／Day6 那霸機場",
          photo: {
            src: "images/shop-awamori.jpg",
            alt: "沖繩居酒屋吧台前一整排的泡盛酒瓶",
            credit: { author: "pcs34560", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:%E4%B8%80%E5%A0%82%E3%81%AB%E4%BC%9A%E3%81%97%E3%81%9F%E3%80%81%E6%B2%96%E7%B8%84%E7%84%BC%E9%85%8E_Pcs34560_IMG9867.jpg" }
          }
        },
        {
          name: "琉球玻璃",
          desc: "手工吹製、每件花色都獨一無二的沖繩玻璃工藝。易碎，記得請店家包好並放行李箱中央。",
          where: "Day5 沖繩世界（王國村可看師傅現場製作）／Day4 AEON MALL",
          photo: {
            src: "images/shop-ryukyu-glass.jpg",
            alt: "藍色紋路的手工吹製琉球玻璃杯",
            credit: { author: "yawning hunter", license: "CC BY 2.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Ryukyu_Glass_1.jpg" }
          }
        },
        {
          name: "やちむん 陶器（壺屋燒）",
          desc: "沖繩在地陶器，樸實厚實的手感，杯盤類最實用。牧志公設市場旁的壺屋通就是陶器街。",
          where: "Day4 牧志公設市場周邊壺屋通",
          photo: { placeholder: true, emoji: "🐟", alt: "やちむん 陶器（壺屋燒）（照片待補）" }
        },
        {
          name: "風獅爺（シーサー）擺飾",
          desc: "沖繩守護神，傳統上兩隻一組（一隻張嘴招福、一隻閉嘴避邪），從鑰匙圈到大擺飾都有。",
          where: "Day5 沖繩世界／Day4 國際通、AEON MALL",
          photo: {
            src: "images/shop-shisa.jpg",
            alt: "那霸國際通街邊的石雕風獅爺",
            credit: { author: "NORTLAUKAU 26088 JP", license: "CC0", sourceUrl: "https://commons.wikimedia.org/wiki/File:JP_%E6%B2%96%E7%B9%A9_Okinawa_%E9%82%A3%E9%9C%B8%E5%B8%82_Naha_City_%E5%9C%8B%E9%9A%9B%E9%80%9A_Kokusai-dori_n_%E5%AE%89%E9%87%8C_Asato_Shisa_stone_lion_statue_February_2026_N13P_28.jpg" }
          }
        },
        {
          name: "沖繩海帶芽／海蘊（もずく）",
          desc: "沖繩特產海藻，乾燥包裝好攜帶，回家煮湯很方便。",
          where: "Day1 MaxValu讀谷店／Day4 AEON STYLE 超市",
          photo: { placeholder: true, emoji: "🐟", alt: "沖繩海帶芽／海蘊（もずく）（照片待補）" }
        },
        {
          name: "35 COFFEE",
          desc: "用白化珊瑚焙煎咖啡豆、部分營收回饋珊瑚保育的沖繩品牌，包裝質感好，適合送咖啡愛好者。",
          where: "Day4 國際通／Day6 那霸機場",
          photo: { placeholder: true, emoji: "🐟", alt: "35 COFFEE（照片待補）" }
        }
      ]
    }
  ],

  shoppingNotes: [
    "退稅門檻：同一店家、同一天、未稅金額滿 5,000 日圓可辦免稅，記得帶護照（Visit Japan Web 也可產生免稅 QR code）。",
    "藥妝零食等「消耗品」退稅後會被封進透明袋，回台灣前不能拆封使用。",
    "台灣入境限制：酒類 1 公升、菸品有限量；生鮮蔬果與肉類製品不能帶回台灣。",
    "液體、膏狀、刀具類（含泡盛、辣油、雪鹽）一律託運，不要放手提行李。",
    "Day4 在 AEON MALL 有約 4.5 小時、Day5 在 PARCO CITY 有約 6.3 小時，是全程最大的兩個採買時段，主力建議放這兩天。",
    "Day6 的 IIAS 沖繩豐崎與那霸機場是最後補貨機會，但時間較趕（10:30-13:00 + 機場），別把重要的東西留到這時候。",
    "AEON MALL 建議一到就先去服務台索取折扣券；唐吉訶德的優惠券也可以出發前先上網查好。",
    "怕熱、怕融化的商品（ROYCE' 巧克力洋芋片等）建議接近回程再買，或請店家加保冷劑。"
  ],

  /* 費用試算：日幣（包車／計程車／現場購票門票）與台幣（KLOOK 門票）分開計算，
     不做匯率換算、也不合併成單一總額 */
  costs: {
    intro: "Day1、Day4交通費用為日幣包車，向行腳沖繩訂購；Day2交通方式已定案改為計程車分段叫車，費用亦為日幣。美麗海水族館與沖繩世界（玉泉洞）門票會直接透過KLOOK購買，故以台幣列出；其餘景點門票（沖繩兒童王國）為官網現場購票金額，以日幣列出。日幣與台幣分開計算，不合併成單一總額。",

    charters: [
      {
        day: 1,
        label: "Day1 抵達日",
        detail: "4人座包車・10小時（那霸機場→波上宮→美國村→殘波岬公園→MaxValu讀谷店→飯店1）",
        amount: 34000,
        currency: "JPY",
        status: "confirmed"
      },
      {
        day: 4,
        label: "Day4 換飯店日",
        detail: "4人座包車・8小時（飯店1→沖繩兒童王國→AEON MALL沖縄ライカム→飯店2）",
        amount: 32000,
        currency: "JPY",
        status: "confirmed"
      }
    ],

    charterSubtotal: 66000,

    taxis: [
      {
        day: 2,
        label: "Day2 沖繩北部（三段計程車分段叫車）",
        detail: "飯店1→沖繩美麗海水族館 約¥9,750／沖繩美麗海水族館→燒肉King名護店 約¥5,350／MEGA唐吉訶德名護店→飯店1 約¥4,750（燒肉King→唐吉訶德為徒步400公尺，不用叫車）",
        amount: 19850,
        currency: "JPY",
        status: "confirmed",
        note: "需分3次分別叫車（尤其晚上唐吉訶德返程建議提前用App預約），且計程車無兒童安全座椅可用，詳見Day2規劃文件"
      }
    ],

    taxiSubtotal: 19850,

    transportSubtotalConfirmed: 85850,

    ticketsJPY: [
      {
        title: "沖繩兒童王國",
        day: 4,
        currency: "JPY",
        adultPrice: 1000,
        adultCount: 2,
        childPrice: 0,
        childNote: "15歲以下免費（我們家小孩4.5歲適用）",
        subtotal: 2000,
        source: "官網現場購票",
        url: "https://www.okzm.jp/fee/"
      }
    ],

    ticketsTWD: [
      {
        title: "沖繩美麗海水族館",
        day: 2,
        currency: "TWD",
        adultPrice: 427,
        adultPriceRetail: 444,
        adultCount: 2,
        childPrice: 0,
        childNote: "0-5歲兒童免費入場（我們家小孩4.5歲適用，不用購票）",
        subtotal: 854,
        source: "KLOOK",
        url: "https://www.klook.com/zh-TW/activity/1421-churaumi-aquarium-okinawa/",
        note: "價格為Klook目前顯示的優惠價，牌價NT$444；Klook價格會隨日期/促銷波動，實際請以下單當下頁面顯示為準"
      },
      {
        title: "沖繩世界（文化王國・玉泉洞）",
        day: 5,
        currency: "TWD",
        adultPrice: 372,
        adultPriceRetail: 407,
        adultCount: 2,
        childPriceEstimate: "約180-200（估算，非Klook頁面直接顯示）",
        childNote: "⚠️4-14歲兒童需購票，不是免費（跟水族館不同，我們家小孩4.5歲需要買童票）。Klook頁面要選定日期後才會顯示實際童票金額，這裡是依官網日幣「大人¥2,000：小孩¥1,000」約2:1的比例，用大人的Klook價格反推估算，僅供抓預算參考，下單前務必在頁面確認實際金額",
        subtotal: 744,
        subtotalNote: "744為2位大人的部分；加上小孩估算的180-200，全家大約924-944",
        source: "KLOOK",
        url: "https://www.klook.com/zh-TW/activity/37791-okinawa-world-ticket/",
        note: "此為「沖繩世界文化王國門票」純門票版本（非含手工藝體驗的加價版本），價格會隨日期/促銷波動，實際請以下單當下頁面顯示為準"
      }
    ],

    ticketsJPYSubtotal: 2000,
    ticketsTWDSubtotalAdultsOnly: 1598,

    notIncluded: [
      {
        text: "Day3飯店付費海洋活動（森之湯、水上樂園、水上摩托車、玻璃底船、拖曳龍舟等）：費用依當天實際選擇的項目而定，非固定金額，詳細價格請見飯店詳情頁，這裡不重複列出",
        url: "hotel1.html",
        linkLabel: "飯店1詳情頁"
      },
      {
        text: "Day6 IIAS沖繩豐崎內的DMM かりゆし水族館：目前逐日行程沒有排定要進去參觀，只是路過會經過，若當天臨時想去，需另外查詢票價"
      }
    ]
  }
};
