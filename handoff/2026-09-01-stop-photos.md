# 各景點實際照片（含免費授權圖片取得規則）

- 狀態：✅ 完成（2026-09-01 Claude 驗收通過）
- 建立日期：2026-09-01
- 提出者：Claude（依使用者需求整理）

## 需求背景

使用者希望每天的每個行程景點都能放一張實際照片，讓人一眼看出那是什麼樣的地方、什麼樣的景色，而不是只有文字。

**已與使用者確認採「混合方案」**：大景點用 Wikimedia Commons 的免費授權實照並標註出處；沒有免費照片的地方（超市、量販店、餐廳、商場）先用風格化佔位圖，等 10 月實際出發拍到照片後再替換。

## 影響範圍

- 資料：`2026-okinawa/data/itinerary.js`（每個 stop 新增 `photo` 欄位）
- 頁面：`2026-okinawa/day1.html` ~ `day6.html`（時間軸顯示照片）、`2026-okinawa/script.js`（`renderTimeline` 渲染照片）
- 樣式：`assets/style.css`（照片與佔位圖樣式）
- 新增：`2026-okinawa/images/`（照片檔案）

---

## ⚠️ 圖片授權規則（這份規格最重要的部分，務必遵守）

**只能使用下列來源：**
1. **Wikimedia Commons**（優先）— 只挑授權為 **Public Domain / CC0 / CC BY / CC BY-SA** 的檔案。
2. 若 Commons 找不到，就**用佔位圖**，不要去別的地方找。

**絕對不可以使用：**
- Google 圖片搜尋結果
- 景點官網、飯店官網、商場官網的照片
- 部落格、旅遊網站、社群平台（IG／FB／小紅書）的照片
- 任何標示 NC（非商業）、ND（禁止改作）或授權不明的圖片

**每張使用的 Commons 照片都必須記錄授權資訊**，存進 `itinerary.js` 的 `photo.credit`，並在頁面上顯示（見下方「畫面需求」）。沒有完整授權資訊的照片就不要用。

---

## 資料面異動規格

在每個 `type: "stop"` 的項目新增 `photo` 欄位。兩種形態：

**（A）有實際照片時：**
```js
{
  type: "stop",
  title: "沖繩美麗海水族館",
  // ...既有欄位不動...
  photo: {
    src: "images/day2-churaumi.jpg",
    alt: "沖繩美麗海水族館的黑潮之海大水槽與鯨鯊",
    credit: {
      author: "照片作者名稱",
      license: "CC BY-SA 4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:xxx.jpg"
    }
  }
}
```

**（B）沒有免費照片、先用佔位圖時：**
```js
photo: {
  placeholder: true,
  emoji: "🛒",          // 依地點性質選一個貼切的 emoji
  alt: "MaxValu 讀谷店（照片待補）"
}
```

`hotels` 陣列的兩間飯店也比照辦理（飯店詳情頁 `hotel1.html` / `hotel2.html` 的頁首可以放一張），但**飯店照片優先度低於景點**，Commons 找不到就直接用佔位圖，不用花時間找。

## 需要照片的地點清單與預期覆蓋率參考

以下是規劃端對 Commons 覆蓋率的判斷，**請以你實際搜尋的結果為準**，這份只是幫你分配時間、不要在沒有照片的地方空轉：

**預期找得到（值得花時間找一張好的）：**

| 天 | 地點 | Commons 搜尋建議關鍵字 |
|---|---|---|
| Day1／Day6 | 那霸機場 | `Naha Airport` |
| Day1 | 波上宮 | `Naminoue Shrine` / `波上宮` |
| Day1 | 美國村 | `American Village Chatan` / `Mihama American Village` |
| Day1 | 殘波岬公園 | `Cape Zanpa` / `残波岬` |
| Day2 | 沖繩美麗海水族館 | `Okinawa Churaumi Aquarium`（黑潮之海大水槽或鯨鯊的照片最能代表） |
| Day4 | AEON MALL沖縄ライカム | `Aeon Mall Okinawa Rycom` |
| Day4 | 牧志公設市場 | `Makishi Public Market` / `第一牧志公設市場` |
| Day4 | 國際通／屋台村 | `Kokusai-dori` / `国際通り` |
| Day5 | 玉泉洞＆沖繩世界 | `Gyokusendo Cave` / `玉泉洞` / `Okinawa World` |

**預期找不到（直接用佔位圖，不要硬找）：**
Day1 BLUE SEAL 北谷店、Day1 MaxValu讀谷店、Day2 燒肉King名護店、Day2 MEGA唐吉訶德名護店、Day4 平和通商店街（可與國際通合併判斷）、Day5 PARCO City、Day6 IIAS沖繩豐崎、以及 Day1 美國村的兩間午餐候選店（`choices` 裡的兩間店**不用**放照片，維持現在的小卡片樣式就好）。

