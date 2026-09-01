# 行程 header 插圖（AI 生成）

- 狀態：⏸ 第一版已檢查、需重新生成（見 Part 1.5）；新版圖片到位後改為 🆕 待處理
- 建立日期：2026-09-01
- 提出者：Claude（依使用者需求整理）

## 需求背景

使用者想用 AI 生成一張插圖，放在沖繩行程的 header，並且同一張圖也用在首頁 `index.html` 行程卡片的封面（目前是純色漸層）。重點要求是**不能遮到文字**。

**流程**：使用者依下方「Part 1」的規格去生圖 → 把圖傳給 Claude → Claude 檢查尺寸與安全區是否符合 → 圖片放進 repo 後，本文件狀態改為 🆕 待處理，Claude Code 依「Part 3」整合。

---

# Part 1：給 AI 繪圖工具的規格（使用者用）

## 實際版面量測（生圖前必讀，安全區就是從這裡推導出來的）

| 用途 | 桌機尺寸 | 手機尺寸 | 比例 |
|---|---|---|---|
| 行程總覽頁 header | 1280 × 269 | 375 × 269 | 桌機 4.75:1、**手機只有 1.39:1** |
| 首頁行程卡封面 | 401 × 150 | 同左 | 2.67:1 |

兩個位置、兩種裝置的比例差很多，圖片是用 `cover` 方式填滿（會等比放大後裁掉超出的部分），所以：

- **桌機 header** 會把圖的**上下**裁掉很多 → 重要元素不能放在最上緣或最下緣
- **手機 header** 會把圖的**左右**裁掉很多（只留中間約 60%）→ 重要元素不能放在最左邊或最右邊
- 兩者交集 → **所有想被看到的東西，都要放在畫面的正中央區域（中央 60% 寬 × 中央 55% 高）**

## 安全區規則（最重要的三條）

1. **文字區（左半邊要留白）**：header 的文字（返回連結、「2026 年度行程」、大標題「沖繩親子自由行」、日期）全部是**白色、靠左對齊**，佔畫面左半邊。所以圖的**左側 45% 只能是單純的天空／海面漸層**，不要放細節元素，而且顏色要夠飽和或偏中深色調，白字才看得清楚。
2. **左下角要乾淨**：首頁行程卡封面的左下角有一個「10/20 - 10/25」的白色日期標籤（距左 14px、距下 14px、約 101×31px）。圖的**左下角約 30% 寬 × 35% 高**保持乾淨。
3. **不要有文字**：圖裡不可以出現任何文字、字母、數字、logo、浮水印 —— 網站自己會疊白色文字上去，圖上再有字會打架。

## 建議構圖

**不要**畫成「中央一個大主體」的構圖（手機一裁就變成只剩那個主體的一半）。請畫成**橫向連續的海景帶狀構圖** —— 像一條展開的風景長卷，元素平均分佈，從哪裡裁都成立。左側空、中間到右側可以稍微熱鬧一點。

## 輸出規格

- **尺寸：2400 × 1000 px**（2.4:1）。如果工具只能選固定比例，請選**最寬的橫幅選項**（16:9 也可以），並告訴 Claude 你實際產出的尺寸。
- 格式：PNG 或 JPG 皆可
- 不要加邊框、不要圓角、不要陰影（網站自己會處理）

## 可直接複製貼上的英文 prompt

```
A wide panoramic flat vector illustration of a sunny Okinawa seaside scene, children's picture-book style.

Composition: a continuous horizontal landscape band, elements evenly distributed across the full width, no single large central subject. The left 45% is calm open sky and sea with smooth gradients and no detail. The middle and right side has gentle visual interest.

Scene elements: turquoise ocean with soft white foam waves, a few small green islands on the horizon, fluffy rounded white clouds, a warm yellow sun, silhouettes of palm trees, a cute rounded shisa lion-dog statue on a rock, a friendly whale shark swimming near the surface, a small airplane flying in the sky, a red-tiled Ryukyu roof in the distance.

Style: flat vector illustration, rounded soft shapes, cheerful and playful, family-friendly, minimal or no outlines, smooth gradients, clean and uncluttered, plenty of negative space in the sky.

Color palette (use these exact colors): sky blue #3AAED8, deep blue #2A8FB8, warm yellow #FFC93C, orange #FF9F43, coral red #FF6B4A, teal green #2BA6A4, off-white #FFFDF6.

Aspect ratio 2.4:1, 2400x1000 pixels.

Important: absolutely no text, no letters, no numbers, no logos, no watermarks. Keep the left side and the bottom-left corner simple and uncluttered. Medium to deep tones so white text placed on the left will stay readable. No photorealism, no dark heavy areas, no busy fine detail.
```

