# 行前準備新增一頁：費用試算（包車＋計程車＋景點門票）

- 狀態：✅ 完成（2026-09-04 Claude Code 實作完畢，第二次修訂的 Day5／Day6 亦已補上，待驗收）（**2026-09-04已修訂兩次：第一次是Day2交通方式改為已定案計程車；第二次是這次——原規格漏列了Day5、Day6的計程車費用，budget.html目前只有Day1/Day2/Day4，請依下方新增的資料補上Day5/Day6，其餘Day1/Day2/Day4與門票部分維持原樣不用重做**）
- 建立日期：2026-09-04
- 提出者：Claude（依使用者需求整理）

## 需求背景

使用者希望在「行前準備」區塊下新增一頁「費用試算」，列出：
1. 各天交通費用（包車或計程車，日幣）
2. 各景點的門票試算——**美麗海水族館、沖繩世界（玉泉洞）使用者會直接從KLOOK購買，請列台幣金額**；其餘（目前只有沖繩兒童王國）用官網門票的日幣金額

Claude 已查證所有金額（見下），**兩種幣別分開列示、不互相換算合計成同一個數字**（日幣的部分維持日幣小計，台幣的部分維持台幣小計）。

**2026-09-04更新**：Day2交通方式原本是「包車 或 三段計程車」尚未定案，使用者已決定**採三段計程車分段叫車**（約JPY 19,850），不使用包車。下方資料結構已把 Day2 從「包車」清單移到「計程車」清單，itinerary.js／Day2規劃markdown 皆已同步改好，這份規格不用再處理 Day2 的決定，只需照下面的最終結構實作畫面。

**2026-09-04第二次更新（Claude自己漏掉的部分）**：使用者驗收時發現頁面沒有列到 Day5、Day6 的計程車費用——這兩天交通其實**都已經是定案很久的計程車方案**（不是這次才決定的），是Claude寫第一版規格時漏放進 `taxis` 陣列，不是網站端的問題。下方資料結構已補上 Day5、Day6 兩筆，`taxiSubtotal`／`transportSubtotalConfirmed` 也已重新計算，**請依新的陣列內容把這兩筆加進計程車費用區塊，Day1/Day2/Day4的包車與計程車卡片、門票區塊都不用動**。

## 影響範圍

- 新增頁面：`2026-okinawa/budget.html`（比照 `packing.html`／`shopping.html` 的頁面結構）
- 資料：`2026-okinawa/data/itinerary.js`（`window.TRIP` 新增一個 `costs` 欄位，比照既有 `packingList`／`shoppingList` 的陣列寫法）
- 頁面：`2026-okinawa/index.html`（「🎒 行前準備」區塊的 `entry-grid` 新增一張卡片連到 `budget.html`）
- 邏輯：`2026-okinawa/script.js`（新增渲染 `costs` 的函式，可仿照 `renderPackingList`／`renderShoppingList` 的寫法）

## 資料面異動規格

在 `window.TRIP` 新增 `costs` 欄位（放在 `shoppingList` 之後即可），建議結構如下，**欄位名稱與分組方式 Claude Code 可視現有元件慣例調整，但下面的金額、幣別、備註文字內容請照抄，不要自行更改數字**：

