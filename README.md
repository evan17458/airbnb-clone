# Full Stack Airbnb Clone with Next.js 13 App Router: React, Tailwind, Prisma, MongoDB, NextAuth 2023

![Copy of Fullstack Twitter Clone (8)](https://user-images.githubusercontent.com/23248726/229031522-64a49ad0-66f7-4ea8-94a8-f64a0bb56736.png)

This is a repository for a Full Stack Airbnb Clone with Next.js 13 App Router: React, Tailwind, Prisma, MongoDB, NextAuth.

[VIDEO TUTORIAL](https://youtu.be/c_-b_isI4vg)

Features:

-Tailwind 設計
-Tailwind 動畫和效果 -完全響應式 -憑證認證
-Google 認證
-Github 認證 -使用 Cloudinary CDN 上傳圖片 -使用 react-hook-form 驗證和處理表單 -使用 react-toastify 處理伺服器錯誤 -帶有 react-date-range 的日曆 -頁面加載狀態 -空頁面狀態 -預訂/訂位系統 -客人取消預訂 -業主取消預訂 -創建和刪除物業 -定價計算 -根據類別、日期範圍、地圖位置、人數、房間和衛浴數量的高級搜索演算法 -例如,如果在您要旅行的期望日期範圍內有預訂,我們將過濾掉這些物業 -最愛系統 -可共用的 URL 過濾 -例如,您可以選擇一個類別、位置和日期範圍,並可以與其他瀏覽器中的登出朋友共用 URL,他們將看到相同的結果 -如何在路由處理程序(app/api)中編寫 POST 和 DELETE 路由 -如何通過直接訪問數據庫(沒有 API!)來提取伺服器組件中的數據,就像魔法一樣! -如何處理像 error.tsx 和 loading.tsx 這樣的文件,這些是 Next 13 模板文件,用於統一加載和錯誤處理 -如何處理伺服器和子組件之間的關係!

### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/AntonioErdeljac/next13-airbnb-clone.git
```

### Install packages

```shell
npm i
```

### Setup .env file

```js
DATABASE_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_ID=
GITHUB_SECRET=
NEXTAUTH_SECRET=
```

### Setup Prisma

```shell
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command | description                              |
| :------ | :--------------------------------------- |
| `dev`   | Starts a development instance of the app |
