# 手機版左右留白（修正 .page-body 覆蓋掉 .container 水平內距的 bug）

- 狀態：✅ 完成（2026-09-02 Claude 驗收通過）
- 建立日期：2026-09-02
- 提出者：Claude（依使用者需求整理）

## 需求背景

使用者反映「手機看時大部份內容會被排滿，想要左右留一些白」。

**Claude 已定位到根本原因，這是一個 CSS bug，不是設計取捨問題：**

```css
.container  { max-width: var(--container); margin: 0 auto; padding: 0 20px; }   /* 第 64 行 */
...
.page-body  { padding: 22px 0 40px; }                                           /* 第 636 行 */
```

`.page-body` 用了 `padding` 簡寫，**四個方向都會被設定**，左右被寫成 `0`；而它在樣式表裡的位置比 `.container` 晚、特異度相同，所以**贏了** —— `.container` 那 20px 的水平內距被整個吃掉。

**實測（375px 總覽頁）**：`main` 的 computed `padding-left / padding-right` 都是 **0px**，`.day-card`、`.info-card`、`.map-panel`、`.section-title` 的矩形全部是 **0..375**，也就是完全貼齊螢幕兩側。

**已驗證修正有效**：在頁面上注入 `.page-body { padding-left:20px; padding-right:20px }` 之後，卡片從 `0..375` 變成 **`20..355`**，截圖確認左右都有明顯留白、版面舒服很多。

桌機看不出來，是因為 `.container` 有 `max-width: 1080px` 且置中，視窗比 1080 寬時本來就有大量留白，正好把這個 bug 蓋住了。首頁（`index.html`）用的是 `.portal-body`（只設 `margin-top`、沒有用 padding 簡寫），**沒有這個問題**，實測 `.trip-card` 是 `20..355` —— 這也反證了問題就出在 `.page-body`。

## 影響範圍

- 樣式：`assets/style.css`（`.page-body` 一行；`.hero` 內距可選微調）
- 受影響頁面：所有用 `class="container page-body"` 的頁面 —— 總覽頁、day1-6、hotel1-2、packing、shopping（共 11 頁）
- 不受影響：首頁 `index.html`（用 `.portal-body`）

---

## 需求 1：修正 `.page-body` 不要覆蓋水平內距（主要修正）

把簡寫改成只設垂直方向的長寫，讓 `.container` 繼續當「左右留白」的單一來源：

```css
.page-body {
  padding-top: 22px;
  padding-bottom: 40px;
}
```

**不要**改成 `padding: 22px 20px 40px` —— 那會把 20px 這個數值複製到第二個地方，日後只改 `.container` 會改不動，是同一個 bug 的溫床。

## 需求 2：確認每一頁都真的有留白

修正後請逐頁實測（375px），確認下列元素的左右都不再是 0：

- 總覽頁：`.info-card`（班機／飯店卡）、`.map-panel`、`.day-card`、`.section-title`
- day1-6：`.card`（天氣面板）、`.map-panel`、`.timeline`
- hotel1／hotel2：`.facility-card`
- packing：`.card`、`.check-list`
- shopping：`.facility-card`、分類標題

## 需求 3（次要，可選）：hero 內距對齊

`.hero` 目前是 `padding: 40px 22px 52px`、`.hero--compact` 是 `26px 22px 40px`，也就是 hero 文字從 **22px** 開始，而修正後的內容區塊從 **20px** 開始，兩者差 2px、視覺上會有一點點不對齊。

建議把 hero 的水平內距一併改成 **20px**，讓 hero 的標題左緣與下方卡片左緣切齊。這是純視覺對齊的微調，做不做都可以，但做了會更整齊。

## 需求 4：維持該全寬的東西全寬

修正後請確認下列元素**仍然是滿版**（它們本來就該貼邊，不要被誤改）：

- `.hero`（頁首橫幅本身要滿版，只有裡面的文字有內距）
- `.quick-nav` 吸頂列的**背景**要滿版；裡面的 `.quick-nav__inner`（本身是 `.container`）有 20px 內距，且**右側要保持可以捲出畫面**，那是「還有更多、可以橫滑」的視覺提示，不要為了留白把它改成完整收在 20px 內
- `.trip-card__cover`、`.stop-photo` 等卡片內的圖片，在各自卡片內仍是滿版（不要在卡片裡再縮一圈）

## 驗收標準

