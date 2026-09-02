# 飯店1 詳情頁：每個設施活動加官網連結與插圖、每間餐廳加官網連結

- 狀態：✅ 全部完成並通過驗收（2026-09-02）。需求 1／2／3／5 由 Claude Code 實作（commit c0f7f5d）；需求 4 的 8 張插圖與 `facilities` 的 `photo` 資料由 Claude 直接補上。**尚未 commit／push，請 Claude Code 收尾。**
- 建立日期：2026-09-02
- 提出者：Claude（依使用者需求整理）

## 需求背景

使用者希望 `hotel1.html` 的每一個設施活動都能點進官網該活動的介紹頁，並且每個活動都要有照片或插圖幫助快速理解那是什麼；飯店餐廳的部分也要能連到官網該餐廳的介紹頁。

**Claude 已把 14 個網址全部查證完畢**（每一個都實際打開確認頁面存在、內容與我們資料相符），列在下方。餐廳有 5 間有獨立詳細頁、1 間只有菜單頁；活動 8 項全部有獨立頁面。

## 影響範圍

- 資料：`2026-okinawa/data/itinerary.js`（`hotels[0]` 的 `facilities` 與 `restaurants` 各新增欄位）
- 邏輯：`2026-okinawa/script.js`（`renderFacilityCard` / `renderRestaurantCard`）
- 樣式：`assets/style.css`（如需要）
- 新增：`2026-okinawa/images/` 8 張活動插圖（等使用者產出）

---

## 需求 1：設施活動加上官網連結（8 項，網址已查證）

在 `hotels[0].facilities` 每一筆新增 `url` 欄位：

| # | 活動 | 官網介紹頁（已查證存在） |
|---|---|---|
| 1 | 森之湯（大展望浴場） | `https://kariyushi-oceanspa.jp/spa/` |
| 2 | ワンダールーム（兒童遊戲室） | `https://kariyushi-oceanspa.jp/kids/` |
| 3 | かりゆしウォーターランド（水上樂園） | `https://kariyushi-beach.co.jp/activities/water_land/` |
| 4 | チャイルドチューブ（兒童拖曳圈） | `https://kariyushi-beach.co.jp/activities/child_tube/` |
| 5 | ジェットスキー（水上摩托車同乘） | `https://kariyushi-beach.co.jp/activities/jet_ski/` |
| 6 | グラスボート（玻璃底船） | `https://kariyushi-beach.co.jp/activities/glass_boat/` |
| 7 | ドラゴンボート（拖曳龍舟） | `https://kariyushi-beach.co.jp/activities/dragon_boat/` |
| 8 | 海灘用品租借 | `https://kariyushi-beach.co.jp/rental/` |

## 需求 2：餐廳加上官網連結（6 間，網址已查證）

在 `hotels[0].restaurants` 每一筆新增 `url`；有線上訂位的另外保留既有 `bookingUrl`（現在有些是共用的總訂位頁，請改成各店專屬的）：

| # | 餐廳 | 官網詳細頁 | 線上訂位頁 |
|---|---|---|---|
| 1 | THE DINING 暖琉満菜 | `https://kariyushi-oceanspa.jp/restaurant/dining/` | `https://www.tablecheck.com/shops/kariyushi-oceanspa-dining/reserve` |
| 2 | BBQガーデン CHI | `https://kariyushi-oceanspa.jp/restaurant/bbq/` | `https://www.tablecheck.com/shops/kariyushi-oceanspa-bbq/reserve` |
| 3 | やきにく 朝Cho | `https://kariyushi-oceanspa.jp/restaurant/cho/` | 無（完全預約制，且查證時仍顯示休業中） |
| 4 | サンセットテラス | `https://kariyushi-oceanspa.jp/restaurant/sunsetterrace/` | `https://www.tablecheck.com/shops/kariyushi-oceanspa-sunsetterrace/reserve` |
| 5 | バーラウンジ タイラ | `https://kariyushi-oceanspa.jp/restaurant/bar_taira/` | `https://www.tablecheck.com/shops/kariyushi-oceanspa-taira/reserve` |
| 6 | デリ&カフェ | 無獨立介紹頁，改連菜單頁 `https://kariyushi-oceanspa.jp/restaurant/delicafe-menu/` | 無 |

