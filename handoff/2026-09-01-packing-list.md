# 行前準備物品清單頁面（packing.html）

- 狀態：✅ 完成（2026-09-01 Claude 驗收通過）
- 建立日期：2026-09-01
- 提出者：Claude（依使用者需求整理）

## 需求背景

網站總覽頁（2026-okinawa/index.html）已經有一張連到 `packing.html` 的卡片，但這個頁面還沒做。使用者希望有一份行前打包清單，可以在出發前對照打勾、不漏東漏西。

## 影響範圍

- 頁面：新增 `2026-okinawa/packing.html`
- 資料：`2026-okinawa/data/itinerary.js`（新增 `packingList` 欄位）
- 樣式：`assets/style.css`（如需新增 checklist 相關樣式，沿用既有 card/chip 風格即可，盡量不要新增太多新 class）
- 其他：無

## 資料面異動規格

在 `window.TRIP` 物件新增一個 `packingList` 欄位，結構為分類陣列，每個分類底下是項目陣列（此為 Claude 依過去行程規劃內容整理的建議清單，Claude Code 實作時請直接使用，不用自己編內容）：

```js
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
```

此欄位不影響現有 `days` / `hotels` / `flights` 資料結構，屬於新增欄位，向下相容沒有問題。

## 畫面／功能需求

- 頁面風格比照其他頁面：`hero hero--compact` 頁首（emoji 用 🧳），`← 回行程總覽` 返回連結。
- 內容依 `packingList` 的分類渲染，每個分類一個區塊（可參考 `facility-grid` 的卡片排版，或用簡單的 checklist 樣式，比照 `.card` 元件），分類標題用 `section-title` 樣式。
- 每個項目前面要有可勾選的 checkbox，勾選後該行文字加上刪除線或變淡（視覺上要清楚看出「已收好」）。
- 使用者打勾的狀態要能保留：因為這是實際部署到 GitHub Pages 給使用者自己瀏覽器使用的頁面（不是預覽用途），可以直接用 `localStorage` 保存打勾狀態，下次打開頁面時記得之前勾了哪些。
- 頁面上方可以加一個簡單的進度顯示（例如「已完成 12 / 32 項」）。
- 加一個「全部清除」按鈕，方便下次出國前重新使用這份清單（reset localStorage）。

## 驗收標準

- [ ] `2026-okinawa/index.html` 的「前往清單 →」連結可以正常開啟 `packing.html`，不再是 404
- [ ] 頁面正確列出 `packingList` 的 6 個分類與所有項目
- [ ] 每個項目可以勾選／取消勾選
- [ ] 重新整理頁面後，之前勾選的狀態還在（localStorage 正常運作）
- [ ] 有進度顯示，勾選狀態改變時數字會即時更新
- [ ] 「全部清除」按鈕可以正常重置所有勾選狀態
- [ ] 頁面視覺風格與其他頁面一致（字體、配色、卡片樣式沒有違和感）
- [ ] 手機寬度（375px 左右）瀏覽時排版正常，不會橫向溢出

## 不在範圍內

- 不用調整 `day1.html` ~ `day6.html`、`hotel1.html`、`hotel2.html` 既有內容
- 不用做「多人共用清單」或雲端同步（單純瀏覽器本機記錄即可）
- 清單項目內容已經由 Claude 整理好，不用另外查資料補充，除非發現明顯遺漏可以提出建議

---

## Claude Code 實作回報（由 Claude Code 填寫）

- 異動檔案清單：
  - `2026-okinawa/packing.html`（**新增**）
  - `2026-okinawa/data/itinerary.js`（**修改**：在 `window.TRIP` 最後新增 `packingList` 欄位）
  - `assets/style.css`（**修改**：檔尾新增「行前準備：打包清單」樣式區塊）
  - `.claude/launch.json`、`.gitignore`、`.nojekyll`（**新增**，非網站內容，見下方「偏離原規格」說明）
  - `handoff/2026-09-01-packing-list.md`（本回報）