## 負面提示（如果你的工具有 negative prompt 欄位）

```
text, letters, numbers, words, logo, watermark, signature, photorealistic, 3d render, dark, gloomy, cluttered, busy detail, heavy black outlines, human faces, realistic people, frame, border, vignette
```

## 中文版說明（如果你用的是中文介面的工具）

一張橫幅的沖繩晴天海景**扁平向量插畫**，兒童繪本風格。橫向連續的風景帶狀構圖，元素平均分布、沒有單一大主體。左側 45% 是單純的天空與海面漸層、不放細節。畫面包含：綠松色海面與白色浪花、遠處幾座小綠島、蓬鬆圓潤的白雲、暖黃色太陽、椰子樹剪影、圓潤可愛的風獅爺石像、靠近海面的鯨鯊、天空中的小飛機、遠方的琉球紅瓦屋頂。風格：扁平向量、圓潤造型、活潑愉快、親子友善、無或極細描邊、平順漸層、天空留白多。配色請使用：#3AAED8 晴空藍、#2A8FB8 深藍、#FFC93C 暖陽黃、#FF9F43 橘、#FF6B4A 珊瑚紅、#2BA6A4 蒂芬妮綠、#FFFDF6 米白。比例 2.4:1，2400×1000 像素。**絕對不要有任何文字、字母、數字、logo、浮水印**；左側與左下角保持乾淨；整體中深色調讓白色文字放上去仍清楚；不要寫實風、不要過暗、不要過多細碎細節。


---

# Part 1.5：第一版圖片檢查結果（2026-09-01）

使用者已產出第一版（1584×672，2.36:1，257KB）。Claude 已把圖實際套進 header 版面用 Playwright 模擬並截圖檢查，**結論：構圖需要修正後重新生成，不建議直接使用。**

## 通過的部分
- 尺寸比例 2.36:1、檔案大小都符合規格
- 風格、配色、元素（琉球紅瓦屋、風獅爺、鯨鯊、椰子樹、小飛機、玩沙的小孩）都很貼切，畫面討喜
- 構圖確實是橫向連續的帶狀風景，不是單一大主體 ✓

## 不通過的部分
1. **左右配置相反（主要問題）**：畫面最熱鬧、最亮的區塊（紅瓦屋、石牆、兩隻風獅爺、草地）全部集中在**左側**，而 header 的白色文字正好疊在那裡 → 實測「沖繩親子自由行」壓在紅瓦屋頂上幾乎看不清楚。規格要求的是**左側 45% 保持單純**。
2. **圖上有文字**：飛機機身有 `OKI-AIR`、小船旗子上有 `okinowa`（而且是拼錯的 okinawa）。規格明確要求不可有任何文字。
3. 左下角（首頁行程卡日期標籤位置）被風獅爺與植栽占滿，不夠乾淨。

## 已測試過的補救方式與結論
- **左右鏡像 ＋ 左側深色遮罩**：文字可讀性可以解決，但飛機上的 `OKI-AIR` 會變成反字、旗子文字也會反過來，反而更明顯。
- **直接把文字塗掉**：旗子的字可以乾淨移除；但飛機機身的字夾在窗框、門線、機身輪廓之間，用色塊覆蓋一定會破壞機身結構（已實測），需要真正的 inpainting 才處理得掉。
- 結論：**重新生成一版**最省事，把左右配置對調並強調不要文字即可，其餘維持原樣。

## 修正後的英文 prompt（第二版，請用這個重生）

```
A wide panoramic flat cartoon illustration of a sunny Okinawa seaside scene, children's picture-book style.

IMPORTANT COMPOSITION RULE: the LEFT HALF of the image must be open, calm and simple - just sea and sky with smooth gradients, gentle waves and a few small clouds, no buildings and no detailed objects. All the detailed scenery must be placed on the RIGHT SIDE: traditional Okinawan houses with red tile roofs, stone walls, palm trees, lush green plants, and two cute rounded shisa lion-dog guardian statues.

Middle of the image: turquoise ocean with soft white foam waves, a friendly smiling whale shark swimming near the surface, a small wooden boat, a curved sandy beach.

Sky: soft blue with fluffy rounded white clouds and a small cheerful sun in the upper right. A small airplane may appear in the upper right area.

Style: flat cartoon vector illustration, clean rounded shapes, cheerful, playful, family-friendly, bright and airy.

Color palette: sky blue #3AAED8, deep blue #2A8FB8, turquoise sea, warm yellow #FFC93C, orange #FF9F43, coral red #FF6B4A, teal green #2BA6A4.

Aspect ratio 2.4:1, 2400x1000 pixels.

CRITICAL: absolutely NO text anywhere in the image. No letters, no words, no numbers, no logos, no watermarks, no signage. The airplane fuselage must be completely blank with no lettering. Any flag must be plain with no writing on it. Keep the left half and the bottom-left corner clean and uncluttered. Use medium to deep tones on the left half so that white text placed there stays readable.
```