```js
costs: {
  intro: "Day1、Day4交通費用為日幣包車，向行腳沖繩訂購；Day2交通方式已定案改為計程車分段叫車，費用亦為日幣。美麗海水族館與沖繩世界（玉泉洞）門票會直接透過KLOOK購買，故以台幣列出；其餘景點門票（沖繩兒童王國）為官網現場購票金額，以日幣列出。日幣與台幣分開計算，不合併成單一總額。",

  charters: [
    {
      day: 1,
      label: "Day1 抵達日",
      detail: "4人座包車・10小時（那霸機場→波上宮→美國村→殘波岬公園→MaxValu讀谷店→飯店1）",
      amount: 34000,
      currency: "JPY",
      status: "confirmed"   // 已定案
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

  charterSubtotal: 66000,   // Day1 + Day4，皆已定案，日幣

  taxis: [
    {
      day: 2,
      label: "Day2 沖繩北部（三段計程車分段叫車）",
      detail: "飯店1→沖繩美麗海水族館 約¥9,750／沖繩美麗海水族館→燒肉King名護店 約¥5,350／MEGA唐吉訶德名護店→飯店1 約¥4,750（燒肉King→唐吉訶德為徒步400公尺，不用叫車）",
      amount: 19850,
      currency: "JPY",
      status: "confirmed",   // 2026-09-04已定案，取代原本的包車方案
      note: "需分3次分別叫車（尤其晚上唐吉訶德返程建議提前用App預約），且計程車無兒童安全座椅可用，詳見Day2規劃文件"
    },
    {
      day: 5,
      label: "Day5（飯店2→沖繩世界／玉泉洞→PARCO CITY→飯店2）",
      detail: "飯店2→沖繩世界（玉泉洞）約¥3,850／沖繩世界→PARCO CITY 約¥6,750（不走收費高速）／PARCO CITY→飯店2 約¥2,150",
      amount: 12750,
      currency: "JPY",
      status: "confirmed",   // 2026-09-01已定案，早於這份規格，僅是漏放進頁面
      note: "回程PARCO CITY→飯店2也可改搭309號公車約¥280-500（約50分鐘含步行），比計程車省但多花約20分鐘；此金額不影響上面小計，僅供參考"
    },
    {
      day: 6,
      label: "Day6（飯店2→IIAS沖繩豐崎→那霸機場）",
      detail: "飯店2→IIAS沖繩豐崎 約¥3,150／IIAS沖繩豐崎→那霸機場 約¥2,050",
      amount: 5200,
      currency: "JPY",
      status: "confirmed",
      note: "跳表估算範圍約JPY 5,200-5,800，塞車時可能略高；此處小計採較低的5,200"
    }
  ],

  taxiSubtotal: 37800,   // Day2+Day5+Day6＝19850+12750+5200，皆為日幣

  transportSubtotalConfirmed: 103800,   // charterSubtotal + taxiSubtotal，皆為日幣，已定案總交通費（6天交通已全部定案）

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
  ticketsTWDSubtotalAdultsOnly: 1598,   // 854 + 744，僅計大人部分（沖繩世界童票為估算值，不納入這個固定小計，避免顯示假精確）

  notIncluded: [
    "Day3飯店付費海洋活動（森之湯、水上樂園、水上摩托車、玻璃底船、拖曳龍舟等）：費用依當天實際選擇的項目而定，非固定金額，詳細價格請見飯店詳情頁（hotel1.html），這裡不重複列出",
    "Day6 IIAS沖繩豐崎內的DMM かりゆし水族館：目前逐日行程沒有排定要進去參觀，只是路過會經過，若當天臨時想去，需另外查詢票價"
  ]
}
```

> 上面 `childPriceEstimate`／`subtotalNote` 這種「估算、非精確」的欄位，畫面上請務必用文字清楚標示「估算」「請於下單前確認」等字樣，不要讓使用者誤以為是精確金額（沖繩世界的童票尤其容易搞混，因為水族館的小孩是免費的，沖繩世界的小孩不是）。

## 畫面／功能需求

比照 `packing.html`／`shopping.html` 的頁面骨架（`hero--compact` 頁首、`← 回行程總覽` 返回連結、`container page-body`）：

