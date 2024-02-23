import { PrismaClient } from "@prisma/client";
// 定義一個全局變數 prisma，類型為 PrismaClient 或 undefined
declare global {
  var prisma: PrismaClient | undefined;
}
// 檢查是否存在全局變數 prisma，如果存在則使用，否則創建新的 PrismaClient 實例
//globalThis.prisma 用於獲取全局變量 prisma。如果 prisma 已經存在於全局對象中，
// 則直接使用它。否則，創建一個新的 PrismaClient 實例。
// 這樣做的目的是確保整個應用程序中只使用一個 PrismaClient 實例。
// 總的來說，globalThis 是一個新的全局對象，它可以兼容不同的執行環境，方便地訪問全局對象。
const client = globalThis.prisma || new PrismaClient();
// 如果不是生產環境，則將新創建的 PrismaClient 實例賦值給全局變數 prisma
if (process.env.NODE_ENV !== "production") globalThis.prisma = client;
// 導出 client 實例
export default client;
//1:53:11
