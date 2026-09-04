# Day4 新增景點：沖繩兒童王國（動物王國，AEON MALL之前）＋ Day4交通改包車

- 狀態：✅ 完成（2026-09-04 Claude Code 實作完畢，待驗收）
- 建立日期：2026-09-04（**2026-09-04已修訂一次：原規格是計程車分段方案，因發現動物王國沒有置物櫃、換飯店日需帶行李，已改為包車方案，請以本版為準**）
- 提出者：Claude（依使用者需求整理）

## 需求背景

使用者決定在 Day4「飯店1退房 → AEON MALL沖縄ライカム」之間，加入沖繩兒童王國（沖縄こどもの国／Okinawa Zoo & Museum，沖縄市胡屋）作為新的一站，並希望反映到已上線的網站行程頁。

**這一站幾乎順路**：Hotel1→動物王國 35.1km／44分，動物王國→AEON MALL 只有 2.6km／9分（Google地圖實測），完全不繞遠路。

**⚠️ 交通方式從計程車改成包車**：Claude原本規劃三段計程車分段叫車，但查證沖繩兒童王國官網的「設備・サービス」清單（車椅子租借、嬰兒車租借、哺乳室等都有列，**唯獨沒有列出置物櫃**），跟AEON MALL不同，動物王國看起來沒有地方寄放行李。Day4是換飯店日、全程需要帶著行李，計程車分段方案會變成要扛著行李進動物園，不可行。**使用者評估後決定改採4人座包車8小時（JPY 32,000）**，行李全程放車上，司機在動物王國與AEON MALL門口等候，不用中途處理行李。

**同時使用者決定不帶推車**，行李只有一大一中兩件，2大人+1小孩共3人，**改用4人座車即可**（比6人座便宜，座位數與行李容量都夠）。這個決定也同步套用到 **Day1** 的既有包車（見下方「同時異動：Day1包車車型」）。

## 影響範圍

- 資料：`2026-okinawa/data/itinerary.js`
  - Day4 的 `items` 陣列：新增 1 個 `stop`（沖繩兒童王國）、新增 1 個 `transport`、修改既有 2 個 `transport` 的文字（改成包車無費用版本）、修改 AEON MALL 與飯店2 兩筆 `stop` 的 `time`/`timeEnd`、修改 Day4 頂層 `transport` 摘要文字
  - **Day1 的 `transport` 欄位已由 Claude 直接改好**（`"6人座包車・10小時（JPY 43,000）"` → `"4人座包車・10小時（JPY 34,000）"`），純文字欄位異動、沒有動到 Day1 其他資料，**Claude Code 這邊不用再處理 Day1**，commit 時這筆異動會一起在 working tree 裡，麻煩一併帶上即可
- 頁面：`2026-okinawa/day4.html`（不需改版面，沿用既有時間軸渲染邏輯）
- 新增：`2026-okinawa/images/day4-kodomonokuni.jpg`（實際照片，規格見下）
- 規劃主檔：`202610日本沖繩/沖繩行程_逐日行程_Day4_1023.md`、`沖繩行程_逐日行程_Day1_1020.md`（**Claude 已自行同步完成，Claude Code 不用動這兩份**）

## 資料面異動規格

### 1. 新增一個 `stop`（插在原本「飯店1→AEON MALL」的 transport 中間）

```js
{
  type: "stop",
  time: "10:15", timeEnd: "12:15",
  title: "沖繩兒童王國",
  photo: {
    src: "images/day4-kodomonokuni.jpg",
    alt: "沖繩兒童王國入口的動物造型招牌",
    credit: {
      author: "Abasaa",
      license: "Public domain",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Entrance_to_Okinawa_Zoo_%26_Museum.JPG"
    }
  },
  sub: "動物園＋室內兒童館，約150種動物；15歲以下免費入園（16歲以上¥1,000／人，我們2大人共¥2,000）。必玩：11:00動物餵食秀（屋久島猴／河馬，時間內剛好碰得到）、動物廣場餵食体驗¥300（平日10:00-12:00）、小火車／旋轉木馬¥400、迷你車¥100、スプラッシュパーク免費戲水區（水深約20cm）。行李留在包車上，不用帶進園區",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=%E6%B2%96%E7%B8%84%E3%81%93%E3%81%A9%E3%82%82%E3%81%AE%E5%9B%BD",
  lat: 26.3283, lon: 127.8034,
  officialUrl: "https://www.okzm.jp/",
  guideUrl: "https://fullfenblog.tw/okinawa-zoo/"
}
```