Day3 是飯店自由日，兩個時段項目共用飯店照片或用佔位圖即可。

## 畫面／功能需求

- 照片顯示在**時間軸項目內**（`renderTimeline` 產生的 `.timeline-item` 裡），放在標題與說明文字之後、Google 地圖連結之前。
- 尺寸：滿版寬度、**16:9 比例**、圓角（沿用 `--radius-sm`）、`object-fit: cover`。
- **授權標示**：照片右下角或正下方顯示一行極小的灰字，格式為 `照片：{author} / {license}`，整行連到 `sourceUrl`（`target="_blank"`）。字級 11px 左右、顏色用 `--ink-soft`，不要搶走版面。
- **佔位圖**：不要用外部圖片服務，直接用 CSS 做——該天代表色（`window.DAY_COLORS`）的柔和漸層底 ＋ 置中的大 emoji ＋ 底下一行小字「照片待補」。比例同樣 16:9，視覺上要看得出是刻意的設計而不是圖片破圖。
- **載入效能**：`<img>` 加 `loading="lazy"` 與明確的 `width`／`height`（或 `aspect-ratio`）避免版面跳動。
- 加分項（非必要）：總覽頁 `index.html` 的逐日卡片，可以用該天第一張有實際照片的圖當作卡片封面；如果做起來版面變擁擠就不要做，以你的判斷為準。

## 圖片處理要求

- 存放於 `2026-okinawa/images/`，檔名格式 `day{N}-{英文短名}.jpg`（例如 `day2-churaumi.jpg`、`day1-naminoue.jpg`）。
- **每張壓到寬度 1200px 以內、單檔 200KB 以內**（JPEG 品質 80 左右即可）；這是 GitHub Pages 靜態站，圖片大小直接影響手機開啟速度。
- 全部景點加起來的 `images/` 資料夾**總大小請控制在 3MB 以內**。
- 不要把原始未壓縮檔也 commit 進 repo。

## 驗收標準

- [ ] `itinerary.js` 每個 stop 都有 `photo` 欄位（實照或佔位圖二選一），既有欄位完全未被更動
- [ ] 有實照的項目，`photo.credit` 三個欄位（author／license／sourceUrl）都完整填寫，且 license 屬於 PD／CC0／CC BY／CC BY-SA
- [ ] 頁面上每張實照下方都有可點擊的授權標示，連結能開到 Commons 該檔案頁面
- [ ] 佔位圖是 CSS 畫的（不是外部圖片服務），使用該天代表色，比例與實照一致
- [ ] Day1 美國村的兩個午餐 `choices` 小卡片維持原樣，沒有被加上照片
- [ ] `images/` 每張圖 ≤ 200KB、寬度 ≤ 1200px，資料夾總大小 ≤ 3MB
- [ ] 手機 375px 寬度下照片正常縮放、不橫向溢出、不變形
- [ ] 圖片使用 `loading="lazy"` 且不會造成版面跳動（CLS）
- [ ] 6 天頁面 Console 無錯誤

## 不在範圍內

- 不用去找非 Commons 來源的照片（找不到就用佔位圖，這是規劃端已確認的作法）
- 不用做圖片燈箱（lightbox）／點擊放大
- 不用處理採買推薦頁的商品照片（那是另一份規格）
- 不用動時間軸以外的既有版面結構

---

## Claude Code 實作回報（由 Claude Code 填寫）

- 異動檔案清單：
  - `2026-okinawa/images/`（**新增**：8 個 jpg 檔）
  - `2026-okinawa/data/itinerary.js`（**修改**：24 個 stop 各新增 `photo` 欄位、2 間 hotel 各新增 `photo`）
  - `2026-okinawa/script.js`（**修改**：新增 `renderPhoto()`；`renderTimeline()` 多收一個 `dayNum` 參數；`renderHotelDetail()` 渲染飯店照片）
  - `2026-okinawa/day1.html` ~ `day6.html`（**修改**：各 1 行，`renderTimeline("timeline", day.items, N)` 傳入天數）
  - `2026-okinawa/hotel1.html`／`hotel2.html`（**修改**：各 1 行，加入 `<div id="hotel-photo">` 容器）
  - `assets/style.css`（**修改**：新增 `.stop-photo` 系列樣式）
  - `handoff/2026-09-01-stop-photos.md`（本回報）

