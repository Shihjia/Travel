# 其餘地點的 AI 示意插圖（10 張）

- 狀態：✅ 完成（2026-09-02 Claude 驗收通過）
- 建立日期：2026-09-02
- 提出者：Claude（依使用者需求整理）

## 需求背景

景點照片那份規格做完後，24 個地點裡有 9 個用到了 Wikimedia Commons 的免費授權實照，其餘 15 個因為 Commons 上沒有免費照片（超市、量販店、燒肉店、購物中心、飯店等），目前是純 CSS 佔位圖。使用者希望用 AI 繪製插圖把這些補起來。

15 個佔位圖裡有很多是同一個地點重複出現（飯店1 出現 4 次、飯店2 出現 3 次），**實際只需要 10 張圖**。

## ⚠️ 兩個必須遵守的前提

**一、不可以出現任何品牌識別。** 這些地點都是真實存在的連鎖店（唐吉訶德、MaxValu、BLUE SEAL、燒肉King、PARCO、IIAS、AEON），它們的 **logo、商標、吉祥物、招牌字樣、企業代表色配置都受商標權保護**，AI 畫出來一樣不能用。所以下面每一張的 prompt 都是畫「**那一類型的場所**」而不是「那一家店」——畫的是「日本的量販雜貨店內部」而不是「唐吉訶德」。每個 prompt 最後都有強制的 no logo / no signage / no brand 指令，請不要拿掉。

**二、頁面上要標示成「示意插圖」。** 因為畫的是同類型場所而不是那家店的實景，頁面必須清楚標示，不能讓人誤以為是該地點的實際照片。整合時會在圖片角落加一個「示意插圖」小標籤（作法見 Part 3）。

---

# Part 1：所有圖共用的風格規格

**每一張都要用同一套風格**，這樣整個網站看起來才會是一致的，也才能跟 Commons 的真實照片明顯區分開來。下面每個 prompt 都已經把這段包進去了，直接複製整段即可。

- 風格：扁平卡通插畫、兒童繪本感、圓潤造型、明亮愉快、極簡或無描邊、平順漸層（與 header 插圖同一個調性）
- 配色：#3AAED8 晴空藍、#2A8FB8 深藍、#FFC93C 暖陽黃、#FF9F43 橘、#FF6B4A 珊瑚紅、#2BA6A4 蒂芬妮綠、#FFFDF6 米白
- **比例 16:9，建議產出 1600×900**（最後會統一縮成 1200×675）
- 不要有任何文字、字母、數字、logo、招牌字、品牌名稱、浮水印
- 不要寫實風、不要過暗、不要細碎雜訊
- 構圖：主體置中、四周留一點餘裕（會被裁成 16:9 再縮圖）

**負面提示（有這個欄位就填）**：
```
text, letters, numbers, words, logo, brand, signage, storefront sign, mascot, watermark, signature, photorealistic, 3d render, dark, gloomy, cluttered, heavy black outlines, frame, border
```

---

# Part 2：10 張的個別 prompt

## ① `hotel1.jpg` — 飯店1（海灘度假村）
> 用於：Day1 入住、Day2 出發／返回、Day4 退房、hotel1.html 頁首（共 5 處）

```
Flat cartoon illustration of a beachfront resort hotel, children's picture-book style. A bright white multi-story resort building with balconies, tall palm trees around it, an outdoor swimming pool with sun loungers and parasols in the foreground, turquoise ocean and a sandy beach behind, sunny blue sky with fluffy white clouds. Cheerful family holiday mood.
Style: flat vector cartoon, clean rounded shapes, minimal outlines, smooth gradients, bright and airy.
Colors: sky blue #3AAED8, deep blue #2A8FB8, warm yellow #FFC93C, orange #FF9F43, coral red #FF6B4A, teal green #2BA6A4, off-white #FFFDF6.
Aspect ratio 16:9, 1600x900.
No text, no letters, no numbers, no logos, no brand names, no signage, no watermarks.
```