- 做了什麼：
  - **資料**：`itinerary.js` 末端（`days` 陣列之後）新增 `packingList`，內容 100% 照規格文件抄錄，6 個分類共 35 項，沒有自行增刪或改寫文字。純新增欄位，`flights` / `hotels` / `days` 一個字都沒動。
  - **頁面**：新增 `2026-okinawa/packing.html`，比照 `hotel1.html` 的頁面骨架 —— `hero hero--compact`（emoji 🧳）＋`← 回行程總覽`＋`container page-body`＋`site-footer`，載入順序也一致（`script.js` → `data/itinerary.js` → 頁面邏輯）。
  - **進度區**：頁面最上方一張 `.card`，內含「已完成 X / 35 項」（沿用 `.weather__temp` 的珊瑚紅數字樣式）、一條進度條、`🧹 全部清除`按鈕（`btn btn-outline`）。
  - **清單區**：每個分類一個 `<section>`，標題用 `section-title`，右側加一個 `.chip` 顯示該分類的「已完成 / 總數」，底下一張 `.card` 包住該分類的所有項目；項目在 720px 以上排成兩欄，手機為單欄。
  - **勾選**：每個項目是一個 `<label>` 包住原生 checkbox（整行可點，手機好按），勾選後該行文字加刪除線並轉為 `--ink-soft` 淡色。事件用單一 delegation 掛在容器上，不是每個項目各掛一個 listener。
  - **localStorage**：key 為 `packing:2026-okinawa`，存「已勾選項目」的陣列，每個項目的識別字串是「分類｜項目文字」而不是索引值 —— 這樣未來規劃端在 `packingList` 中間插入／刪除項目時，使用者既有的勾選不會整排錯位。讀寫都包 try/catch，無痕模式或瀏覽器封鎖儲存時會降級成「本次瀏覽有效」，不會讓整頁 JS 掛掉。
  - **全部清除**：先跳 `confirm()` 再清（避免手滑一鍵清空辛苦勾好的 30 幾項），確認後同時清空 localStorage、所有 checkbox、刪除線樣式與進度數字。
  - **CSS**：只在 `assets/style.css` 檔尾新增 `.checklist-head` / `.check-list` / `.check-item`(+`.is-done`) / `.progress-bar`(+`__fill`) 這幾個 class，全部使用既有 CSS 變數（`--coral` / `--sun` / `--bg-soft` / `--ink-soft` / `--radius-sm` 等），沒有新增任何新色票，也沒有改動任何既有 class。

- 是否有偏離原規格（及原因）：
  1. **版面採「section-title 標題 ＋ .card 清單」而非 `facility-grid` 卡片格**：規格寫「可參考 facility-grid 的卡片排版，或用簡單的 checklist 樣式，比照 .card 元件」並且「分類標題用 section-title 樣式」，兩者擇一時我選了後者，因為 `facility-grid` 的兩欄卡片放不進 `section-title` 這種區塊級標題。折衷做法是清單「項目」在寬螢幕排兩欄，桌機不會出現一整排很空的長條。
  2. **多做了兩個規格沒提到的小東西**：進度條（純視覺，配合「進度顯示」需求）、每個分類標題旁的「n / m」小 chip（一眼看出哪一類還沒收完）。若覺得太雜可以拿掉，說一聲即可。
  3. **「全部清除」加了 confirm 確認**：規格只說「可以正常重置」，我加了一層確認以免誤觸。
  4. **頁面邏輯寫在 `packing.html` 內嵌 `<script>`，沒有放進 `script.js`**：`escapeHtml()` 有重複使用 `script.js` 的版本，但打包清單的渲染／localStorage 邏輯只有這一頁會用到，放進 `script.js` 會讓其他 8 個頁面都白載入這段程式碼。作法比照 `index.html` / `day*.html` 的頁面專屬邏輯內嵌慣例。若之後其他行程也要打包清單頁，再抽成共用 `renderPackingList()` 會比較合理。
  5. **範圍外新增檔案**：`.claude/launch.json`（本機起 http server 用的設定，方便日後每次交辦都能實際開瀏覽器測）、`.gitignore`（排除 `.claude/settings.local.json` 這種本機專屬設定）、`.nojekyll`（修 GitHub Pages 建置失敗，見「待確認」第 1 點，**這個請保留**）。前兩者不影響網站輸出，如果不希望它們進 repo 可以直接刪掉。
  6. **清單內容完全沒動**：規格說發現明顯遺漏可以提建議 —— 目前看下來涵蓋度很完整，沒有要補的。唯一想確認的見「待確認」第 2 點。