- 做了什麼：
  - **授權把關**：只用 Wikimedia Commons API 搜尋（`generator=search` + `iiprop=extmetadata`），程式自動讀出每個檔案的 `LicenseShortName` / `Artist` / `descriptionurl`，並過濾掉任何含 NC／ND 或授權不明的結果。**沒有碰過 Google 圖片、官網、部落格或社群平台的任何一張圖**。每張採用的照片都先下載下來**用眼睛看過**再決定要不要用（例如殘波岬第一張找到的燈塔照天空灰、主體偏一角，就換成斷崖那張）。
  - **圖片處理**：從 Commons 取 2000px 縮圖 → 置中裁成 **16:9** → 縮到 **1200×675** → JPEG 逐級降品質直到 **≤200KB**（progressive + optimize）。原始未壓縮檔只留在暫存資料夾，**沒有進 repo**。
  - **資料**：24 個 stop 全部有 `photo`（9 個實照、15 個佔位圖），2 間 hotel 各一個佔位圖。插入用腳本進行，每一筆都先斷言「這一行的 title 等於預期的地點名」才寫入，避免插錯位置；既有欄位（time／title／sub／mapUrl／lat／lon／choices…）**一個字都沒有動**。
  - **渲染**：新增共用 `renderPhoto(photo, dayNum)`，時間軸與飯店頁共用同一支。照片插在「說明文字之後、Google 地圖連結之前」，符合規格。
  - **授權標示**：實照右下角一行 11px 灰字 `照片：{author} / {license}`，整行是連到 Commons 檔案頁的連結（`target="_blank" rel="noopener"`），半透明白底避免壓在深色照片上看不清。
  - **佔位圖**：純 CSS，沒有任何外部圖片服務。該天代表色（`window.DAY_COLORS`）的柔和漸層底 ＋ 同色虛線框 ＋ 置中大 emoji ＋ 底下「照片待補」小字，比例與實照同為 16:9。
  - **效能／CLS**：`<img>` 皆有 `loading="lazy"`、`decoding="async"` 與明確的 `width="1200" height="675"`，外層容器再加 `aspect-ratio: 16/9`，載入前就已經佔好位置，不會有版面跳動。

- 實際找到幾張 Commons 實照、幾個用佔位圖（對照表）：

  **實照 9 處（8 個檔案，那霸機場 Day1／Day6 共用同一張）— 全部符合 PD／CC BY／CC BY-SA**

  | 天 | 地點 | 檔案 | 作者 | 授權 |
  |---|---|---|---|---|
  | Day1 | 那霸機場 | `day1-naha-airport.jpg` | 663highland | CC BY 2.5 |
  | Day1 | 波上宮 | `day1-naminoue.jpg` | Zairon | CC BY 4.0 |
  | Day1 | 美國村 | `day1-american-village.jpg` | Suikotei | CC BY-SA 4.0 |
  | Day1 | 殘波岬公園 | `day1-zanpa.jpg` | そらみみ (Soramimi) | CC BY-SA 4.0 |
  | Day2 | 沖繩美麗海水族館 | `day2-churaumi.jpg` | Megapixie | **Public domain** |
  | Day4 | AEON MALL沖縄ライカム | `day4-rycom.jpg` | Kugel~commonswiki | CC BY-SA 4.0 |
  | Day4 | 平和通→牧志公設市場→國際通 | `day4-kokusai.jpg` | 663highland | CC BY 2.5 |
  | Day5 | 玉泉洞＆沖繩世界 | `day5-gyokusendo.jpg` | FoxyStranger Kawasaki | CC BY-SA 3.0 |
  | Day6 | 那霸機場 | （共用 `day1-naha-airport.jpg`） | 663highland | CC BY 2.5 |

  規格「預期找得到」的 9 個地點**全部都找到了**，命中率 9/9。水族館那張正好是黑潮之海大水槽的鯨鯊，國際通那張是白天的商店街全景，玉泉洞是洞內步道與鐘乳石。

  **佔位圖 15 處**

  | 天 | 地點 | emoji |
  |---|---|---|
  | Day1 | BLUE SEAL 北谷デポアイランド店 | 🍦 |
  | Day1 | MaxValu 讀谷店 | 🛒 |
  | Day1 | 入住喜璃癒志海灘渡假飯店 | 🏨 |
  | Day2 | 喜璃癒志海灘渡假飯店（出發） | 🏨 |
  | Day2 | 燒肉King 名護店 | 🥩 |
  | Day2 | MEGA唐吉訶德 名護店 | 🛍️ |
  | Day2 | 返回喜璃癒志海灘渡假飯店 | 🏨 |
  | Day3 | 飯店設施＋海洋活動自由選 | 🏊 |
  | Day3 | 飯店晚餐 | 🍽️ |
  | Day4 | 喜璃癒志海灘渡假飯店（退房） | 🏨 |
  | Day4 | 入住那霸棕櫚皇家度假飯店 | 🏨 |
  | Day5 | 那霸棕櫚皇家度假飯店 | 🏨 |
  | Day5 | PARCO City | 🛍️ |
  | Day6 | 那霸棕櫚皇家度假飯店 | 🏨 |
  | Day6 | IIAS沖繩豐崎 | 🛍️ |
  | （飯店頁）| hotel1／hotel2 | 🏨 |

