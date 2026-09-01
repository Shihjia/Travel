# Claude ↔ Claude Code 協作流程說明

這個資料夾用來讓「規劃端(Claude／Cowork)」跟「工程端(Claude Code)」之間交接功能異動，確保資料面（行程內容、itinerary.js 結構）跟畫面／工程面（HTML/CSS/JS 實作）兩邊改動不會失去同步，也留下清楚的異動紀錄，方便未來回頭查「當初這個功能為什麼這樣做」。

## 角色分工

- **Claude（Cowork，規劃端）**：負責行程研究、資料查證、內容決策、`itinerary.js` 的資料結構設計、視覺風格規範（`assets/style.css` 的 CSS 變數）維護，以及每次新功能的「需求規格文件」。
- **Claude Code（工程端）**：負責在本機直接開發／除錯／優化網頁本身，包含版面、互動、RWD、效能，並且直接 `git add / commit / push`。

## 標準流程

1. 使用者向 Claude 提出新需求（功能／頁面／資料異動）。
2. Claude 在本資料夾新增一份 `YYYY-MM-DD-短標題.md`，依照 `_TEMPLATE.md` 的格式填好「需求規格」部分（需求背景／影響範圍／資料面異動規格／畫面功能需求／驗收標準／不在範圍內）。
3. 使用者把這份檔案交給 Claude Code 執行（可以直接說「請照 handoff/xxx.md 的規格實作」）。
4. Claude Code 完成後，在**同一份檔案**下方的「Claude Code 實作回報」區塊填寫：異動了哪些檔案、做了什麼、有沒有偏離原規格（及原因）、怎麼測試的、還有什麼待確認的。
5. Claude Code commit/push 完成後，使用者告知 Claude（或 Claude 直接讀取這份檔案即可，因為連接資料夾已經涵蓋整個 repo，不用手動貼內容過來），Claude 對照「驗收標準」逐項核對，並在「Claude 驗收結果」區塊填寫核對結果、需要調整的地方。
6. 若有需要調整，重複 3-5；全部通過後把檔案最上方的狀態改成「✅ 完成」，留存作為這個網站的異動歷史紀錄，不要刪除。

## 檔案存放與命名

- 每個功能一份檔案：`handoff/YYYY-MM-DD-短標題.md`（例如 `handoff/2026-09-01-packing-list.md`）
- 已完成的檔案請保留，當作異動歷史／設計決策紀錄
- `_TEMPLATE.md` 是範本，不要直接編輯它；每次有新需求時複製一份出來建立新檔案

## 給 Claude Code 的提醒（寫在這裡，方便直接讀到）

- 動工前請先讀 `2026-okinawa/data/itinerary.js`，了解目前資料結構（`days` / `items` / `choices` / `facilities` / `restaurants` 等欄位），異動資料結構時盡量維持既有欄位相容，不要無故砍掉其他天數已經寫好的欄位或改變既有欄位的意義。
- 視覺風格請沿用 `assets/style.css` 既有的 CSS 變數與既有的 class 命名慣例（`.card` / `.timeline-item` / `.info-card` / `.day-card` / `.facility-card` 這類既有元件請重複使用，不要另外發明一套新樣式或大改配色），目前定案風格為「活潑陽光風」（晴空藍＋暖陽黃橘＋珊瑚紅）。
- `script.js` 裡已經有共用 function：`initDayMap` / `initOverviewMap` / `renderTimeline` / `loadWeather` / `renderHotelDetail` 等，新頁面請優先重複使用這些 function，不要每個頁面都重寫一份。
- 除非規格文件明確要求，不要更動其他天數／頁面已經完成的內容。
- 完成後請務必填寫「Claude Code 實作回報」區塊再 commit，不要只寫 commit message 就結束。
- 這個環境沒有真的網路可以測試 Open-Meteo／Leaflet CDN 的即時資料屬正常現象（要等實際部署到 GitHub Pages 後才會抓到真實資料），不用為此回報成 bug。