- 怎麼測試的：
  在本機用 `python -m http.server` 起靜態站（`http://localhost:8765`），用瀏覽器實際開頁面操作，逐項對照驗收標準：
  1. 從 `2026-okinawa/index.html`「前往清單 →」實際點擊，正常導向 `packing.html`，非 404。
  2. 頁面渲染出 6 個分類、35 個項目，數量與 `packingList` 一致。
  3. 隨機勾選 4 項（跨 3 個分類），該行立刻出現刪除線並變淡，總進度、進度條寬度、各分類 chip 數字同步更新。
  4. **重新整理頁面**後，那 4 項仍是勾選狀態、刪除線仍在、進度仍顯示「已完成 4 / 35 項」，localStorage 內容正確。
  5. 「全部清除」按 **取消** → 勾選與 localStorage 完全不變；按 **確定** → 35 項全部取消勾選、刪除線清除、進度歸零、localStorage 清空。
  6. 切到 **375×812 手機視窗** 重新載入：`document.documentElement.scrollWidth === window.innerWidth === 375`，**沒有橫向溢出**；清單自動變單欄，長文字項目（例如「萬用轉接頭（日本為A型雙孔110V…）」「泳衣泳褲（Day2水族館周邊…）」）正常換行且與 checkbox 對齊不跑版。
  7. Console 全程 **無任何錯誤**。
  8. 回歸測試：改過 `itinerary.js` 後重新開 `index.html`（班機／飯店／逐日卡片／全行程地圖）、`day1.html`（時間軸 7 個項目、單日地圖）、`hotel2.html`（設施 3 張、餐廳 2 張）都正常渲染、Console 無錯誤，確認新增欄位沒有影響既有頁面。
  9. Leaflet 地圖與 Open-Meteo 在本機有真實網路，皆正常載入（天氣因距離 2026/10 超過 16 天預報範圍，如預期顯示「出發前再回來看」的提示文案，非錯誤）。

- 待確認／已知問題：
  1. ~~**GitHub 遠端當時是空的**，需確認 Pages 發佈來源~~ → **已處理完畢，網站已上線**：
     - `git ls-remote` 當時回傳 0 筆 ref，本機 `C:\Project\Travel` 原本也**不是** git repo，因此這次做了 `git init` ＋ 把整個專案（含既有 8 個頁面、`assets/`、`202610日本沖繩/` 規劃 md、`handoff/`）建成第一個 commit 後 push 到 `main`。
     - Pages 發佈來源查證結果**本來就已經設定正確**（`source: { branch: "main", path: "/" }`），不需要調整。
     - 但**首次建置失敗、全站 404**：GitHub Pages 預設會跑 Jekyll，而 Jekyll 把 `202610日本沖繩/沖繩行程_逐日行程_Day5_1024.md` 開頭的 `---` / `Day 5：2026/10/24(六)` / `---` 當成 YAML front matter 去解析，格式不合法 → **整站建置中斷**，所有頁面都出不來。
     - 修法：repo 根目錄新增空檔 `.nojekyll`，讓 Pages 跳過 Jekyll、直接原樣輸出靜態檔（本站是純手寫 HTML，本來就不需要 Jekyll）。**沒有更動那份規劃 md 的任何內容**（那是規劃端的檔案）。
     - 重新建置後已驗證線上實際可用：`/`、`/2026-okinawa/`、`packing.html`、`day1.html`、`hotel1.html`、`data/itinerary.js`、`assets/style.css` 全部 HTTP 200，並在 `https://shihjia.github.io/Travel/2026-okinawa/packing.html` 實際操作過（6 分類 35 項、勾選、localStorage 寫入、進度更新都正常）。
     - **提醒**：日後只要在 `202610日本沖繩/` 或 `handoff/` 新增以 `---` 開頭的 markdown，有了 `.nojekyll` 就不會再讓網站掛掉，這個檔案請不要刪除。
  2. **打勾狀態是「單一裝置單一瀏覽器」的**：手機勾的不會同步到電腦，這是規格「不做雲端同步」的預期行為，只是使用者實際用起來可能會問，先提醒一下。頁面上已加一行小字說明。
  3. **清單內容小建議（非必要）**：「證件與財力」裡的「飯店1、飯店2訂房確認信」如果換成實際飯店名稱（沖繩國際通那霸棕櫚皇家度假飯店／另一家）會更好對照，但這屬於內容決策，等規劃端決定再改，我沒有自行更動。
  4. `2026-okinawa/style.css` 目前是空的預留檔且沒有任何頁面載入它，這次的樣式依規格放在 `assets/style.css`，維持現狀沒有動它。

---

## Claude 驗收結果（由 Claude 核對後填寫）

驗收方式：把 `packing.html` / `index.html` / `script.js` / `data/itinerary.js` / `assets/style.css` 取回雲端環境，用 Playwright 實際操作驗證（非只看程式碼）。

### 逐項驗收標準檢查結果：8 項全部通過 ✅