- 是否有偏離原規格（及原因）：
  1. **兩間飯店都用佔位圖**。Commons 只找到一張「Okinawa Kariyushi Beach Resort Ocean Spa」，但解析度只有 **450×338**，放成滿版 16:9 會糊掉，比佔位圖更難看；hotel2 沒有任何合法來源。依規格「飯店優先度低於景點、找不到就用佔位圖」處理。
  2. **總覽頁逐日卡片的封面照（加分項）沒有做**。規格說「版面變擁擠就不要做，以你的判斷為準」。實際評估：6 張卡片在桌機是三欄，每張加一塊 16:9 封面會讓整頁高度大幅拉長；而且 **Day3 完全沒有實照**，六張卡只有五張有封面會顯得參差。判斷不做比較好，若你想要我再加上去也很快。
  3. **`renderTimeline()` 多了第三個參數 `dayNum`**（佔位圖需要知道是第幾天才能取代表色）。這是**向下相容的選用參數**，省略時退回預設珊瑚紅；不過我還是把 6 個 day 頁面都補上了天數，各只改 1 行。
  4. **佔位圖的漸層色用 inline style 而不是純 CSS**。原本寫成 CSS `color-mix()`，但那是比較新的語法，舊瀏覽器會整條宣告失效變成沒有配色。改成由 `renderPhoto()` 直接組 `linear-gradient(135deg, ${color}22, ${color}4D)`（8 位色碼帶透明度），相容性穩、效果一樣。
  5. **Day6 那霸機場沿用 Day1 的同一張圖**：同一個地點，重複存兩份只是浪費容量。授權標示照樣完整顯示。

- 怎麼測試的：
  1. **授權合規**：寫腳本掃過 `itinerary.js`，逐一檢查每個實照的 `credit.author` / `license` / `sourceUrl` 三欄是否齊全，並比對 license 是否落在白名單（PD／CC0／CC BY 2.5-4.0／CC BY-SA 2.0-4.0）→ **9/9 通過，0 個問題**。
  2. **授權連結可用**：8 個 `sourceUrl` 逐一 `curl` → **全部 HTTP 200**，都能開到 Commons 該檔案頁。
  3. **資料完整性**：腳本檢查 24 個 stop **全部都有 `photo`**、無遺漏；同時檢查 `choices` 底下**沒有任何一筆被加上 photo**（Day1 美國村兩間午餐小卡片維持原樣）→ 通過。
  4. **圖片規格**：8 個檔案逐一量測 → 全部 **1200×675**、**65.5～192.4 KB**（皆 ≤200KB），資料夾總計 **1.1 MB**（規格上限 3MB）。
  5. **實際畫面**：本機起站，6 天頁面全部開過。Day1（4 實照＋3 佔位）、Day2（1 實照＋3 佔位）、Day3（2 佔位）、Day4（2 實照＋2 佔位）、Day5（1 實照＋2 佔位）、Day6（1 實照＋2 佔位）—— 每個時間軸項目都剛好一張圖，數量與資料一致。截圖目視確認實照是 16:9 圓角、授權小字在右下角不搶版面；佔位圖是該天代表色的漸層＋虛線框＋大 emoji，看得出是刻意設計。
  6. **手機 375px**：Day5 實測 `document.scrollWidth === 375`（**無橫向溢出**），三張照片的實際長寬比都是 **1.778**（精準 16:9，沒有變形），沒有任何一張超出視窗右緣。
  7. **lazy／CLS**：所有 `<img>` 的 `loading` 屬性實測皆為 `lazy`，且都帶有 `width`／`height`；容器有 `aspect-ratio`，載入前就佔好位置。
  8. **飯店頁**：hotel1（設施 8 張）、hotel2（設施 3、餐廳 2）都正確顯示頁首佔位圖，既有內容未受影響。
  9. **Console**：day1-6、hotel1-2 **全部無錯誤**。