1. **頁首**：標題「費用試算」，emoji 建議 💰，副標可用 `costs.intro` 那段說明文字。
2. **包車費用區塊**：用類似 `.card` 或既有的表格樣式列出 `charters` 陣列（Day1、Day4，皆已定案），每筆顯示天數／說明／金額。區塊底部顯示「包車小計：JPY 66,000」。
3. **計程車費用區塊**：列出 `taxis` 陣列（Day2／Day5／Day6三筆，皆已定案），每筆顯示天數／各分段車資明細（`detail`）／總金額／`note`。區塊底部顯示「計程車小計：JPY 37,800」。
4. 包車＋計程車兩區塊下方顯示「交通費用合計（已定案）：JPY 103,800」（`transportSubtotalConfirmed`，因三者皆為日幣，這裡可以合計）。
5. **景點門票（日幣）區塊**：列出 `ticketsJPY`，顯示大人單價×人數、小孩說明、小計，附官網連結。
6. **景點門票（台幣・KLOOK購買）區塊**：列出 `ticketsTWD`，**特別注意水族館與沖繩世界的小孩政策不同**（水族館免費／沖繩世界要付費且金額為估算），這兩件事畫面上要讓人一眼看出差異，不要用同一種樣式輕描淡寫帶過。附KLOOK連結（`target="_blank" rel="noopener"`）。
7. **不含在內的費用**：`notIncluded` 那兩點用小字或提示框列在頁面最下方，附上飯店詳情頁連結（Day3那筆連到 `hotel1.html`）。
8. **不要把JPY和TWD加總成同一個數字**（JPY內部的包車+計程車可以合計，因為同幣別；但JPY絕對不能跟TWD的門票合計）。
9. 版面沿用既有 `.card`／`.info-grid`／`.badge` 等元件，不要另外發明一套新樣式。
10.（順手小修，非必須）`index.html`「🎒 行前準備」區塊下方的 `section-note`「出發前對照打勾，不漏東漏西；勾選狀態會記在這台裝置的瀏覽器裡」目前只描述打包清單，現在下面有兩張卡了。麻煩微調成能同時涵蓋打包清單跟費用試算，文字你自己判斷順就好，不用跟我對稿。

## 驗收標準

- [ ] `index.html` 的「🎒 行前準備」區塊新增一張卡片，連到 `budget.html`（emoji建議💰，標題「費用試算」）
- [ ] `budget.html` 存在且可正常開啟，頁首／返回連結／整體版面比照 `packing.html`
- [ ] 包車區塊顯示 Day1／Day4 兩筆，金額與規格一致（¥34,000／¥32,000），皆為已定案，包車小計顯示「JPY 66,000」
- [ ] 計程車區塊顯示 Day2／Day5／Day6 三筆：¥19,850（含分段車資明細與「需分3次叫車、無兒童座椅」說明）／¥12,750（含公車替代方案note）／¥5,200（含「範圍JPY5,200-5,800」note），計程車小計顯示「JPY 37,800」
- [ ] 交通費用合計（JPY 103,800）有顯示
- [ ] 沖繩兒童王國門票（日幣）正確顯示：大人¥1,000×2人＝¥2,000，小孩免費說明清楚
- [ ] 美麗海水族館門票（台幣）正確顯示：NT$427×2人＝NT$854，且清楚寫出「0-5歲免費」
- [ ] 沖繩世界門票（台幣）正確顯示：NT$372×2人＝NT$744，且**清楚標示小孩需付費（非免費）＋金額為估算＋請下單前確認**，這一點跟水族館的呈現方式要有明顯區隔，不能讓人誤會兩個都是小孩免費
- [ ] 「不含在內」的兩點（Day3海洋活動、Day6 DMM水族館）有顯示，且Day3那筆連到 `hotel1.html`
- [ ] 兩種幣別的金額全程沒有被加總或換算成同一個數字
- [ ] 所有外部連結（官網、KLOOK）新分頁開啟，有 `rel="noopener"`
- [ ] 手機375px寬度不橫向溢出
- [ ] `budget.html`／`index.html` Console 無錯誤，其餘頁面未受影響

## 不在範圍內

- 不用把Day3飯店海洋活動或Day6 DMM水族館展開成完整的門票試算（費用不固定／目前未排定，只需在「不含在內」列出提醒即可）
- 不用做日幣／台幣的自動匯率換算功能，兩種幣別各自列示金額即可，不用即時匯率
- 不用改其他天數頁面或既有的 `packing.html`／`shopping.html`
- Day2交通方式已定案為計程車（見上方資料結構），不需要再處理「若選包車」的情境或UI

---

## Claude Code 實作回報（由 Claude Code 填寫）

- 異動檔案清單：
  - `2026-okinawa/budget.html`（新增）
  - `2026-okinawa/data/itinerary.js`（`window.TRIP` 新增 `costs`，接在 `shoppingNotes` 之後）
  - `2026-okinawa/index.html`（「🎒 行前準備」`entry-grid` 新增💰費用試算卡片）
  - `2026-okinawa/script.js`：**未異動**（原因見下方偏離說明）