**注意**：目前資料裡 THE DINING 與 BBQガーデン 兩筆的 `bookingUrl` 都指向同一個 `kariyushi-oceanspa-dining/reserve`，**請依上表改成各自專屬的訂位頁**（BBQ 是 `-bbq`、サンセットテラス是 `-sunsetterrace`、タイラ是 `-taira`）。

## 需求 3：順便修正一個費用資訊（Claude 查證時發現）

森之湯的官網明確寫著 **「未就學兒童在保護者陪同下免費」**。我們家小孩出遊時 4.5 歲、屬未就學，**是免費的**；現在資料寫的「小孩¥300」其實是小學生的價格。

請把森之湯那筆的費用說明改成能反映這件事，例如：

- badge 維持 `大人¥600・小學生¥300／單次`
- rows 第一列改為 `全天票：大人¥1,000／小學生¥500（可無限次使用至隔日9:00）`
- **新增一列**：`未就學兒童由保護者陪同免費（我們家小孩 4.5 歲適用）`

## 需求 4：每個活動加上插圖（8 張，✅ 圖片已放進 `2026-okinawa/images/`）

**8 張圖已於 2026-09-02 由 Claude 處理完成並放入 `2026-okinawa/images/`，你直接用即可，不用再處理圖片本身。**
規格：900×506（16:9）、JPEG、單檔 72–115KB，8 張合計 792KB。
圖片內容已逐張放大檢查過，無文字／招牌字／商標／吉祥物（檢查結果見文末「圖片檢查結果」）。


`facilities` 每一筆新增 `photo` 欄位，形態沿用既有的**示意插圖**（`illustration: true`，右下角會顯示「示意插圖」標籤）：

```js
photo: { src: "images/hotel1-spa.jpg", alt: "大展望浴場的示意插圖", illustration: true }
```

檔名對照：

| 活動 | 檔名 |
|---|---|
| 森之湯 | `hotel1-spa.jpg` |
| ワンダールーム | `hotel1-kidsroom.jpg` |
| かりゆしウォーターランド | `hotel1-waterland.jpg` |
| チャイルドチューブ | `hotel1-childtube.jpg` |
| ジェットスキー | `hotel1-jetski.jpg` |
| グラスボート | `hotel1-glassboat.jpg` |
| ドラゴンボート | `hotel1-dragonboat.jpg` |
| 海灘用品租借 | `hotel1-rental.jpg` |

**尺寸與既有插圖不同**：這些顯示在 `.facility-card` 裡（桌機兩欄、單張約 520px 寬），不需要 1200px。請用 **900×506（16:9）、單檔 ≤130KB**，8 張合計約 1MB。`images/` 總量會從 3.5MB 增到約 4.5MB，**本規格把上限放寬到 5.5MB**。

**餐廳不用配圖**（使用者的重點是連結），若日後要補再另開規格。

## 需求 5：呈現方式

- **設施卡**：卡片內加入插圖（位置比照景點照片：說明文字之後），並在卡片底部加一個連到官網的膠囊連結，文字例如「官網介紹 →」，`target="_blank" rel="noopener"`。
- **餐廳卡**：底部同時可能有兩個連結 ——「官網介紹 →」與既有的「線上訂位 →」。兩個並排，訂位那個維持現在的樣式當主要動作，官網介紹用次要樣式（例如 `.btn-outline` 感覺或較淡的膠囊），讓兩者有主次之分。沒有訂位頁的（朝Cho、デリ&カフェ）就只顯示「官網介紹 →」。
- 沿用既有的 `renderPhoto()` 與 `.timeline-link` 等元件，不要新造樣式。
- 所有外部連結都要 `target="_blank" rel="noopener"`，並有 `title` 或 `aria-label`。