> `officialUrl`／`guideUrl` 兩個欄位目前資料裡沒有其他 stop 在用，是這次新加的。畫面需求見下方「官網／介紹連結呈現方式」，若你覺得沿用 hotel1-links-photos 那份規格裡設施卡片已經有的「官網介紹 →」膠囊連結元件（`cardLinkHtml()`）更省事、更一致，也可以直接用同一套，把這兩個欄位改成一個 `links: [{url, label}]` 陣列或沿用既有的連結元件寫法，這部分請 Claude Code 依現有元件判斷最省工的做法，不用跟這裡的欄位名稱綁死。

### 2. 原本「飯店1→AEON MALL」的 `transport` 拆成兩段（**改包車，不含費用**）

**原本**（要被取代）：
```js
{ type: "transport", note: "計程車約52分鐘・36.2公里／¥10,550" },
```

**改成**（比照 Day1 包車的 transport note 寫法，只寫車程不寫費用，因為是包車一口價、不是按段計費）：
```js
{ type: "transport", note: "約44分鐘・35.1公里" },
// ↑ 新增的沖繩兒童王國 stop 放這裡 ↑
{ type: "transport", note: "約9分鐘・2.6公里" },
```

### 3. AEON MALL 那筆 `stop` 的時間要改

**原本**：`time: "10:00", timeEnd: "14:30"`
**改成**：`time: "12:25", timeEnd: "16:20"`（購物時間約3小時55分，因為改包車，跟原本4.5小時幾乎一樣，不用壓縮）

### 4. 「AEON MALL→飯店2」的 `transport` 與飯店2 `stop` 的時間都要改

**原本**：
```js
{ type: "transport", note: "計程車約39分鐘・21.1公里／¥6,250" },
```
**改成**：
```js
{ type: "transport", note: "約39分鐘・21.1公里" },
```

飯店2那筆 `stop` 原本 `time: "15:10", timeEnd: "16:10"`，**改成** `time: "17:00", timeEnd: "17:30"`（正常車況約17:00抵達，包車8小時方案在17:30到期，中間留約30分鐘緩衝應付塞車；`sub` 文字可以補一句「包車行程至此結束」）。

### 5. 「平和通→國際通」那筆 `stop` 的起始時間要改

原本 `time: "16:20"`，**改成** `time: "17:30"`（因為抵達飯店2的時間整體往後移了，`timeEnd` 維持空字串／不限時不變）。

### 6. Day4 頂層 `transport` 摘要文字要改

**原本**：
```js
transport: "計程車分段叫車（已定案，約JPY 18,000-18,500）",
```

**改成**（比照 Day1 `"6人座包車・10小時（JPY 43,000）"` 的寫法）：
```js
transport: "4人座包車・8小時（JPY 32,000）",
```

## 同時異動：Day1 包車車型（Claude已直接處理，僅供對照）

Day1 `itinerary.js` 的 `transport` 欄位已從 `"6人座包車・10小時（JPY 43,000）"` 改成 `"4人座包車・10小時（JPY 34,000）"`（純文字欄位，Claude已直接改好，working tree裡會看到這筆異動，commit時請一併帶上，不用額外處理）。

## 照片規格（實際照片，非插圖）

**已找到可用的 Wikimedia Commons 免費授權實照，優先使用這張，不需要用 AI 生圖：**

