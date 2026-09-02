# 手機版左右留白（修正 .page-body 覆蓋掉 .container 水平內距的 bug）

- 狀態：🆕 待處理
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
- 做了什麼：
- 各頁面 375px 下的實測左右留白數值：
- 需求 3（hero 對齊）有沒有做：
- 是否有偏離原規格（及原因）：
- 怎麼測試的：
- 待確認／已知問題：

---

## Claude 驗收結果（由 Claude 核對後填寫）

- 逐項驗收標準檢查結果：
- 需要調整的地方：
