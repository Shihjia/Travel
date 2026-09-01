# 各景點實際照片（含免費授權圖片取得規則）

- 狀態：🆕 待處理
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
- 做了什麼：
- 實際找到幾張 Commons 實照、幾個用佔位圖（請列出對照表）：
- 是否有偏離原規格（及原因）：
- 怎麼測試的：
- 待確認／已知問題：

---

## Claude 驗收結果（由 Claude 核對後填寫）

- 逐項驗收標準檢查結果：
- 授權資訊完整性抽查：
- 需要調整的地方：