## 驗收標準

- [ ] 8 個設施各有一個連到上表網址的「官網介紹」連結，點擊開新分頁
- [ ] 6 間餐廳各有一個連到上表網址的「官網介紹」連結
- [ ] 4 間有訂位頁的餐廳，`bookingUrl` 已改成**各自專屬**的網址（不再是三間共用 dining 那一個）
- [ ] 森之湯新增了「未就學兒童免費」那一列
- [ ] 8 張插圖都在卡片內顯示，右下角有「示意插圖」標籤（等圖片到位後驗收此項）
- [ ] 插圖為 900×506、單檔 ≤130KB；`images/` 總計 ≤5.5MB
- [ ] 餐廳卡的兩個連結有主次之分，沒有訂位頁的只顯示一個連結
- [ ] 所有外部連結都是新分頁開啟、有 `rel="noopener"`、有 title/aria-label
- [ ] `hotel2.html` 未受影響
- [ ] 手機 375px 不溢出；Console 無錯誤

## 不在範圍內

- 不用改 `hotel2.html`（那間官網英文版資訊少、沒有各設施獨立頁；若之後要做另開規格）
- 不用改 Day3 頁面（`day3.html` 已經有連到 `hotel1.html` 的入口）
- 不用替餐廳配圖
- 不用重新查證費用／年齡限制（Claude 這次已順帶確認過，與現有資料相符）

---

# 附錄：給 AI 繪圖的 8 張活動插圖規格（使用者用）

風格與先前 10 張示意插圖**完全一致**，這樣整頁看起來才會是同一套。每段 prompt 直接複製即可。輸出 **16:9**（可產 1600×900，Claude 會幫忙縮成 900×506）。

**共用負面提示**：
```
text, letters, numbers, words, logo, brand, signage, watermark, photorealistic, 3d render, dark, gloomy, cluttered, heavy black outlines, frame, border
```

## ① `hotel1-spa.jpg` — 森之湯（大展望浴場）
```
Flat cartoon illustration of a large Japanese hot spring bath with a panoramic view, children's picture-book style. A wide indoor stone bath with steaming clear water, floor-to-ceiling windows looking out over green forest and a distant turquoise ocean, wooden ceiling beams, small wooden buckets and stools at the side, warm calm atmosphere, soft steam rising.
Style: flat vector cartoon, clean rounded shapes, minimal outlines, smooth gradients, bright and serene.
Colors: sky blue #3AAED8, deep blue #2A8FB8, warm yellow #FFC93C, teal green #2BA6A4, off-white #FFFDF6, warm wood tones.
Aspect ratio 16:9, 1600x900. No text, no letters, no logos, no signage, no watermarks. No people.
```

## ② `hotel1-kidsroom.jpg` — ワンダールーム（室內兒童遊戲室）
```
Flat cartoon illustration of a bright indoor wooden kids playroom, children's picture-book style. A wooden climbing structure with a small slide, a colorful ball pit, soft play mats, a little play-house corner with toy kitchen, big windows letting in sunlight, cheerful and safe atmosphere. Two small simple children playing, no detailed faces.
Style: flat vector cartoon, clean rounded shapes, minimal outlines, smooth gradients, bright and playful.
Colors: sky blue #3AAED8, warm yellow #FFC93C, orange #FF9F43, coral red #FF6B4A, teal green #2BA6A4, off-white #FFFDF6, natural wood tones.
Aspect ratio 16:9, 1600x900. No text, no letters, no logos, no signage, no watermarks.
```