- [ ] `.page-body` 已改為只設 `padding-top` / `padding-bottom`，沒有把 20px 複製到第二處
- [ ] 375px 下，11 個頁面的主要內容區塊左右都是 **20px**（不再是 0）
- [ ] 首頁 `index.html` 維持原樣沒被改到（本來就正常）
- [ ] `.hero` 仍滿版；`.quick-nav` 背景仍滿版且導覽列仍可橫向捲動、右側仍會捲出畫面
- [ ] 桌機 1280px 的版面沒有明顯變化（本來就被 max-width 蓋住，不該有可見差異）
- [ ] 所有頁面在 375px 下仍無橫向溢出
- [ ] Console 無錯誤

## 不在範圍內

- 不用調整卡片內部的 padding（卡片自己的內距目前是舒服的）
- 不用改 `--container` 的 max-width
- 不用為手機另外做一組不同的留白數值（先用統一的 20px，使用者看過覺得還不夠再調）

## 備註：如果使用者看過覺得留白還不夠

只要改 `.container` 的 `padding: 0 20px` 一個地方就會全站生效（這正是需求 1 不要複製數值的原因）。24px 是下一個合理的級距。

---

## Claude Code 實作回報（由 Claude Code 填寫）

- 異動檔案清單：
  - `assets/style.css`（**修改**：`.page-body` 改成垂直長寫；`.hero` 與 `.hero--compact` 水平內距 22px → 20px）
  - `handoff/2026-09-02-mobile-gutter.md`（本回報）
  - **只動了 CSS，沒有動任何 HTML**。

- 做了什麼：
  - **需求 1**：`.page-body { padding: 22px 0 40px }` 改成 `padding-top: 22px; padding-bottom: 40px;`，並加註解說明「水平留白一律由 `.container` 提供，不要用 padding 簡寫」，免得日後有人又改回簡寫踩同一個坑。**沒有把 20px 複製到第二個地方**，`.container` 仍是唯一來源。
  - **需求 3 有做**：`.hero` 從 `40px 22px 52px` 改成 `40px 20px 52px`、`.hero--compact` 從 `26px 22px 40px` 改成 `26px 20px 40px`。手機 375px 實測 hero 文字左緣與卡片左緣**都是 20px，完全切齊**。
  - **首頁的 `.portal-hero` 沒動**（它在 `index.html` 頁內樣式、仍是 22px）。理由：首頁 hero 的文字是置中的，左緣對齊沒有意義；而且規格明確說首頁不受影響。若你希望數值全站統一我可以再改，但目前沒有視覺上的必要。

- 各頁面 375px 下的實測左右留白數值：

  **`main.container.page-body` 的 computed padding 全部是 `20px / 20px`**（修正前是 `0px / 0px`），各頁主要區塊的實測矩形（視窗 375px，所以 `20..355` 就代表左右各 20px）：

  | 頁面 | 實測元素與位置 |
  |---|---|
  | 總覽頁 | `.info-card` `20..355`／`.map-panel` `20..355`／`.day-card` `20..355`／`.section-title` `20..355`／`.entry-grid .day-card` `20..355` |
  | day1 | `.map-panel` `20..355`／`.timeline` `20..355`／`.section-title` `20..355` |
  | day2 | `.timeline` `20..355` |
  | day3 | `.timeline` `20..355` |
  | day4 | `.timeline` `20..355` |
  | day5 | `.timeline` `20..355` |
  | day6 | `.timeline` `20..355`／`.map-panel` `20..355` |
  | hotel1 | `.facility-card` `20..355`／`.section-title` `20..355` |
  | hotel2 | `.facility-card` `20..355` |
  | packing | `.card` `20..355`／`.check-list` `20..355` |
  | shopping | `.card` `20..355`／`.category-head` `20..355`／`.facility-card` `20..355` |

  **11 頁全部從 `0..375` 變成 `20..355`。**

  補充兩個看起來「不是 20..355」但正確的例子：
  - packing 的 `.section-title` 是 `20..125` —— 它被包在 `.checklist-head` 這個 flex 容器裡，標題只佔內容寬度，**左緣仍是 20**。
  - day1 的 `.stop-photo` 是 `96..337` —— 照片在時間軸項目的 body 裡，左邊本來就有 46px 的 icon 欄位，是卡片內部的既有縮排，不是外層留白問題。

- 是否有偏離原規格（及原因）：
  **沒有偏離。** 需求 1 照規格的長寫改法、沒有複製 20px；需求 3（可選）也做了。唯一自行判斷的是首頁 `.portal-hero` 維持 22px（理由如上）。