## ② `hotel2.jpg` — 飯店2（那霸市區飯店）
> 用於：Day4 入住、Day5 出發、Day6 退房、hotel2.html 頁首（共 4 處）

```
Flat cartoon illustration of a city hotel in a tropical Japanese town, children's picture-book style. A mid-rise hotel building with an entrance canopy, standing on a lively shopping street lined with palm trees and small shops, a small rooftop pool visible on top, warm late-afternoon light, a few tourists with suitcases walking by (small and simple, no detailed faces).
Style: flat vector cartoon, clean rounded shapes, minimal outlines, smooth gradients, bright and cheerful.
Colors: sky blue #3AAED8, deep blue #2A8FB8, warm yellow #FFC93C, orange #FF9F43, coral red #FF6B4A, teal green #2BA6A4, off-white #FFFDF6.
Aspect ratio 16:9, 1600x900.
No text, no letters, no numbers, no logos, no brand names, no signage, no watermarks.
```

## ③ `day1-icecream.jpg` — BLUE SEAL 北谷デポアイランド店（冰淇淋店）

```
Flat cartoon illustration of a cheerful tropical ice cream shop, children's picture-book style. A shop counter with a glass display case showing rows of colorful ice cream flavors, several ice cream cones with pastel scoops on top of the counter, a striped awning, palm leaves at the edges, sunny bright atmosphere.
Style: flat vector cartoon, clean rounded shapes, minimal outlines, smooth gradients, playful.
Colors: sky blue #3AAED8, warm yellow #FFC93C, orange #FF9F43, coral red #FF6B4A, teal green #2BA6A4, off-white #FFFDF6, pastel pink and mint accents.
Aspect ratio 16:9, 1600x900.
No text, no letters, no numbers, no logos, no brand names, no signage, no watermarks.
```

## ④ `day1-supermarket.jpg` — MaxValu 讀谷店（超市）

```
Flat cartoon illustration of a bright Japanese supermarket interior, children's picture-book style. A wide aisle with shelves of fresh vegetables and fruit on one side, a refrigerated deli case with bento boxes and packaged food on the other, a red shopping basket in the foreground, clean tiled floor, warm ceiling lights.
Style: flat vector cartoon, clean rounded shapes, minimal outlines, smooth gradients, bright and tidy.
Colors: sky blue #3AAED8, warm yellow #FFC93C, orange #FF9F43, coral red #FF6B4A, teal green #2BA6A4, off-white #FFFDF6.
Aspect ratio 16:9, 1600x900.
No text, no letters, no numbers, no logos, no brand names, no signage, no price tags with writing, no watermarks.
```

## ⑤ `day2-yakiniku.jpg` — 燒肉King 名護店（燒肉店）

```
Flat cartoon illustration of a cozy Japanese yakiniku restaurant table, children's picture-book style. A wooden table with a round grill in the center, thin slices of marbled beef arranged on plates, small side dishes and dipping sauces around, a little steam rising from the grill, warm wooden interior with soft hanging lamps in the background.
Style: flat vector cartoon, clean rounded shapes, minimal outlines, smooth gradients, warm and inviting.
Colors: warm yellow #FFC93C, orange #FF9F43, coral red #FF6B4A, teal green #2BA6A4, off-white #FFFDF6, warm brown wood tones.
Aspect ratio 16:9, 1600x900.
No text, no letters, no numbers, no logos, no brand names, no signage, no watermarks.
```

## ⑥ `day2-variety-store.jpg` — MEGA唐吉訶德 名護店（大型量販雜貨店）