## ③ `hotel1-waterland.jpg` — かりゆしウォーターランド（海上水上樂園）
```
Flat cartoon illustration of a large inflatable floating water park on a calm turquoise sea, children's picture-book style. Colorful inflatable slides, climbing walls, trampolines and obstacle platforms floating on the water, children in life jackets playing and jumping (small, simple, no detailed faces), sandy beach and palm trees in the background, sunny blue sky.
Style: flat vector cartoon, clean rounded shapes, minimal outlines, smooth gradients, bright and energetic.
Colors: sky blue #3AAED8, deep blue #2A8FB8, warm yellow #FFC93C, orange #FF9F43, coral red #FF6B4A, teal green #2BA6A4, off-white #FFFDF6.
Aspect ratio 16:9, 1600x900. No text, no letters, no logos, no signage, no watermarks.
```

## ④ `hotel1-childtube.jpg` — チャイルドチューブ（兒童拖曳圈，1-6歲）
```
Flat cartoon illustration of a small round inflatable tube being gently towed on calm turquoise water, children's picture-book style. A young child and a parent sitting together on the tube wearing orange life jackets, smiling, gentle small splashes, a small boat towing them at slow speed in the distance, sandy beach and palm trees behind, sunny sky. Calm and safe feeling, not extreme.
Style: flat vector cartoon, clean rounded shapes, minimal outlines, smooth gradients, bright and friendly. Simple faces.
Colors: sky blue #3AAED8, deep blue #2A8FB8, warm yellow #FFC93C, orange #FF9F43, teal green #2BA6A4, off-white #FFFDF6.
Aspect ratio 16:9, 1600x900. No text, no letters, no logos, no signage, no watermarks.
```

## ⑤ `hotel1-jetski.jpg` — ジェットスキー（同乘，教練駕駛）
```
Flat cartoon illustration of a jet ski riding on turquoise water, children's picture-book style. An instructor driving at the front and one passenger seated behind, both wearing life jackets, white spray behind the jet ski, sunny blue sky with fluffy clouds, sandy beach and palm trees in the far background.
Style: flat vector cartoon, clean rounded shapes, minimal outlines, smooth gradients, bright and lively. Simple faces.
Colors: sky blue #3AAED8, deep blue #2A8FB8, warm yellow #FFC93C, coral red #FF6B4A, teal green #2BA6A4, off-white #FFFDF6.
Aspect ratio 16:9, 1600x900. No text, no letters, no logos, no signage, no watermarks.
```

## ⑥ `hotel1-glassboat.jpg` — グラスボート（玻璃底船）
```
Flat cartoon illustration of a glass-bottom boat tour, children's picture-book style. Cross-section style view: a small white boat floating on turquoise water at the top, and below the waterline colorful coral reef with tropical fish, a sea turtle and starfish clearly visible through the clear water. A family looking down through the glass panel from inside the boat, small and simple figures.
Style: flat vector cartoon, clean rounded shapes, minimal outlines, smooth gradients, bright and wonder-filled.
Colors: sky blue #3AAED8, deep blue #2A8FB8, warm yellow #FFC93C, orange #FF9F43, coral red #FF6B4A, teal green #2BA6A4, off-white #FFFDF6.
Aspect ratio 16:9, 1600x900. No text, no letters, no logos, no signage, no watermarks.
```

## ⑦ `hotel1-dragonboat.jpg` — ドラゴンボート（拖曳龍舟，身高100cm以上）
```
Flat cartoon illustration of a long inflatable towable banana-style boat speeding on turquoise water, children's picture-book style. Several people sitting in a row on the long inflatable, all wearing life jackets, holding on and laughing, big white splashes, a speedboat towing them, sunny sky, beach and palm trees in the background. Fun and exciting but friendly, not scary.
Style: flat vector cartoon, clean rounded shapes, minimal outlines, smooth gradients, bright and energetic. Simple faces.
Colors: sky blue #3AAED8, deep blue #2A8FB8, warm yellow #FFC93C, orange #FF9F43, coral red #FF6B4A, off-white #FFFDF6.
Aspect ratio 16:9, 1600x900. No text, no letters, no logos, no signage, no watermarks.
```