- 待確認／已知問題：
  1. **那霸機場那張是「國內線航廈」**。我們的行程進出的是**國際線航廈**（BR112 抵達、JX871 出發）。Commons 上國際線航廈的免費授權照片沒有找到合適的，這張是同一個機場、辨識度也夠（招牌寫著「那覇空港」），但嚴格說不是同一棟。若你覺得不精確，我可以換成佔位圖或另找。
  2. **Day4 那個 stop 是「平和通商店街 → 牧志公設市場 → 國際通／屋台村夜市」三個地點合併成一項**，一張照片只能代表其中之一，我選了辨識度最高的國際通。牧志公設市場也有合法照片（`File:JP-47 Naha Makishi-Public-Market.jpg`，CC BY 2.0），若之後你想把這一項拆成三個 stop，我可以再補。
  3. **CC BY-SA 的「相同方式分享」條款**：CC BY-SA 要求「改作後需以相同授權釋出」。我做的只是**縮圖與裁切**（技術性重製），一般認定不構成衍生作品，且已完整標示作者與授權並連回原始頁面。這是給非商業個人旅遊網站用，風險很低，但還是先跟你講一聲。
  4. **佔位圖佔比偏高**（15/24）。Day3 整天兩個項目都是佔位圖，畫面會比較單調。這是規格預期的結果（10 月實拍後替換），只是先提醒你心裡有數。要替換時只要把 `photo` 從 `{placeholder:true,...}` 改成 `{src, alt, credit}` 就好，程式不用動。

---

## Claude 驗收結果（由 Claude 核對後填寫）

驗收方式：檔案取回雲端環境，Playwright 實測 ＋ **實際開圖用眼睛看過每一張照片內容是否與地點相符**。

### 逐項驗收標準檢查結果：9 項全部通過 ✅

| # | 驗收標準 | 結果 | 實測證據 |
|---|---|---|---|
| 1 | 每個 stop 都有 photo，既有欄位未動 | ✅ | 資料檔共 14 筆 `sourceUrl`（9 景點＋5 商品）、48 筆 `placeholder: true`；Day1 實測 4 實照＋3 佔位圖 |
| 2 | 實照 credit 三欄完整且授權合格 | ✅ | 9 張全部為 PD／CC BY 2.5／CC BY 4.0／CC BY-SA 3.0／CC BY-SA 4.0，無 NC／ND |
| 3 | 授權標示可點擊、連到 Commons | ✅ | 實測範例「照片：663highland / CC BY 2.5」→ `commons.wikimedia.org/wiki/File:Naha_Airport…` |
| 4 | 佔位圖是 CSS 畫的、用該天代表色 | ✅ | 無外部圖片服務，比例與實照一致 |
| 5 | 美國村兩個午餐 choices 未被加照片 | ✅ | choices 小卡片維持原樣 |
| 6 | 每張 ≤200KB、寬 ≤1200px、總計 ≤3MB | ✅ | 13 張全部 **1200×675**、85-192KB，**超標 0 張**；`images/` 總計 **1.8MB** |
| 7 | 手機 375px 不溢出不變形 | ✅ | day1／index／shopping 三頁 `scrollWidth === 375` |
| 8 | lazy 且不造成版面跳動 | ✅ | 全部 `loading="lazy"`＋明確 width/height，實測比例 **1.778**（精準 16:9）；捲動後 4 張全部 `naturalWidth 1200` 正常載入 |
| 9 | 6 天頁面 Console 無錯誤 | ✅ | 無任何錯誤 |

### 授權資訊完整性抽查：通過 ✅

9 張實照的 author／license／sourceUrl 三欄全部齊備，授權類型全部落在規格允許範圍內。用 Commons API 讀 `extmetadata` 自動過濾 NC／ND 這個做法比人工判斷可靠，**這是這次做得最好的地方**。

### 照片內容適切性（Claude 實際看圖檢查）：全部通過 ✅

- **波上宮**：崖上神社＋波之上海灘全景，一眼認得出是哪裡
- **殘波岬**：斷崖與海，比燈塔照更能表達現場感（同意你換掉第一張的判斷）
- **美麗海水族館**：黑潮之海大水槽＋鯨鯊＋觀眾剪影 —— **這張選得非常好**，就是這個行程最期待的畫面
- **AEON來客夢**：商場外觀；**國際通**：白天商店街全景；**玉泉洞**：洞內步道與鐘乳石，全部正確
- 9/9 命中率符合規格預期清單

### 需要調整的地方：無

三個偏離規格的判斷（16:9 統一裁切、共用 `renderPhoto()`、那霸機場 Day1／Day6 共用同一張）都合理。用斷言確認「這一行的 title 等於預期地點名」才寫入資料，避免插錯位置，這個做法值得之後繼續沿用。