```
Flat cartoon illustration of a busy Japanese discount variety store interior, children's picture-book style. Tall shelves packed from floor to ceiling with colorful boxed snacks, drinks, cosmetics bottles and souvenir packages, narrow aisle in the middle, a shopping basket in the foreground, bright energetic atmosphere.
Style: flat vector cartoon, clean rounded shapes, minimal outlines, smooth gradients, colorful and lively but not messy.
Colors: sky blue #3AAED8, warm yellow #FFC93C, orange #FF9F43, coral red #FF6B4A, teal green #2BA6A4, off-white #FFFDF6.
Aspect ratio 16:9, 1600x900.
No text, no letters, no numbers, no logos, no brand names, no mascot characters, no signage, no watermarks.
```

## ⑦ `day3-marine.jpg` — Day3 飯店設施＋海洋活動

```
Flat cartoon illustration of family water activities at a resort beach, children's picture-book style. A small inflatable towing tube riding on turquoise water with a splash, a glass-bottom boat nearby, colorful life jackets, a beach with parasols and sun loungers in the background, palm trees at the edge, bright sunny sky. People are small, simple and cheerful with no detailed faces.
Style: flat vector cartoon, clean rounded shapes, minimal outlines, smooth gradients, playful summer holiday mood.
Colors: sky blue #3AAED8, deep blue #2A8FB8, warm yellow #FFC93C, orange #FF9F43, coral red #FF6B4A, teal green #2BA6A4, off-white #FFFDF6.
Aspect ratio 16:9, 1600x900.
No text, no letters, no numbers, no logos, no brand names, no signage, no watermarks.
```

## ⑧ `day3-dinner.jpg` — Day3 飯店晚餐

```
Flat cartoon illustration of a resort poolside BBQ dinner terrace at sunset, children's picture-book style. An outdoor dining table with grilled meat and seafood on plates, fresh salad bowls, a grill with gentle smoke, string lights hanging overhead, a swimming pool reflecting warm orange sunset light, palm trees silhouetted against the evening sky.
Style: flat vector cartoon, clean rounded shapes, minimal outlines, smooth gradients, warm relaxed holiday evening mood.
Colors: warm yellow #FFC93C, orange #FF9F43, coral red #FF6B4A, teal green #2BA6A4, deep blue #2A8FB8, off-white #FFFDF6.
Aspect ratio 16:9, 1600x900.
No text, no letters, no numbers, no logos, no brand names, no signage, no watermarks.
```

## ⑨ `day5-mall.jpg` — PARCO City（大型購物中心）

```
Flat cartoon illustration of a large modern shopping mall interior atrium, children's picture-book style. A tall open atrium with three floors of shop fronts, criss-crossing escalators in the middle, a bright glass skylight ceiling letting sunlight in, potted plants and benches, a few small simple shopper figures with no detailed faces.
Style: flat vector cartoon, clean rounded shapes, minimal outlines, smooth gradients, bright and spacious.
Colors: sky blue #3AAED8, warm yellow #FFC93C, orange #FF9F43, coral red #FF6B4A, teal green #2BA6A4, off-white #FFFDF6.
Aspect ratio 16:9, 1600x900.
No text, no letters, no numbers, no logos, no brand names, no shop signage, no watermarks.
```

## ⑩ `day6-iias.jpg` — IIAS沖繩豐崎（購物中心＋水族館）

```
Flat cartoon illustration of a modern shopping complex with an aquarium inside, children's picture-book style. On one side a huge curved aquarium tank with colorful tropical fish and a ray swimming, glowing blue water; on the other side a bright open shopping walkway with potted palms and benches; a few small simple visitor figures looking at the tank, no detailed faces.
Style: flat vector cartoon, clean rounded shapes, minimal outlines, smooth gradients, bright and wonder-filled.
Colors: sky blue #3AAED8, deep blue #2A8FB8, warm yellow #FFC93C, coral red #FF6B4A, teal green #2BA6A4, off-white #FFFDF6.
Aspect ratio 16:9, 1600x900.
No text, no letters, no numbers, no logos, no brand names, no signage, no watermarks.
```


---