- 檔案：[File:Entrance to Okinawa Zoo & Museum.JPG](https://commons.wikimedia.org/wiki/File:Entrance_to_Okinawa_Zoo_%26_Museum.JPG)
- 內容：沖繩兒童王國入口處色彩繽紛的動物造型（長頸鹿／大象／獅子等）招牌，藍天背景，Claude 已實際打開圖片確認內容乾淨、無不當內容
- 授權：**Public domain**（作者本人聲明釋出公版，全球適用）
- 作者：Abasaa（あばさー）
- 拍攝日期：2012-07-07
- 原始尺寸：2048×1536

**處理要求**（比照 `2026-09-01-stop-photos.md` 的既有規格）：
- 裁成 **16:9**、縮到 **1200×675 以內**、JPEG 壓到 **≤200KB**
- 存成 `2026-okinawa/images/day4-kodomonokuni.jpg`
- `images/` 資料夾目前約4.3MB，加這張後預期約4.4-4.5MB，仍在既有5.5MB上限內
- `photo.credit` 三欄（`author`／`license`／`sourceUrl`）務必照上面填寫，畫面上比照其他實照，右下角要看得到可點擊的授權標示

**如果 Claude Code 端抓不到這個檔案**（例如網路權限問題）：不要臨時換用別的來源（Google圖片／官網／部落格都不行，理由同 `2026-09-01-stop-photos.md` 的授權規則），改用下面這組 AI 插圖 prompt 當備案，畫風需與既有10張示意插圖一致：

```
Flat cartoon illustration of a cheerful children's zoo entrance, children's picture-book style. A colorful welcome archway decorated with cute rounded animal cutout shapes (a giraffe, an elephant, a lion) mounted above the gate, a paved path leading into lush green trees beyond, a few tall palm trees at the edges, bright sunny blue sky with fluffy white clouds.
Style: flat vector cartoon, clean rounded shapes, minimal outlines, smooth gradients, bright and welcoming.
Colors: sky blue #3AAED8, deep blue #2A8FB8, warm yellow #FFC93C, orange #FF9F43, coral red #FF6B4A, teal green #2BA6A4, off-white #FFFDF6.
Aspect ratio 16:9, 1600x900.
No text, no letters, no numbers, no logos, no brand names, no signage, no watermarks. No people.
```
若改用插圖，`photo` 欄位改成 `illustration: true` 形態（比照其餘10張），不要留 `credit`。

## 官網／介紹連結呈現方式

沖繩兒童王國的官網（`https://www.okzm.jp/`）跟中文介紹網頁（`https://fullfenblog.tw/okinawa-zoo/`，2026-02 發布，內容詳實含實地照片，Claude已讀過確認品質可用）需要各有一個可點擊的連結。**呈現方式沿用 `2026-09-02-hotel1-links-photos.md` 已經做好的 `cardLinkHtml()` / `.card-links` 元件**（設施卡片底部的「官網介紹 →」膠囊連結那一套），不要另外發明樣式：

- 「官網介紹 →」連到 `https://www.okzm.jp/`
- 「中文介紹 →」連到 `https://fullfenblog.tw/okinawa-zoo/`
- 兩個都是次要樣式（白底外框），並排放在照片跟授權標示之後
- 都要 `target="_blank" rel="noopener"`，並有 `title`／`aria-label`

若這個 `stop` 卡片目前的渲染函式（`renderTimeline`／時間軸項目）跟 `renderFacilityCard` 用的不是同一支、沒有現成的連結插槽，麻煩加一個小小的共用邏輯（可以直接複用 `cardLinkHtml()`），**不要整套重寫**。

## 驗收標準

- [ ] Day4 時間軸新增「沖繩兒童王國」卡片，位置在「飯店1退房」跟「AEON MALL」之間
- [ ] 新卡片顯示時間 10:15-12:15，`sub` 說明文字與規格一致（含門票、必玩設施、餵食秀時間）
- [ ] 新卡片有照片：優先用查證好的 Commons 實照（`day4-kodomonokuni.jpg`，16:9、≤200KB、右下角授權標示可點擊連到 Commons 檔案頁）；若確實抓不到才用插圖備案（右下角要有「示意插圖」標籤）
- [ ] 新卡片底部有「官網介紹 →」與「中文介紹 →」兩個連結，網址正確、新分頁開啟、有 rel="noopener"
- [ ] 兩段新的 `transport` 文字（約44分鐘・35.1公里、約9分鐘・2.6公里，**不含費用**）正確顯示在時間軸上，位置在新卡片前後
- [ ] AEON MALL卡片時間已改成 12:25-16:20，其餘欄位（照片、sub說明、mapUrl等）完全沒有被動到
- [ ] 「AEON MALL→飯店2」的 transport 已改成「約39分鐘・21.1公里」（不含費用）
- [ ] 飯店2那筆 stop 的時間已改成 17:00-17:30
- [ ] 「平和通→國際通」那筆 stop 的起始時間已改成 17:30
- [ ] Day4 頂層 `transport` 摘要文字已改成 `"4人座包車・8小時（JPY 32,000）"`
- [ ] Day1 的 `transport` 欄位確認已是 `"4人座包車・10小時（JPY 34,000）"`（Claude已直接改，此項為確認用）
- [ ] `images/` 資料夾總大小仍在 5.5MB 以內
- [ ] 手機 375px 寬度下新卡片不橫向溢出，圖片與連結正常顯示
- [ ] day4.html／day1.html Console 無錯誤，其餘天數頁面未受影響

## 不在範圍內

- 不用改其他天數頁面（Day1的異動只有一行文字欄位，Claude已直接處理完畢）
- 不用做動物王國的詳情子頁（比照 hotel1.html 那種獨立頁面），這次只是時間軸上的一張卡片，官網/中文介紹連結解決「想看更多細節」的需求即可
- 不用把體驗活動（餵食体驗¥300、乗馬、釣り堀等）拆成個別項目或子卡片，這些資訊整合寫在 `sub` 一段文字裡就好
- 這一站標成 `highlight: true`（比照AEON MALL）與否，由你（Claude Code）視版面判斷即可，不強制
- 不用處理包車公司訂購／聯絡等實務事項，那是使用者自己另外處理的事

---

## Claude Code 實作回報（由 Claude Code 填寫）

- 異動檔案清單：
  - `2026-okinawa/data/itinerary.js`（**修改**：Day4 新增 1 個 `stop`、新增 1 個 `transport`、修改既有 2 個 `transport` 文字、修改 AEON MALL／飯店2 兩筆 `stop` 的 `time`/`timeEnd`、修改「平和通→國際通」`stop` 的 `time`、修改 Day4 頂層 `transport` 摘要文字；Day1 的 `transport` 欄位維持你已直接改好的版本，沒有再動）
  - `2026-okinawa/script.js`（**修改**：`renderTimeline()` 新增一段 `item.links` 渲染，重用既有的 `cardLinkHtml()`）
  - `2026-okinawa/images/day4-kodomonokuni.jpg`（**新增**：176KB）
  - `handoff/2026-09-04-add-kodomonokuni-stop.md`（本回報）
  - **`day4.html`／`assets/style.css` 都沒有動**（時間軸渲染邏輯與 `.card-links` 樣式都是既有的，沿用即可）。

- 做了什麼：
  - **新增沖繩兒童王國 stop**：內容、時間（10:15-12:15）、`sub` 文字、`mapUrl`、經緯度全部照規格逐字帶入，插在「飯店1退房」的 transport 與「AEON MALL」的 transport 之間。
  - **兩段包車 transport 文字**：`約44分鐘・35.1公里` 與 `約9分鐘・2.6公里`，不含費用，比照 Day1 包車寫法。
  - **AEON MALL 時間改成 12:25-16:20**，其餘欄位（photo／sub／mapUrl／highlight）完全沒動。
  - **「AEON MALL→飯店2」transport 改成「約39分鐘・21.1公里」**（去掉費用）。
  - **飯店2 stop 時間改成 17:00-17:30**，`sub` 補上「，包車行程至此結束」。
  - **「平和通→國際通」stop 的起始時間改成 17:30**，`timeEnd` 維持空字串不變。
  - **Day4 頂層 `transport` 摘要改成 `"4人座包車・8小時（JPY 32,000）"`**。
  - **官網／中文介紹連結**：規格給了彈性（欄位名稱不用跟 `officialUrl`/`guideUrl` 綁死），我選擇加一個 `links: [{url, label}]` 陣列，因為 `renderTimeline()` 本來就沒有專門處理兩條連結並排的邏輯，用陣列比兩個獨立欄位更容易讓 `renderTimeline` 用同一段程式碼處理任意筆數的連結。渲染端直接重用 `hotel1-links-photos` 那份規格做好的 `cardLinkHtml()`（沒有再造函式）與既有的 `.card-links` CSS（沒有新增樣式），兩個連結都是次要樣式（白底外框），符合規格「兩個都是次要樣式」的要求。

- 是否有偏離原規格（及原因）：
  1. **`links` 陣列 vs `officialUrl`/`guideUrl` 兩個獨立欄位**：規格明說這部分可以自行判斷，我選陣列是因為 `cardLinkHtml()` 的呼叫方式本來就是「一筆一筆」，用陣列可以直接 `.map()`，往後如果哪個景點想放第三個連結（例如訂票頁）也不用再改資料結構。這是唯一的欄位命名偏離，行為上完全符合驗收標準。
  2. **連結放置順序**：程式碼裡 `.card-links`（官網介紹＋中文介紹）在「Google 地圖 →」連結**之前**（沿用 `renderPhoto()` 之後、`mapUrl` 之前的既有順序）。規格只講了「並排放在照片跟授權標示之後」，沒有規定跟地圖連結的先後，我判斷官網/介紹屬於「認識這個景點」的資訊，放在地圖連結（「去這裡」的行動）之前比較符合資訊到行動的順序，但這是我自己的判斷，如果你覺得地圖連結該放最前面，跟我說一行就能調。
  3. **照片裁切**：官網原圖是 4:3（2048×1536），做 16:9 置中裁切時上下各裁掉約 192px（大部分是天空與地面柏油路），招牌本體、長頸鹿頭到底部樹幹都完整保留，沒有裁到主體。這是延續 `2026-09-01-stop-photos.md` 建立的「16:9 置中裁切」既有作法，沒有另外發明處理方式。

- 怎麼測試的：
  1. **照片來源查證**：用 Wikimedia Commons API 直接查 `File:Entrance_to_Okinawa_Zoo_%26_Museum.JPG` 的 `imageinfo`/`extmetadata`，確認 `LicenseShortName: Public domain`、`Artist: Abasaa`、原始尺寸 2048×1536，與規格給的資訊逐字相符。下載原圖後**用 Read 工具實際看過內容**：招牌上的長頸鹿／大象／獅子／老虎／袋鼠／猴子／鸚鵡動物造型與「沖縄こどもの国 Okinawa Zoo & Museum」文字清楚可見，藍天背景，無不當內容——只是提醒一下，畫面裡有一張 2012 年活動宣傳看板跟路口號誌，這些是實際場景裡本來就存在的街景物件，不是我們added的品牌置入，跟其他既有實照（如 AEON MALL、國際通）一樣「照片會帶到現場招牌/文字」是正常的，只有 AI 插圖才要求無文字。
  2. **裁切/壓縮**：Python + Pillow 置中裁切成 16:9（2048×1152）→ 縮成 1200×675 → JPEG 品質從 90 開始遞減，quality=85 時 178KB，低於 200KB 上限，一次通過不用再往下降。裁切後用 Read 工具再看一次確認招牌主體、文字完整沒被切到。
  3. **`images/` 總量**：裁切壓縮後複製進 repo，`du -sh` 實測 **4.5MB**，在放寬後的 5.5MB 上限內（規格預期 4.4-4.5MB，符合）。
  4. **本機起站逐一 DOM 驗證**（`day4.html`）：讀出整條時間軸的 8 個節點（5 個 stop + 3 個 transport... 實際是 4 個 transport），確認：
     - 順序：飯店1(N/A-09:30) → 🚗約44分鐘・35.1公里 → **沖繩兒童王國(10:15-12:15)** → 🚗約9分鐘・2.6公里 → AEON MALL(**12:25-16:20**) → 🚗約39分鐘・21.1公里 → 入住飯店2(**17:00-17:30**) → 步行約10分鐘 → 平和通...(**17:30**)。與規格逐項比對**完全一致**。
     - 沖繩兒童王國卡片：照片 `naturalWidth/Height` 實測 **1200×675**，右下角授權標示文字「照片：Abasaa / Public domain」、`href` 連到 Commons 檔案頁；`.card-links` 內兩個連結 `href` 分別是 `https://www.okzm.jp/`、`https://fullfenblog.tw/okinawa-zoo/`，皆 `target="_blank"`、`rel="noopener"`、有 `title`/`aria-label`；DOM 順序為 `照片 → card-links → Google地圖連結`。
  5. **地圖**：Day4 地圖的 stops 是從 `day.items` 用 `lat && lon` 過濾出來的既有邏輯，沒有另外改地圖程式碼；實測地圖上出現的編號從 3 個變成 **4 個**（飯店1／兒童王國／AEON MALL／飯店2），新的兒童王國站正確插入在飯店1與AEON MALL之間、標記為第2號。
  6. **手機 375px**：截圖確認新卡片（時間、標題、sub、照片、兩個介紹連結、Google地圖連結）完整顯示、`document.documentElement.scrollWidth === 375`，**無橫向溢出**。
  7. **Day1 確認**：`window.TRIP.days.find(d=>d.day===1).transport` 讀回是 `"4人座包車・10小時（JPY 34,000）"`，與你已直接改好的版本一致，我沒有再動。
  8. **Console**：day1.html／day4.html／index.html 三頁皆無錯誤。

- 待確認／已知問題：
  1. **規劃主檔 markdown（`202610日本沖繩/沖繩行程_逐日行程_Day4_1023.md`）我沒有動**——規格說你已自行同步完成，這份不用 Claude Code 處理，我只確認了網站端的 `itinerary.js`。
  2. **連結順序**（介紹連結在地圖連結之前）是我的判斷，不是規格明文規定，上面「是否有偏離原規格」第 2 點已說明，若你希望地圖連結排最前面，一行就能改。
  3. **`images/` 目前 4.5MB**，加上這張後仍有約 1MB 餘裕到 5.5MB 上限，之後如果還有其他站要補實照/插圖，這個餘量可以參考。

---

## Claude 驗收結果（由 Claude 核對後填寫）

- 逐項驗收標準檢查結果：
- 需要調整的地方：
- 資料是否已同步回 itinerary.js／規劃 markdown 主檔：