## ⑧ `hotel1-rental.jpg` — 海灘用品租借
```
Flat cartoon illustration of a beach rental setup, children's picture-book style. Two striped beach lounge chairs under a large colorful beach parasol on golden sand, a folded stack of extra parasols and chairs beside them, a small wooden rental hut with an open counter in the background, turquoise sea and palm trees, sunny sky. Inviting and relaxed, no people.
Style: flat vector cartoon, clean rounded shapes, minimal outlines, smooth gradients, bright and cheerful.
Colors: sky blue #3AAED8, warm yellow #FFC93C, orange #FF9F43, coral red #FF6B4A, teal green #2BA6A4, off-white #FFFDF6.
Aspect ratio 16:9, 1600x900. No text, no letters, no logos, no signage, no watermarks.
```

---

## 圖片檢查結果（Claude，2026-09-02）

| 檔名 | 內容 | 檢查結果 |
|---|---|---|
| `hotel1-spa.jpg` | 木造大浴場，落地窗外森林與海 | ✅ 乾淨 |
| `hotel1-kidsroom.jpg` | 室內木製攀爬架／溜滑梯／球池／家家酒廚房 | ⚠️→✅ 原圖書架上有 `A` `B` `C` 積木字母，已把三個積木正面填回原色抹除，外框保留 |
| `hotel1-waterland.jpg` | 海上充氣樂園（滑水道、彈跳床、攀岩牆），孩子都穿救生衣 | ✅ 乾淨 |
| `hotel1-childtube.jpg` | 大人抱著小孩坐拖曳圈，前方小艇牽引 | ✅ 乾淨 |
| `hotel1-jetski.jpg` | 教練載小孩同乘水上摩托車，兩人戴安全帽穿救生衣 | ✅ 乾淨 |
| `hotel1-glassboat.jpg` | 水線剖面圖：船上一家人＋水下觀景窗，珊瑚與海龜 | ✅ 乾淨 |
| `hotel1-dragonboat.jpg` | 長條香蕉船拖曳，多人穿救生衣 | ✅ 乾淨 |
| `hotel1-rental.jpg` | 沙灘椅＋陽傘＋租借小屋（毛巾、水桶鏟子） | ✅ 乾淨。小屋前有一塊小黑板，上面只有抽象波浪線條、非可讀文字；藤籃編織紋在極高倍下略像小字，實際顯示尺寸看不出來，判定可用 |

檢查方式：逐張原圖（1376×768）全圖檢視，再對可疑區域放大 4–10 倍確認。

---

## Claude Code 實作回報（由 Claude Code 填寫）

> 本次完成需求 1（設施連結）、需求 2（餐廳連結＋訂位頁修正）、需求 3（森之湯費用）、需求 5（呈現方式）。
> **需求 4（8 張插圖）尚未做** —— 圖片還沒進 repo。但渲染端已經備好，圖片到位後**只要在 `facilities` 各筆加 `photo` 欄位即可，不用再改 JS/CSS**（已用注入測試證明，見下）。

- 異動檔案清單：
  - `2026-okinawa/data/itinerary.js`（**修改**：`hotels[0].facilities` 8 筆各加 `url`；`hotels[0].restaurants` 6 筆各加 `url`、修正／新增 4 筆 `bookingUrl`；森之湯費用文字）
  - `2026-okinawa/script.js`（**修改**：`renderFacilityCard` / `renderRestaurantCard`，新增共用的 `cardLinkHtml()` 與兩個抽出來的小函式）
  - `assets/style.css`（**新增**：`.card-links`、`.timeline-link--primary`）
  - `handoff/2026-09-02-hotel1-links-photos.md`（本回報）
  - **`hotel1.html` / `hotel2.html` 兩個 HTML 都沒有動**（連結是資料驅動的）。