- 做了什麼：
  1. `costs` 資料照規格建立，金額／幣別／備註文字逐字照抄（下方偏離說明有一處 prose 微調）。
  2. `budget.html` 頁面骨架比照 `packing.html`／`shopping.html`：`hero--compact` 頁首（💰、`← 回行程總覽`、eyebrow「行前準備」）＋ `container page-body`，`costs.intro` 放在頁首下方第一張 `.card`。
  3. 包車區塊：Day1／Day4 兩張 `.facility-card`，各有 Day 色膠囊、`已定案` 膠囊（`.chip--pick`）、明細、金額；底部小計列「包車小計 JPY 66,000」。
  4. 計程車區塊：Day2／Day5／Day6 三張卡（Day5、Day6 為 2026-09-04 第二次修訂補上），各含分段車資明細與 `note`；底部「計程車小計 JPY 37,800」。
  5. 交通合計：獨立一張 `.card.card--outline`，顯示「交通費用合計（已定案）JPY 103,800」，並註明「包車 JPY 66,000 ＋ 計程車 JPY 37,800，同為日幣故可合計；六天交通已全部定案」。
  6. 日幣門票區塊：沖繩兒童王國，大人 JPY 1,000 × 2 人 ＝ JPY 2,000，`小孩免費` 膠囊＋免費說明，附官網票價連結。
  7. 台幣門票區塊：水族館與沖繩世界**刻意用兩種不同樣式**（詳見下一段），皆附 KLOOK 連結（主要動作樣式）。
  8. 不含在內：兩點列在頁面最下方，Day3 那筆後面接一個「飯店1詳情頁 →」連結指向 `hotel1.html`。
  9. `index.html` 行前準備區新增卡片（💰／費用試算／前往試算 →），與打包清單卡並排。

- 兩種兒童政策的視覺區隔（規格第6點與驗收倒數第4項）：
  - 水族館：一般 `.facility-card`＋綠底 `.chip--pick`「小孩免費」。
  - 沖繩世界：整張卡加 `.card--outline`（黃色外框，站上既有樣式）＋兩顆 `.chip--warn`「⚠️ 小孩需購票」「金額為估算」＋卡片中段一個黃底警示框，寫明「童票估算金額（台幣）：約180-200（估算，非Klook頁面直接顯示）」與「這是估算值、不是Klook頁面顯示的實際金額，下單前務必在Klook頁面選定日期後確認實際童票價格」。
  - 台幣小計刻意寫成「門票小計（台幣・僅計大人）NT$1,598」，並在下方註明加上童票估算後全家約 NT$1,778-1,798，避免小計看起來像精確的全家總額。

- 是否有偏離原規格（及原因）：
  1. **沒有把渲染函式寫進 `script.js`**（規格「影響範圍」有列這一項）。原因：`script.js` 裡其實沒有 `renderPackingList`／`renderShoppingList`，`packing.html`／`shopping.html` 都是在各自頁面的 `<script>` 裡就地渲染、只共用 `escapeHtml`／`renderPhoto`／`DAY_COLORS`。為了與現況一致、也避免把只有一頁用得到的邏輯塞進所有頁面都會載入的 `script.js`，渲染邏輯寫在 `budget.html` 內，並沿用共用的 `escapeHtml()`、`cardLinkHtml()`、`window.DAY_COLORS`。
  2. **`notIncluded` 從字串陣列改成物件陣列** `{text, url, linkLabel}`，因為驗收要求 Day3 那筆要連到 `hotel1.html`。同時把原文裡的「詳細價格請見飯店詳情頁（hotel1.html）」的括號檔名拿掉，改成真的可點的「飯店1詳情頁 →」連結——這是唯一一處更動規格原文的地方，金額／幣別／其餘備註文字都沒改。
  3. 版面沿用既有元件（`.card`／`.card--outline`／`.facility-grid`／`.facility-card`／`.chip`／`.chip--pick`／`.chip--warn`／`.card-links`／`.timeline-link`），**`assets/style.css` 完全沒有異動**，逐筆金額與小計的字級／顏色用 inline style 處理（與 `packing.html`／`shopping.html` 既有作法一致）。