- 怎麼測試的：
  1. **11 個頁面逐頁實測**（375px）：每一頁都讀 `main.container.page-body` 的 computed `padding-left/right`，再量主要區塊的 `getBoundingClientRect()`。結果如上表，全部 `20px/20px`、`20..355`。
  2. **首頁未被改到**：`index.html` 的 `.portal-body` computed padding 仍是 `20px/20px`、`.trip-card` 與 `.year-row` 都是 `20..355`、`.portal-hero` 仍是 `0..375` 滿版 —— 與修正前一致。
  3. **該滿版的仍滿版**（規格需求 4）：
     - `.hero` 在總覽頁與 day1／hotel1 實測都是 **`0..375`**（滿版），只有裡面的文字有內距。
     - `.quick-nav` **背景 `0..375` 滿版**；裡面的 `.quick-nav__inner` 是 `20..355`（有 20px 內距），且 `scrollWidth > clientWidth` 為 **true** —— **右側仍會捲出畫面**，橫滑提示保留，沒有為了留白把它收進來。截圖也可見第 4 個 chip 被裁在右緣。
  4. **hero 對齊**：手機 375px 實測 `.hero__back` 的左緣 = **20**，`.info-card` 的左緣 = **20**，切齊。
  5. **桌機 1280px 沒有可見變化**：`main.container` 的 border box 是 `93..1173`（1080px 置中）、`.info-card` `113..625`，與修正前相同 —— 因為 `.container` 的 `max-width: 1080px` 本來就讓桌機有大量留白，這個 bug 在桌機看不出來，修掉後也不該有差異。唯一的 2px 差是 hero 文字左緣（22 → 20），視覺上察覺不到。
  6. **無橫向溢出**：11 頁 ＋ 首頁在 375px 下 `document.scrollWidth === 375`。
  7. **Console**：所有頁面皆無錯誤。
  8. **截圖目視**：手機版總覽頁左右留白明顯、版面明顯比之前舒服，hero 文字與卡片左緣對齊。

- 待確認／已知問題：
  1. **桌機的 hero 文字左緣（20px）與卡片左緣（113px）本來就不一樣**，因為 hero 是滿版、卡片受 `.container` 的 1080px 置中限制。這是既有設計、不是這次造成的，需求 3 講的對齊在手機才成立。若你希望桌機也把 hero 文字收進 1080px 的欄位裡對齊，那是另一種版面設計，要另開規格。
  2. **首頁 `.portal-hero` 仍是 22px**（見上）。
  3. 若使用者看過覺得 20px 還不夠，照你備註的作法改 `.container` 的 `padding: 0 20px` 一處即可全站生效 —— 這次的修正已經確保那是唯一來源，改一個地方就會全部跟著動。

---

## Claude 驗收結果（由 Claude 核對後填寫）

Playwright 在 375px 逐頁實測，**7 項全部通過 ✅**

| 頁面 | 卡片左/右留白 | 地圖左/右 | hero 滿版 | hero 文字左緣 | 導覽列背景滿版 | 橫向溢出 |
|---|---|---|---|---|---|---|
| 總覽頁 | **20 / 20** | 20 / 20 | ✅ | 20 | ✅ | 無 |
| Day1 | **20 / 20** | 20 / 20 | ✅ | 20 | － | 無 |
| 採買 | **20 / 20** | － | ✅ | 20 | － | 無 |
| 打包 | **20 / 20** | － | ✅ | 20 | － | 無 |
| hotel1 | **20 / 20** | － | ✅ | 20 | － | 無 |
| 首頁 | **20 / 20** | － | ✅ | 22（`.portal-hero` 自己的內距，置中排版不影響） | － | 無 |

- `.page-body` 已改成 `padding-top` / `padding-bottom` 長寫，**沒有把 20px 複製到第二處**，`.container` 仍是留白的單一來源。
- 需求 3（hero 內距 22→20）**有做**，所以 hero 標題左緣與下方卡片左緣現在切齊在 20px，視覺上更整齊。
- `.hero` 仍滿版、`.quick-nav` 背景仍滿版且導覽列仍可橫向捲動。
- 桌機 1280px 版面無可見變化（本來就被 max-width 蓋住）。

### 需要調整的地方：無

這個 bug 是我最初寫 CSS 時用 `padding` 簡寫造成的，感謝照規格修掉並順手把 hero 對齊一起做了。