- 做了什麼：
  - **需求 1**：8 個設施活動各加一個 `url`，順序與規格表格一字不差（見下方實測輸出）。
  - **需求 2**：6 間餐廳各加 `url`；訂位頁改成各店專屬 —— BBQ 由共用的 `-dining` 改成 `-bbq`，並**新增**サンセットテラス `-sunsetterrace`、バーラウンジ タイラ `-taira` 兩筆（原本資料裡這兩間根本沒有 `bookingUrl`，規格表格有，所以是新增而非修正）。THE DINING 維持 `-dining` 不變。
  - **需求 3**：badge 改成 `大人¥600・小學生¥300／單次`、全天票那列改成 `小學生¥500`，並在其正下方**新增一列**「未就學兒童由保護者陪同免費（我們家小孩4.5歲適用）」。放在全天票下面是為了讓三種價格資訊連在一起讀。
  - **需求 5**：
    - 設施卡：說明文字之後放插圖（`renderPhoto()`，`photo` 沒給就整段不輸出），最底部一個「官網介紹 →」膠囊。
    - 餐廳卡：底部 `.card-links` 一排，**「官網介紹 →」白底外框（次要）＋「線上訂位 →」實心珊瑚紅白字（主要）**；朝Cho 與 デリ＆カフェ 只有一個「官網介紹 →」。
    - 全部連結 `target="_blank" rel="noopener"`，且 `title` 與 `aria-label` 都有，內容是「在新分頁開啟「<場所名>」的官網介紹／線上訂位」。

- 14 個連結是否都實測可開啟：
  **全部實測過，18 個網址（14 個官網 ＋ 4 個訂位頁）HTTP 狀態碼都是 200**，而且我不只看狀態碼，**逐一比對了每頁的 `<title>` 確認連到的是正確的那一個**（避免站台把不存在的頁面導到首頁也回 200）：

  | 網址 | 實際頁面標題 |
  |---|---|
  | `/spa/` | スパ&ビーチ（頁內出現「森の湯」8 次，含營業時間與料金） |
  | `/kids/` | キッズ＆ベイビー（頁內出現「ワンダールーム」3 次） |
  | `/activities/water_land/` | かりゆしウォーターランド |
  | `/activities/child_tube/` | チャイルドチューブ |
  | `/activities/jet_ski/` | ジェットスキー |
  | `/activities/glass_boat/` | グラスボート |
  | `/activities/dragon_boat/` | ドラゴンボート |
  | `/rental/` | レンタル |
  | `/restaurant/dining/` | THE DINING 暖琉満菜 |
  | `/restaurant/bbq/` | B・B・Qガーデン CHI |
  | `/restaurant/cho/` | やきにく 朝(Cho) |
  | `/restaurant/sunsetterrace/` | サンセットテラス |
  | `/restaurant/bar_taira/` | バーラウンジ タイラ |
  | `/restaurant/delicafe-menu/` | デリ＆カフェ メニュー |
  | tablecheck `-dining/reserve` | THE DINING 暖琉満菜／沖縄かりゆしビーチリゾート |
  | tablecheck `-bbq/reserve` | BBQガーデンCHI／沖縄かりゆしビーチリゾート |
  | tablecheck `-sunsetterrace/reserve` | サンセットテラス／沖縄かりゆしビーチリゾート |
  | tablecheck `-taira/reserve` | バーラウンジタイラ／沖縄かりゆしビーチリゾート |

  **4 個訂位頁的標題各自對應到正確的餐廳**，可以確定不再是三間共用同一頁。

  **順帶查證了需求 3 的費用**（規格說不用重查，但我抓頁面時順手比對了）：官網原文寫的是「■宿泊のお客様【1回利用】大人：600円 小人：300円（**小学生**）【1日利用】大人：1,000円 小人：500円（**小学生**）※翌朝9:00まで何度でも利用可能」「**未就学児童は保護者同伴で無料**」。**與我們資料完全相符，而且證實「小人」確實就是「小学生」**，所以這次把「小孩」改成「小學生」是有依據的、不是只為了配合免費那一列。另外官網還有一組「外来のお客様 大人2,000円／小人1,000円」，那是**非住客**的價格，我們住這間、不適用，沒有寫進資料。