# Part 2.5：圖片檢查結果（2026-09-02）—— ✅ 10 張全部通過，已放進 repo

使用者已依 Part 2 的 prompt 產出 10 張，Claude 逐張檢查後**全部可用**，已統一處理並放進 `2026-okinawa/images/`：

| 檔名 | 主題 | 尺寸／大小 |
|---|---|---|
| `hotel1.jpg` | 海灘度假村（泳池＋沙灘＋玩沙的小孩） | 1200×675／155KB |
| `hotel2.jpg` | 那霸市區飯店（街景＋頂樓泳池＋夕陽） | 1200×675／158KB |
| `day1-icecream.jpg` | 冰淇淋店櫃檯 | 1200×675／156KB |
| `day1-supermarket.jpg` | 超市（生鮮＋便當冷藏櫃） | 1200×675／181KB |
| `day2-yakiniku.jpg` | 燒肉桌（中央烤爐＋牛肉片） | 1200×675／99KB |
| `day2-variety-store.jpg` | 量販雜貨店貨架走道 | 1200×675／191KB |
| `day3-marine.jpg` | 海洋活動（拖曳圈＋玻璃底船） | 1200×675／132KB |
| `day3-dinner.jpg` | 泳池畔BBQ晚餐（夕陽＋串燈） | 1200×675／137KB |
| `day5-mall.jpg` | 購物中心中庭（電扶梯＋天窗） | 1200×675／166KB |
| `day6-iias.jpg` | 購物中心＋大型水族箱 | 1200×675／171KB |

**10 張合計 1.51MB**；加上原有的照片與 header 插圖，`images/` 總計約 3.4MB（規格上限 4MB）。

## 檢查與處理內容

- **尺寸**：原圖都是 1376×768（1.792），已置中裁成精準 16:9 再縮到 1200×675，全部壓在 200KB 以內。**Claude Code 不用再處理尺寸或壓縮。**
- **品牌識別**：10 張都沒有出現任何 logo、吉祥物或企業識別，符合規格。
- **文字檢查（逐張放大檢視）**：9 張乾淨。**`hotel2` 原圖右側有一塊店招寫著「ぬうどん」**（而且是拼錯的 うどん），已由 Claude 用該招牌的米色填平成空白招牌，外框完整、看起來就是一塊還沒上字的招牌。**放進 repo 的是修正後的版本。**
- 已另外確認：量販店貨架的包裝標籤、超市便當標籤、購物中心店面、冰淇淋店的menu板，都只是抽象色塊沒有可辨識文字。
- **風格一致性**：10 張都是扁平卡通、圓潤造型、配色與 header 插圖同一調性，與 Commons 的真實照片放在一起能明顯區分。

---

# Part 3：圖片到位後的整合規格（給 Claude Code）

## 檔名與對應位置

圖片**已在** `2026-okinawa/images/`（已裁切壓縮完成，不用再處理），檔名如上（`hotel1.jpg`／`hotel2.jpg`／`day1-icecream.jpg`／`day1-supermarket.jpg`／`day2-yakiniku.jpg`／`day2-variety-store.jpg`／`day3-marine.jpg`／`day3-dinner.jpg`／`day5-mall.jpg`／`day6-iias.jpg`）。

| 圖 | 要換掉佔位圖的位置 |
|---|---|
| `hotel1.jpg` | Day1「入住…度假村」、Day2「…度假村（出發）」、Day2「返回…度假村」、Day4「…度假村（退房）」、`hotel1.html` 頁首 |
| `hotel2.jpg` | Day4「入住那霸棕櫚皇家度假飯店」、Day5「那霸棕櫚皇家度假飯店」、Day6「那霸棕櫚皇家度假飯店」、`hotel2.html` 頁首 |
| `day1-icecream.jpg` | Day1 BLUE SEAL 北谷デポアイランド店 |
| `day1-supermarket.jpg` | Day1 MaxValu 讀谷店 |
| `day2-yakiniku.jpg` | Day2 燒肉King 名護店 |
| `day2-variety-store.jpg` | Day2 MEGA唐吉訶德 名護店 |
| `day3-marine.jpg` | Day3 飯店設施＋海洋活動自由選 |
| `day3-dinner.jpg` | Day3 飯店晚餐 |
| `day5-mall.jpg` | Day5 PARCO City |
| `day6-iias.jpg` | Day6 IIAS沖繩豐崎 |