| # | 驗收標準 | 結果 | 實測證據 |
|---|---|---|---|
| 1 | index.html 連結可正常開啟 packing.html，不再 404 | ✅ | 找到 `href="packing.html"` 的卡片連結（「🧳 打包清單 … 前往清單 →」），HTTP 200 |
| 2 | 正確列出 6 個分類與所有項目 | ✅ | 渲染出 6 個 `<section>`、35 個 checkbox，與 `packingList` 資料一致（證件6／3C6／兒童8／衣物6／盥洗5／其他4） |
| 3 | 每個項目可勾選／取消勾選 | ✅ | 跨 3 個分類勾選 4 項，4 行立即加上 `.is-done`（刪除線＋淡色） |
| 4 | 重新整理後勾選狀態還在 | ✅ | reload 後仍為 4 項勾選、`.is-done` 4 行，進度維持「已完成 4 / 35 項」 |
| 5 | 進度顯示即時更新 | ✅ | 勾選後文字變「已完成 4 / 35 項」，進度條寬度 11.4286%（=4/35），各分類 chip 同步更新 |
| 6 | 「全部清除」可正常重置 | ✅ | confirm 確認後 35 項全部取消、`.is-done` 歸零、進度歸零、localStorage 變 `[]` |
| 7 | 視覺風格與其他頁面一致 | ✅ | 只用既有 CSS 變數與既有元件（`.card`／`.chip`／`.btn btn-outline`／`.section-title`／`.weather__temp`），無新色票 |
| 8 | 手機 375px 排版正常不橫向溢出 | ✅ | `scrollWidth === innerWidth === 375`，清單自動變單欄（351px），長項目正常換行 |

另外確認：**Console 全程無 JS 錯誤**；`itinerary.js` 新增 `packingList` 後，既有資料完全未受影響（flights 2／hotels 2／days 6／Day1 items 13／hotel1 facilities 8 皆與異動前相同）。

### 需要調整的地方：無（這份規格的範圍內沒有要修的）

實作品質很好，特別肯定三點：**localStorage 用「分類｜項目文字」當 key 而不是索引值**（規劃端日後增刪項目不會讓使用者勾選整排錯位，這個考量很到位）；**主動抓到並修掉 GitHub Pages 的 Jekyll 建置失敗**（`202610日本沖繩/` 那些 `---` 開頭的規劃 md 確實會讓 Jekyll 解析失敗，`.nojekyll` 是正確解法，而且沒有去動規劃端的檔案內容，處理得很好）；**回歸測試有回頭確認其他 8 個頁面沒被影響**。

### 對「偏離原規格」與「待確認事項」的回覆

1. **版面採 section-title ＋ .card（而非 facility-grid）** → 同意，這個判斷正確，規格本來就寫「擇一」。
2. **多做的進度條、分類 n/m chip** → **保留**，這兩個都讓頁面更好用，不用拿掉。
3. **「全部清除」加 confirm** → **保留**，35 項手滑清空會很痛。
4. **頁面邏輯內嵌不放進 script.js** → 同意你的理由（只有這頁用到，放共用檔會讓其他 8 頁白載入），比照既有頁面慣例是對的。
5. **`.nojekyll`** → **請務必保留**，已在 `handoff/README.md` 補記這件事，之後規劃端在 `202610日本沖繩/` 或 `handoff/` 新增 `---` 開頭的 md 就不會再讓網站掛掉。`.claude/launch.json` 與 `.gitignore` 也一併保留，本機起 server 測試很有幫助。
6. **「飯店1、飯店2訂房確認信」建議改成實際飯店名稱** → **採納**，這是規劃端的內容決策，我會放進下一份規格文件一起改（不用你現在動）。
7. **打勾狀態是單一裝置單一瀏覽器** → 符合規格預期，頁面上已加小字說明即可，不用做雲端同步。
8. **`2026-okinawa/style.css` 是空的且沒有任何頁面載入** → 規劃端決定：**下次一併刪除這個檔案**。留著沒有頁面 `<link>` 它，日後有人往裡面寫樣式會完全不生效、反而誤導；真的需要單一行程專屬樣式時，再重新建立並確實在各頁 `<link>` 進去。已寫入下一份規格。

### 資料是否已同步回 itinerary.js／規劃 markdown 主檔：

- `itinerary.js`：✅ 已含 `packingList`（6 分類 35 項，與規格文件逐字一致）。
- 規劃端 markdown 主檔：規劃資料夾 `202610日本沖繩/` 的行程檔案本次不受影響（打包清單屬網站端內容，不影響逐日行程規劃）；規劃端記憶已同步更新此頁完成狀態。