- 是否有偏離原規格（及原因）：
  1. **新增了兩個 CSS class**（`.card-links`、`.timeline-link--primary`），規格說「不要新造樣式」。原因：要做出「兩個連結並排 ＋ 主次之分」，光靠既有的 `.timeline-link` 做不到 —— 原本那個連結是用 inline style（`display:inline-block; margin-top:8px; align-self:flex-start`）硬掛上去的，兩個並排會擠在一起。我的作法是**沿用 `.timeline-link` 這個既有元件，只加一個 modifier 和一個排版容器**，沒有另造一套視覺語言；`--primary` 的配色（`background: var(--coral); color:#fff; border-color: var(--coral-deep)`）也是**直接照抄站上既有的「選中狀態」寫法**（`.chip--filter.is-active` 與 `.quick-nav .chip.is-active` 兩處一模一樣），所以視覺上是既有語彙的延伸。同時把那段 inline style 拿掉了，改由 CSS 管。
  2. **`.card-links` 裡的膠囊加大了一點**（`padding: 7px 12px`，高度 31px → 37px），因為手機上兩個連結並排、31px 偏難按。**只影響 `.card-links` 裡的，時間軸裡的 `.timeline-link` 維持原本的 `4px 10px` / 31px 沒有被動到**（day3 實測確認）。
  3. **`renderFacilityCard` / `renderRestaurantCard` 裡重複的 badges/rows 產生邏輯抽成兩個小函式**，行為完全一樣，只是不想把同一段程式碼貼第三次。

- 怎麼測試的：
  1. **資料正確性**：用 node 載入 `itinerary.js` 直接 dump `hotels[0]`，逐筆與規格表格對照 —— 8 個 `url`、6 個 `url`、4 個 `bookingUrl` 全部一致，朝Cho 與 デリ＆カフェ 的 `bookingUrl` 確實是 `undefined`。
  2. **外部連結**：curl 全部 18 個網址（跟隨轉址、帶瀏覽器 UA），比對狀態碼與 `<title>`，結果如上表。
  3. **DOM 實測**（`hotel1.html`）：設施區 `.card-links a` 共 **8 個**、餐廳區共 **10 個**（6 官網 ＋ 4 訂位）。逐一讀出每個連結的 `href` / `class` / `target` / `rel` / `aria-label` / `title`，確認 **18 個全部是 `target="_blank"` ＋ `rel="noopener"` ＋ 有 title 與 aria-label**，且 4 個訂位連結才有 `timeline-link--primary`。
  4. **主次之分實測**：主要 = `rgb(255,107,74)` 底 ＋ 白字；次要 = 白底 ＋ `rgb(255,107,74)` 字。截圖目視也很清楚。
  5. **森之湯卡片**：畫面上讀回來的四列依序是「全天票…小學生¥500」「未就學兒童由保護者陪同免費（我們家小孩4.5歲適用）」「時間…」「不需預約…」，badge 是「大人¥600・小學生¥300／單次」。
  6. **需求 4 的渲染路徑先驗過了**：在頁面上臨時給森之湯注入一個 `photo: { src, alt, illustration: true }` 再重新渲染 —— 卡片內出現 `<figure class="stop-photo">`、右下角標籤文字是 **「示意插圖」**、圖片實際載入成功，卡片內元素順序是 `title → badges → rows → stop-photo → card-links`，**與規格「位置比照景點照片：說明文字之後」一致**。測完已把注入的資料清掉，沒有進 repo。
  7. **版面**：桌機 1280px 設施仍是兩欄、卡片 513px、兩個連結同一列；手機 375px `scrollWidth === 375` **無橫向溢出**，連結最右緣 234px 遠離邊界，兩個連結仍在同一列，膠囊高 37px。
  8. **hotel2 未受影響**：3 張設施卡、2 張餐廳卡，`.card-links` 數量 **0**（因為資料沒有 `url`／`bookingUrl`），版面與之前一致。
  9. **day3.html 沒被波及**：時間軸的 `.timeline-link` 仍是 `padding: 4px 10px`、高 31px。
  10. **Console**：hotel1／hotel2／day3 皆無錯誤。