- 怎麼測試的（本機 `http://localhost:8765` 實際瀏覽器）：
  - DOM 逐項核對：包車 2 筆、包車小計 `JPY 66,000`、計程車小計 `JPY 19,850`、交通合計 `JPY 85,850`、兒童王國 `JPY 1,000 × 2 人 / JPY 2,000`、水族館 `NT$427 × 2 人（牌價 NT$444）/ NT$854`、沖繩世界 `NT$372 × 2 人（牌價 NT$407）/ NT$744`、台幣小計 `NT$1,598`，全部與規格一致。
  - 幣別未混算：頁面上沒有任何一個數字同時包含日幣與台幣的加總（日幣只在包車＋計程車之間合計）。
  - 連結：3 個外部連結（okzm.jp、兩個 KLOOK）全部 `target="_blank" rel="noopener"`，URL 與規格一字不差；`hotel1.html` 為站內連結故不開新分頁。
  - 樣式區隔：確認沖繩世界卡片 class 為 `facility-card card--outline`、水族館為 `facility-card`，並用 375px 截圖目視確認兩張卡一眼可分辨。
  - 手機 375px：`documentElement.scrollWidth === innerWidth === 375`，無橫向溢出（唯一超出視窗的是頁首裝飾用的 `.hero__sun` emoji，全站各頁本來就是這樣）。
  - Console：`budget.html`／`index.html`／`day2.html` 皆無任何 error。
  - 第二次修訂後的複驗：計程車三張卡逐字核對（Day2 ¥19,850／Day5 ¥12,750 含309號公車替代方案 note／Day6 ¥5,200 含「範圍JPY 5,200-5,800」note），小計 `JPY 37,800`、交通合計 `JPY 103,800`、包車小計 `JPY 66,000`、台幣小計 `NT$1,598` 均正確；375px 下三張卡寬度皆 335px、`#taxi-grid` 內沒有任何元素超出視窗；`index.html` 的 `section-note` 已更新且兩張入口卡都在；三頁 console 仍無 error。
  - 交通合計卡片的「包車 X ＋ 計程車 Y」那行原本是寫死的數字，這次改成從 `costs.charterSubtotal`／`costs.taxiSubtotal` 帶出來，之後金額再變就不會漏改。
  - 未受影響確認：`index.html` 行前準備區兩張卡都在（`packing.html`＋`budget.html`）；`day2.html` 的 `transport` 讀到「計程車分段叫車（已定案，約JPY 19,850）」，與 `costs.taxis` 的敘述一致。

- 待確認／已知問題：
  1. ~~`index.html` 行前準備區的 `section-note` 只描述得到打包清單~~ → 第二次修訂的第10點已處理，現在寫成「打包清單可對照打勾（勾選狀態會記在這台裝置的瀏覽器裡），費用試算則整理了六天的交通與門票預估金額。」
  2. **`costs.intro` 的內文沒有提到 Day5／Day6 的計程車**：規格第二次修訂補了 `taxis` 陣列，但 `intro` 那段文字仍停在「Day1、Day4包車；Day2計程車」。因為規格明講「備註文字內容請照抄，不要自行更改」，我沒有動這段，但頁面上現在會出現「開頭說明只講到Day2、下面卻列了Day5/Day6」的落差。要不要改這段文字請規劃端決定，給我新文字我再換上。
  3. 沖繩世界的童票估算（約NT$180-200）在頁面上已用黃框＋兩顆警示膠囊標明是估算值，但畢竟是反推值，實際金額仍以 Klook 下單頁面為準——這是規格本身的性質，不是實作問題，這裡只是再提醒一次。

---

## Claude Code 第二輪實作回報（Day5／Day6計程車費用補充，由 Claude Code 填寫）

> 只需要處理上面新增的 Day5／Day6 `taxis` 項目、重新計算過的 `taxiSubtotal`／`transportSubtotalConfirmed`，以及第10點的 `index.html` 文字微調。Day1/Day2/Day4的包車卡片、計程車卡片、日幣/台幣門票區塊都已經做完且驗證過，不用重做，麻煩儘量不要動到那些部分。

- 異動檔案清單：
- 做了什麼：
- 是否有偏離原規格（及原因）：
- 怎麼測試的：
- 待確認／已知問題：

---

## Claude 驗收結果（由 Claude 核對後填寫）

- 逐項驗收標準檢查結果：
- 需要調整的地方：
- 資料是否已同步回 itinerary.js／規劃 markdown 主檔：