## 資料結構

`photo` 欄位新增第三種形態 —— **示意插圖**（既有的「實照」與「佔位圖」兩種不變）：

```js
photo: {
  src: "images/day2-yakiniku.jpg",
  alt: "燒肉店的示意插圖：桌上的烤爐與牛肉片",
  illustration: true          // 新增：標記為示意插圖，不是該地點的實際照片
}
```

## 渲染要求

- `renderPhoto()` 新增這一種形態的處理：**照片右下角顯示一個「示意插圖」小標籤**（樣式比照現有的授權標示：11px、半透明白底、圓角），取代實照的「照片：作者 / 授權」那一行。
- 這一點是**必要的**，不是裝飾：這些圖畫的是同類型場所而不是該店實景，一定要讓使用者看得出來。
- 實照的授權標示、佔位圖的呈現方式都維持原樣不動。
- 尺寸已處理完畢（1200×675／≤200KB），**不用再裁切或壓縮**；渲染時比照現有流程加 `loading="lazy"`＋明確 width/height。
- 換上插圖後，`images/` 資料夾總大小會從約 1.8MB 增加，**請控制在 4MB 以內**。

## 驗收標準

- [ ] 10 張插圖都在 `2026-okinawa/images/`，各為 1200×675、≤200KB
- [ ] 對照表上的 14 個位置（含兩個飯店詳情頁）全部從佔位圖換成插圖
- [ ] 每張插圖右下角都有「示意插圖」標籤
- [ ] 實照的授權標示未受影響（仍是 9 張＋採買頁 5 張，格式不變）
- [ ] 仍有佔位圖的地方（如果還有）呈現方式不變
- [ ] `images/` 總大小 ≤4MB
- [ ] 手機 375px 不溢出、比例不變形；6 天頁面與兩個飯店頁 Console 無錯誤

## 不在範圍內

- 不用處理採買推薦頁的 31 項商品插圖（那是可選的第二批，等使用者決定要不要做）
- 不用改實照與佔位圖的既有呈現
- 不用做圖片放大檢視

---

# Part 4：採買推薦頁的商品插圖（可選，第二批）

採買頁目前只有 5 項有實照，其餘 31 項沒有照片區塊（依使用者指示「只有實照才顯示」）。如果之後想補，用同一套風格規格即可，prompt 模式是：

```
Flat cartoon illustration of <商品類型>, children's picture-book style, product shown on a simple light background or on a shop shelf. <外觀描述>.
Style: flat vector cartoon, clean rounded shapes, minimal outlines, smooth gradients, bright and appetizing.
Colors: sky blue #3AAED8, warm yellow #FFC93C, orange #FF9F43, coral red #FF6B4A, teal green #2BA6A4, off-white #FFFDF6.
Aspect ratio 16:9, 1600x900.
No text, no letters, no numbers, no logos, no brand names, no packaging text, no watermarks.
```

**但這批的品牌問題更嚴重**：像「LuLuLun 面膜」「EVE 止痛藥」「KitKat 紅芋口味」這種指名品牌的商品，畫出來只能是「一盒面膜」「一板藥錠」「一條巧克力威化」這種通用外觀，跟實際商品長得不一樣，實用性有限。**建議優先做通用品項**（紅芋塔、金楚糕、黑糖、沖繩麵、雪鹽、風獅爺、琉球玻璃、泡盛這類），指名品牌的就留白等實際買到再自己拍。

