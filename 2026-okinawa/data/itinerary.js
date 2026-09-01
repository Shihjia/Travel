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
      intro: "以「森之湯」大展望浴場、多樣海洋活動與六間風格餐廳聞名的度假村，Day3飯店自由日整天都會待在這裡，以下是完整設施、活動與餐廳資訊（2026-09-01已用官網查證）。",
      facilities: [
        {
          title: "森之湯（大展望風呂／大展望浴場）",
          badges: [{ label: "大人¥600・小孩¥300／單次", tone: "" }],
          rows: [
            "全天票：大人¥1,000／小孩¥500（可無限次使用至隔日9:00）",
            "時間：6:00-9:00、13:00-23:00（週三15:00起）",
            "不需預約，無特別年齡限制"
          ]
        },
        {
          title: "ワンダールーム（兒童遊戲室，室內）",
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
          badges: [{ label: "大人¥3,300・小孩¥2,750", tone: "" }, { label: "滿4歲以上", tone: "warn" }],
          rows: [
            "10月營業時間9:00-17:00（12:00-13:00安全檢查暫停）",
            "現場報名，有小尺寸救生衣",
            "小孩剛好符合最低年齡限制"
          ]
        },
        {
          title: "チャイルドチューブ（兒童拖曳圈）",
          badges: [{ label: "¥4,400／次・約10分", tone: "" }, { label: "1-6歲限定", tone: "pick" }],
          rows: [
            "現場報名，無法預約",
            "需家長陪同，大人不可單獨參加",
            "專為這個年齡設計，很適合"
          ]
        },
        {
          title: "ジェットスキー（水上摩托車同乘）",
          badges: [{ label: "¥3,300／約10分", tone: "" }, { label: "3歲以上可同乘", tone: "" }],
          rows: [
            "由教練駕駛，定員1名乘客同乘",
            "現場報名，無法預約",
            "小孩坐同乘不用自己操控，適合"
          ]
        },
        {
          title: "グラスボート（玻璃底船）",
          badges: [{ label: "大人¥2,200・小孩¥1,100", tone: "" }, { label: "約20分", tone: "" }],
          rows: [
            "每小時00分、30分各一班，9:00-16:30",
            "建議預約（電話／信箱）",
            "未特別標示年齡限制"
          ]
        },
        {
          title: "ドラゴンボート（拖曳龍舟）",
          badges: [{ label: "大人¥2,500・小孩¥2,000", tone: "" }, { label: "身高100cm以上", tone: "warn" }],
          rows: [
            "約10分，現場報名，全年開放",
            "4.5歲平均身高約100-107cm，建議現場請店員量測確認",
            "⚠️視小孩實際身高而定"
          ]
        },
        {
          title: "海灘用品租借",
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
          location: "ウイングタワーBF",
          badges: [{ label: "僅晚餐", tone: "" }, { label: "BBQ吃到飽", tone: "pick" }],
          rows: [
            "30種嚴選牛肉及新鮮海鮮吃到飽",
            "泳池海景特等席可邊看夕陽邊吃"
          ],
          bookingUrl: "https://www.tablecheck.com/shops/kariyushi-oceanspa-dining/reserve"
        },
        {
          title: "やきにく 朝Cho（燒肉 朝Cho）",
          location: "ウイングタワー1F",
          badges: [{ label: "僅晚餐", tone: "" }, { label: "⚠️查證時休業中", tone: "warn" }],
          rows: [
            "完全預約制燒肉專門店，沖繩和牛／やんばる島豬，備長炭燒烤",
            "出發前請再次確認是否恢復營業"
          ]
        },
        {
          title: "サンセットテラス（夕陽露臺）",
          location: "オーシャンタワー1F",
          badges: [{ label: "僅晚餐", tone: "" }, { label: "夏季季節限定", tone: "warn" }],
          rows: [
            "泳池畔全席露天座，度假風輕食",
            "週末有沖繩縣內藝人島唄／Jazz現場演出",
            "10月是否營業需另外向飯店確認"
          ]
        },
        {
          title: "バーラウンジ タイラ",
          location: "ウイングタワー1F",
          badges: [{ label: "全天", tone: "" }, { label: "調酒／世界名酒", tone: "" }],
          rows: ["海景第一排，適合大人晚上小酌"]
        },
        {
          title: "デリ＆カフェ",
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
      transport: "6人座包車・10小時（JPY 43,000）",
      weatherAnchor: { lat: 26.4850, lon: 127.8250 },
      ready: true,
      items: [
        {
          type: "stop",
          time: "09:10", timeEnd: "10:30",
          title: "那霸機場",
          sub: "拿行李，上車補眠",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E9%82%A3%E8%A6%87%E7%A9%BA%E6%B8%AF",
          lat: 26.1958, lon: 127.6459
        },
        { type: "transport", note: "約15分鐘" },
        {
          type: "stop",
          time: "11:00", timeEnd: "12:00",
          title: "波上宮",
          sub: "沖繩最具代表性的神社之一",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E6%B3%A2%E4%B8%8A%E5%AE%AE",
          lat: 26.2136, lon: 127.6693
        },
        { type: "transport", note: "約40分鐘" },
        {
          type: "stop", highlight: true,
          time: "12:40", timeEnd: "15:30",
          title: "美國村",
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
          sub: "沖繩人氣冰淇淋，美國村必吃甜點",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E3%83%96%E3%83%AB%E3%83%BC%E3%82%B7%E3%83%BC%E3%83%AB%E3%83%87%E3%83%9D%E3%82%A2%E3%82%A4%E3%83%A9%E3%83%B3%E3%83%89%E5%BA%97",
          lat: 26.3162, lon: 127.7607
        },
        { type: "transport", note: "約20-25分鐘" },
        {
          type: "stop",
          time: "16:20", timeEnd: "17:10",
          title: "殘波岬公園",
          sub: "斷崖絕景／燈塔／風獅爺拍照",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E6%AE%98%E6%B3%A2%E5%B2%AC%E5%85%AC%E5%9C%92",
          lat: 26.5010, lon: 127.7086
        },
        { type: "transport", note: "約20-25分鐘" },
        {
          type: "stop",
          time: "17:35", timeEnd: "18:10",
          title: "MaxValu 讀谷店",
          sub: "買熟食／便當當晚餐，順便採買",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E3%83%9E%E3%83%83%E3%82%AF%E3%82%B9%E3%83%90%E3%83%AA%E3%83%A5%E8%AA%AD%E8%B0%B7%E5%BA%97",
          lat: 26.3945, lon: 127.7280
        },
        { type: "transport", note: "約20-25分鐘" },
        {
          type: "stop", isEnd: true,
          time: "約18:30",
          title: "入住喜璃癒志海灘渡假飯店",
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
      transport: "交通方式尚未定案（包車 或 三段計程車，詳見下方逐時行程備註）",
      weatherAnchor: { lat: 26.4850, lon: 127.8250 },
      ready: true,
      transportNote: "交通方式尚未定案：包車6人座10H約JPY 43,000／4人座約JPY 34,000；改三段計程車約JPY 19,850（省約1.4-2.3萬，但需分3次叫車、且無兒童座椅）。詳見沖繩行程規劃文件的完整比較。",
      items: [
        {
          type: "stop",
          time: "約10:00",
          title: "喜璃癒志海灘渡假飯店",
          sub: "飯店早餐，約10:00出發",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E6%B2%96%E7%B8%84%E3%81%8B%E3%82%8A%E3%82%86%E3%81%97%E3%83%93%E3%83%BC%E3%83%81%E3%83%AA%E3%82%BE%E3%83%BC%E3%83%88%20%E3%82%AA%E3%83%BC%E3%82%B7%E3%83%A3%E3%83%B3%E3%82%B9%E3%83%91",
          lat: 26.4850, lon: 127.8250
        },
        { type: "transport", note: "約47分鐘・33.2公里（交通方式未定案，包車或計程車約¥9,750）" },
        {
          type: "stop", highlight: true,
          time: "11:00", timeEnd: "16:00",
          title: "沖繩美麗海水族館",
          sub: "海洋博公園園區，餵鯨鯊15:00／17:00，海豚秀／海豚礁湖，海豚／海龜餵食¥500，停留拉長為約5小時",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E6%B2%96%E7%B8%84%E7%BE%8E%E3%82%89%E6%B5%B7%E6%B0%B4%E6%97%8F%E9%A4%A8",
          lat: 26.6940, lon: 127.8778
        },
        { type: "transport", note: "約40分鐘・17.8公里（交通方式未定案，包車或計程車約¥5,350）" },
        {
          type: "stop", highlight: true,
          time: "17:00", timeEnd: "19:00",
          title: "燒肉King 名護店",
          sub: "吃到飽燒肉，小孩可自由取用喜歡的肉，務必事先訂位（平日17:00-23:00）",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E7%84%BC%E8%82%89%E3%82%AD%E3%83%B3%E3%82%B0%20%E5%90%8D%E8%AD%B7%E5%BA%97",
          lat: 26.5904, lon: 127.9757
        },
        { type: "transport", note: "步行約400公尺，約6分鐘" },
        {
          type: "stop",
          time: "19:00", timeEnd: "19:45",
          title: "MEGA唐吉訶德 名護店",
          sub: "逛街採買，已取代原本的MAX Valu Nago",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=MEGA%E5%94%90%E5%90%89%E8%A8%B6%E5%BE%B7%20%E5%90%8D%E8%AD%B7%E5%BA%97",
          lat: 26.5919, lon: 127.9722
        },
        { type: "transport", note: "約23分鐘・15.8公里（交通方式未定案，包車或計程車約¥4,750）" },
        {
          type: "stop", isEnd: true,
          time: "約20:10",
          title: "返回喜璃癒志海灘渡假飯店",
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
          sub: "整天在飯店自由活動：免費ワンダールーム兒童遊戲室、かりゆしウォーターランド水上樂園（滿4歲）、チャイルドチューブ兒童拖曳圈（1-6歲限定）、水上摩托車同乘、玻璃底船、ドラゴンボート（需身高100cm以上）等，完整費用／時段／年齡限制請見飯店詳情頁",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E6%B2%96%E7%B8%84%E3%81%8B%E3%82%8A%E3%82%86%E3%81%97%E3%83%93%E3%83%BC%E3%83%81%E3%83%AA%E3%82%BE%E3%83%BC%E3%83%88%20%E3%82%AA%E3%83%BC%E3%82%B7%E3%83%A3%E3%83%B3%E3%82%B9%E3%83%91",
          lat: 26.4850, lon: 127.8250,
          detailLink: { href: "hotel1.html", label: "查看飯店完整設施／活動／年齡限制 →" }
        },
        {
          type: "stop",
          time: "17:00", timeEnd: "19:00",
          title: "飯店晚餐",
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
      desc: "Check-out → AEON MALL沖縄ライカム → Check-in飯店2 → 國際通自由逛街",
      hotel: "hotel2",
      transport: "計程車分段叫車（已定案，約JPY 18,000-18,500）",
      weatherAnchor: { lat: 26.2141, lon: 127.6893 },
      ready: true,
      items: [
        {
          type: "stop",
          time: "N/A", timeEnd: "09:30",
          title: "喜璃癒志海灘渡假飯店",
          sub: "Check-out，帶行李",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E6%B2%96%E7%B8%84%E3%81%8B%E3%82%8A%E3%82%86%E3%81%97%E3%83%93%E3%83%BC%E3%83%81%E3%83%AA%E3%82%BE%E3%83%BC%E3%83%88%20%E3%82%AA%E3%83%BC%E3%82%B7%E3%83%A3%E3%83%B3%E3%82%B9%E3%83%91",
          lat: 26.4850, lon: 127.8250
        },
        { type: "transport", note: "計程車約52分鐘・36.2公里／¥10,550" },
        {
          type: "stop", highlight: true,
          time: "10:00", timeEnd: "14:30",
          title: "AEON MALL沖縄ライカム",
          sub: "午餐／大創／UNIQLO／寶可夢中心／3COINS+plus／超市。現場各樓層都有置物櫃（大中小尺寸、1F含冷藏櫃），建議先到服務台拿折扣券",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E3%82%A4%E3%82%AA%E3%83%B3%E3%83%A2%E3%83%BC%E3%83%AB%E6%B2%96%E7%B8%84%E3%83%A9%E3%82%A4%E3%82%AB%E3%83%A0",
          lat: 26.3395, lon: 127.8016
        },
        { type: "transport", note: "計程車約39分鐘・21.1公里／¥6,250" },
        {
          type: "stop", isEnd: true,
          time: "15:10", timeEnd: "16:10",
          title: "入住那霸棕櫚皇家度假飯店",
          sub: "Check-in飯店2",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E3%83%9B%E3%83%86%E3%83%AB%E3%83%91%E3%83%BC%E3%83%A0%E3%83%AD%E3%82%A4%E3%83%A4%E3%83%ABNAHA%E5%9B%BD%E9%9A%9B%E9%80%9A",
          lat: 26.2141, lon: 127.6893
        },
        { type: "transport", note: "步行約10分鐘" },
        {
          type: "stop",
          time: "16:20", timeEnd: "",
          title: "平和通商店街 → 牧志公設市場 → 國際通／屋台村夜市",
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
          sub: "飯店早餐後出發（一日來回，仍住飯店2，不用搬行李）",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E3%83%9B%E3%83%86%E3%83%AB%E3%83%91%E3%83%BC%E3%83%A0%E3%83%AD%E3%82%A4%E3%83%A4%E3%83%ABNAHA%E5%9B%BD%E9%9A%9B%E9%80%9A",
          lat: 26.2141, lon: 127.6893
        },
        { type: "transport", note: "計程車約36分鐘・12.8公里／¥3,850" },
        {
          type: "stop", highlight: true,
          time: "10:10", timeEnd: "13:00",
          title: "玉泉洞＆沖繩世界",
          sub: "超過一百萬個鐘乳石柱的巨大天然洞窟，停留拉長為約2.8小時",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E3%81%8A%E3%81%8D%E3%81%AA%E3%82%8F%E3%83%AF%E3%83%BC%E3%83%AB%E3%83%89%20%E7%8E%89%E6%B3%89%E6%B4%9E",
          lat: 26.1004, lon: 127.7318
        },
        { type: "transport", note: "計程車約40-51分鐘・約23-24公里／¥6,750（不走高速）" },
        {
          type: "stop", isEnd: true,
          time: "13:40", timeEnd: "20:00",
          title: "PARCO City",
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
          sub: "退房，帶行李搭計程車",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E3%83%9B%E3%83%86%E3%83%AB%E3%83%91%E3%83%BC%E3%83%A0%E3%83%AD%E3%82%A4%E3%83%A4%E3%83%ABNAHA%E5%9B%BD%E9%9A%9B%E9%80%9A",
          lat: 26.2141, lon: 127.6893
        },
        { type: "transport", note: "計程車約30分鐘・10.2公里／¥3,150" },
        {
          type: "stop", highlight: true,
          time: "10:30", timeEnd: "13:00",
          title: "IIAS沖繩豐崎",
          sub: "DMM水族館、購物、美食、退稅通通有；行李可寄放1F置物櫃（含冷藏櫃，10:00-21:00當日付費使用），逛街不用隨身帶著",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E3%82%A4%E3%83%BC%E3%82%A2%E3%82%B9%E6%B2%96%E7%B8%84%E8%B1%8A%E5%B4%8E",
          lat: 26.1478, lon: 127.6470
        },
        { type: "transport", note: "計程車約12分鐘・6.5公里／¥2,050" },
        {
          type: "stop", isEnd: true, icon: "✈️",
          time: "約13:30",
          title: "那霸機場",
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
        "電子機票／登機證",
        "飯店1、飯店2訂房確認信",
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
        "SIM卡或Wi-Fi分享器"
      ]
    },
    {
      category: "兒童專用",
      items: [
        "小孩護照",
        "常備藥（退燒藥／止瀉藥／暈車藥）",
        "兒童牙刷牙膏",
        "小孩自己的小背包（裝隨身物品）",
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
  ]
};