- 待確認／已知問題：
  1. **`restaurantsNote` 的文字現在有點過時**，它寫「THE DINING／BBQガーデン CHI／サンセットテラス皆可透過此系統」，但現在バーラウンジ タイラ 也有專屬訂位頁，而且每張卡片都有自己的訂位按鈕了，這句話的存在感變低。**我沒有自行改動**（那是文案，屬於你的守備範圍）。建議簡化成「各餐廳的線上訂位請直接點該餐廳卡片上的『線上訂位』；飯店代表電話：098-967-8731。」後半段的推薦文字可以留著。
  2. **主要按鈕的對比度是 2.8:1（白字 on `--coral` #FF6B4A），低於 WCAG AA 的 4.5:1。** 我沒有擅自改色，因為這個組合是站上**既有**的樣式 —— 快速導覽列的 active chip、採買頁的天數篩選 active chip 都是同一個配色，只改這裡會反而不一致。若要修，正確作法是把三處一起換成更深的珊瑚紅（`--coral-deep` #E5502E 只有 3.8:1，仍不足；要到 4.5:1 大約需要 #B8431F 這個深度），那會動到全站視覺，建議另開一份規格由你決定要不要做。
  3. **插圖（需求 4）還沒進 repo**，所以「8 張插圖顯示、右下角有示意插圖標籤」「900×506、≤130KB、images/ ≤5.5MB」這兩條驗收標準這次無法勾。圖片到位通知我後，我只需要在 `facilities` 8 筆各加一行 `photo`，不用再動 JS/CSS。目前 `images/` 是 24 個檔、3.46MB，加上 8 張 ≤130KB 約 4.5MB，仍在放寬後的 5.5MB 內。
  4. **連結順序是「官網介紹」在左、「線上訂位」在右**，照規格文字的列舉順序。若你覺得主要動作應該排前面（左邊），跟我說，改一行就好。

---

## Claude 驗收結果（Claude，2026-09-02）

驗收方式：把 `hotel1.html` / `script.js` / `data/itinerary.js` / `assets/style.css` 取回沙盒，配上 8 張新圖起本機靜態站，用 Playwright 逐張量測 DOM 與圖片載入狀態（1280 與 375 兩種寬度），不是只讀程式碼。

**需求 1／2：14 條官網連結**

- 8 個設施 + 6 間餐廳，共 14 張卡片，每張都有「官網介紹 →」，`href` 與規格表逐字比對**全部一致**，`target="_blank" rel="noopener"` 齊全。✅
- 訂位連結：DINING／BBQ／サンセットテラス／タイラ 各自指向**不同的** TableCheck 頁面，先前 DINING 與 BBQ 共用同一網址的問題已修正。✅
- 朝Cho（休業中）與デリ＆カフェ（無訂位）正確地只有「官網介紹 →」一顆。✅

**需求 3：森之湯費用更正**

- `rows` 已加入「未就學兒童由保護者陪同免費（我們家小孩 4.5 歲適用）」，徽章維持顯示小學生 ¥300。✅

**需求 4：8 張活動插圖**（Claude 直接補資料）

- `facilities` 8 筆全部加上 `photo`，8 張圖 `naturalWidth` 皆為 900、載入成功，右下角都有「示意插圖」標籤。✅
- 6 間餐廳依規格**不配圖**，確認沒有誤加。✅
- `images/` 由 3.5MB 增為約 4.3MB，在本規格放寬後的 5.5MB 上限內。✅

**需求 5：呈現方式**

- 插圖位置在說明文字之後、連結之前，沿用既有 `renderPhoto()`，沒有新造樣式。✅
- 桌機兩欄、手機單欄；圖片在卡內寬約 477px（桌機）並維持 16:9。✅

**需要調整的地方**：無。

**唯一待辦**：這批 8 張圖與 `data/itinerary.js` 的異動目前只在本機，**還沒 commit／push**。