---

## Claude Code 實作回報（由 Claude Code 填寫）

- 異動檔案清單：
  - `2026-okinawa/data/itinerary.js`（**修改**：17 處 `photo` 從佔位圖改成示意插圖）
  - `2026-okinawa/script.js`（**修改**：`renderPhoto()` 新增示意插圖形態）
  - `assets/style.css`（**修改**：新增 `.stop-photo__tag`）
  - `handoff/2026-09-02-stop-illustrations.md`（本回報）
  - 10 張插圖沿用你已放進 repo 的檔案，**沒有重新裁切或壓縮**（實測本來就是 1200×675／≤200KB）。

- 做了什麼：
  - **資料**：把 `days` 內 15 處與 `hotels` 內 2 處的佔位圖改成 `{ src, alt, illustration: true }`。替換用腳本進行，每一筆都先斷言「上一行的 `title` 等於對照表上的地點名」才寫入，跑完再反向驗證一次，避免插錯位置。
  - **渲染**：`renderPhoto()` 現在有三條路徑 —— 實照（授權標示）／示意插圖（「示意插圖」標籤）／佔位圖（CSS 漸層）。示意插圖與實照共用同一個 `.stop-photo` 版型與 `.stop-photo__credit` 的位置與尺寸，只是換成不可點擊的 `<span class="stop-photo__tag">`，所以視覺上一致但語意正確（標籤不是連結）。
  - **實照與佔位圖的路徑完全沒動**：實照仍然輸出「照片：作者 / 授權」的連結，佔位圖的 CSS 漸層邏輯原封不動保留（雖然 `days` 裡已經沒有佔位圖了，但採買頁的 31 項商品資料仍是 `placeholder: true`，那條路徑還在用）。
  - **alt 文字**：每張都寫成「◯◯的示意插圖：⋯⋯」的格式，讀螢幕軟體也聽得出這是示意圖而不是實景。

- 是否有偏離原規格（及原因）：
  1. **實際替換的是 17 處，不是 14 處**。你在交辦訊息裡說「14 個位置（含兩個飯店詳情頁）」，但 Part 3 的對照表本身列的是 —— `hotel1.jpg` 5 處（Day1 入住／Day2 出發／Day2 返回／Day4 退房／`hotel1.html`）＋ `hotel2.jpg` 4 處（Day4 入住／Day5／Day6／`hotel2.html`）＋ 其餘 8 張各 1 處 = **17 處**。我是照對照表做的，替換後 `days` 內的佔位圖歸零。如果 14 這個數字背後有我沒看到的取捨（例如某幾處你其實想維持佔位圖），跟我說我再調回來。
  2. 其餘完全照規格，沒有其他偏離。

- 怎麼測試的：
  1. **圖檔規格**：10 張逐一量測 —— 全部 **1200×675**、**99.3～191.0 KB**（皆 ≤200KB），合計 **1.51MB**。`images/` 資料夾總計 **3.46MB**（規格上限 4MB）。
  2. **資料層驗證**（腳本掃過 `itinerary.js`）：
     - 24 個 stop = **實照 9 ／示意插圖 15 ／佔位圖 0**。
     - 兩間 hotel 都是插圖（`images/hotel1.jpg`／`images/hotel2.jpg`）。
     - 每張插圖的引用次數：`hotel1.jpg` **4 次**、`hotel2.jpg` **3 次**、其餘 8 張各 1 次 —— 與對照表完全吻合。
     - 檢查沒有任何插圖誤帶 `credit` 或 `placeholder` 欄位、沒有缺 `src`／`alt`；實照的三個授權欄位仍然完整。
     - **採買推薦頁的 5 張實照未受影響**（仍是 5 張）。
  3. **渲染驗證**：
     - Day2（4 插圖＋1 實照）：`.stop-photo` 5 個、佔位圖 **0** 個、`示意插圖` 標籤 **4** 個、授權標示 **1** 個（「照片：Megapixie / Public domain」），5 個圖檔 HTTP 全部 **200**，全部 `loading="lazy"` 且 `width="1200" height="675"`，標籤確認是 `<span>` 不是連結。
     - Day3：2 張插圖、2 個標籤、0 佔位圖。Day6：3 張（2 插圖＋1 實照）、2 個標籤、1 個授權標示。
     - `hotel1.html`／`hotel2.html` 頁首都正確顯示對應插圖並帶「示意插圖」標籤。
     - 截圖目視確認：插圖是扁平卡通風、與旁邊的水族館實照放在一起**一眼就能分辨**，「示意插圖」標籤在右下角、不搶版面。
  4. **手機 375px**：`document.scrollWidth === 375` **無橫向溢出**；照片長寬比實測 **1.778**（精準 16:9、沒有變形）；標籤全部落在照片框內；標籤字級 11px。
  5. **Console**：day2／day3／day6／hotel1／hotel2 全部無錯誤。