負面提示（negative prompt）：
```
text, letters, words, numbers, logo, watermark, signature, lettering on aircraft, writing on flag, signage, photorealistic, 3d render, dark, gloomy, cluttered left side, buildings on the left, busy detail on the left, human faces close up, frame, border, vignette
```

## 若不想重生圖的替代做法（備案）
把第一版當作「純背景」使用：讓 header 的插圖只顯示在**右半邊**（`background-position: right center` 搭配較窄的顯示區），左半邊維持原本的藍色漸層，兩者用漸層接合。這樣不用改圖，但插圖只會露出約一半。若使用者選這個做法，再另外通知 Claude Code 調整。

---

# Part 2：Claude 收到圖片後的檢查項目

- [ ] 實際尺寸與比例（是否夠寬、是否需要請 Claude Code 調整 `object-position`）
- [ ] 左側 45% 是否夠單純、白色文字疊上去是否可讀（必要時建議加深色漸層遮罩）
- [ ] 左下角是否乾淨（首頁日期標籤位置）
- [ ] 中央 60% × 55% 是否包含主要視覺元素（手機裁切後仍成立）
- [ ] 圖上是否誤含文字／浮水印
- [ ] 檔案大小（超過 300KB 要請 Claude Code 壓縮）

---

# Part 3：整合規格（圖片到位後給 Claude Code）

> 圖片尚未提供，以下先寫好，等使用者的圖進 repo 後本文件狀態改為 🆕 待處理。

## 影響範圍

- 頁面：`2026-okinawa/index.html`（行程總覽頁 hero）、`index.html`（首頁行程卡封面）
- 樣式：`assets/style.css`
- 新增：`2026-okinawa/images/hero-okinawa.jpg`（實際檔名以放進 repo 的為準）

## 要求

1. **行程總覽頁 hero**：把 `.hero` 的背景從純漸層改成「插圖 ＋ 疊在上面的漸層遮罩」。
   - `background-image: linear-gradient(90deg, rgba(30,90,117,0.55) 0%, rgba(30,90,117,0.15) 55%, rgba(30,90,117,0) 100%), url(images/hero-okinawa.jpg);`（遮罩數值可依實際圖片微調，目的是讓左側白字清楚）
   - `background-size: cover; background-position: center;`
   - **只套用在行程總覽頁的 hero**，day 頁面與其他頁面維持原本的漸層（day 頁面右上角要放天氣，見 `2026-09-01-ui-refinements.md`）。
2. **首頁行程卡封面**：`.trip-card__cover` 的漸層改成同一張圖，`background-size: cover; background-position: center;`。日期 chip 維持在左下角，確認在圖上仍然清楚（必要時給 chip 加一點陰影或提高不透明度）。
3. **圖片最佳化**：壓到寬度 2400px 以內、單檔 **300KB 以內**（JPEG 品質 80 左右）。這張圖每頁都會載入，大小很有感。
4. **可讀性實測**：桌機 1280px 與手機 375px 都要實際看過，確認 header 的白色文字（返回連結、eyebrow、大標題、日期）在圖上都清楚可讀，沒有任何一段文字糊在圖的亮處。

## 驗收標準

- [ ] 總覽頁 hero 顯示插圖，白色文字在桌機與手機都清楚可讀
- [ ] 首頁行程卡封面顯示同一張圖，左下角日期標籤清楚不被圖案干擾
- [ ] day 頁面與其他頁面的 hero **維持原漸層沒有被改到**
- [ ] 圖片檔 ≤ 300KB，寬度 ≤ 2400px
- [ ] 手機 375px 下圖片裁切後主要視覺元素仍在畫面內、不變形
- [ ] 全站 Console 無錯誤

## 不在範圍內

- 不用做視差捲動或動畫效果
- 不用替 day 頁面各自產生不同插圖
- 不用改 hero 內的文字內容或排版結構

---

## Claude Code 實作回報（由 Claude Code 填寫）

- 異動檔案清單：
- 做了什麼：
- 遮罩實際使用的數值與原因：
- 是否有偏離原規格（及原因）：
- 怎麼測試的：
- 待確認／已知問題：

---

## Claude 驗收結果（由 Claude 核對後填寫）

- 逐項驗收標準檢查結果：
- 文字可讀性實測：
- 需要調整的地方：