- 待確認／已知問題：
  1. **17 vs 14 的數字差異**（見「偏離原規格」第 1 點），請你核對一下是不是我理解的那樣。
  2. **`hotel1.jpg` 在 Day1／Day2／Day4 會重複出現 4 次**（Day2 甚至同一頁出現兩次：出發與返回）。這是對照表指定的作法，同一間飯店本來就該用同一張圖，只是同一頁看到兩張一樣的圖可能會有點單調。若你想讓「返回飯店」那類項目不顯示圖，改成拿掉 `photo` 欄位即可（`renderPhoto()` 收到空值就不輸出任何東西），但那會讓時間軸看起來不整齊，我沒有自行更動。
  3. **`days` 內已經沒有任何佔位圖**，所以佔位圖那條渲染路徑現在只剩採買推薦頁的資料在用（那頁依先前規格「只有實照才顯示照片區」，實際上也不會渲染出來）。程式碼我保留著沒刪，之後新增地點時仍可用。

---

## Claude 驗收結果（由 Claude 核對後填寫）

**7 項全部通過 ✅**

| 驗收項目 | 結果 | 實測 |
|---|---|---|
| 10 張插圖都在、尺寸合規 | ✅ | 檔案齊全，1200×675／≤200KB（Claude 交付前已處理） |
| 14 個位置換成插圖 | ✅ | `illustration: true` 實測 **17 筆** —— 即 hotel1 ×5、hotel2 ×4、其餘 8 個地點各 1，正好對應對照表（同一張圖用在多處） |
| 每張插圖有「示意插圖」標籤 | ✅ | day1 3 個、day3 2 個、hotel1 1 個，與該頁插圖數一致 |
| 實照授權標示未受影響 | ✅ | `sourceUrl` 仍 **14 筆**（9 景點＋5 商品），day1 頁面 4 個授權標示 |
| 仍是佔位圖的地方不變 | ✅ | `placeholder: true` 仍 **31 筆**（採買頁未附實照的商品），未被誤動 |
| `images/` ≤4MB | ✅ | **3.5MB** |
| Console 無錯誤 | ✅ | day1／day3／hotel1 皆無 |

另外用檔名對照驗過：`itinerary.js` 引用的每一個 `images/*.jpg` 在資料夾裡都存在，**沒有斷圖**；唯一「存在但未被 itinerary.js 引用」的是 `hero-okinawa.jpg`，那是由 CSS 引用的，正常。

### 插圖內容檢查（是否誤含品牌／文字）：交付前已完成 ✅

10 張是 Claude 在交付前就逐張放大檢查過的：無任何 logo／吉祥物／企業識別；9 張無文字，`hotel2` 原圖右側店招上的「ぬうどん」（拼錯的 うどん）已由 Claude 用招牌米色填平成空白招牌後才放進 repo。

### 需要調整的地方：無
