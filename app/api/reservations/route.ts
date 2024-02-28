import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const { listingId, startDate, endDate, totalPrice } = body;

  if (!listingId || !startDate || !endDate || !totalPrice) {
    return NextResponse.error();
  }

  const listingAndReservation = await prisma.listing.update({
    where: {
      id: listingId,
    },
    data: {
      reservations: {
        create: {
          userId: currentUser.id,
          startDate,
          endDate,
          totalPrice,
        },
      },
    },
  });
  // 這段程式碼是使用 Prisma 進行資料庫操作,以更新資料表「listing」中的一筆資料。
  // 其中,首先透過 where 條件找到欲更新的 listing 資料列,其 id 為 listingId。
  // 在 data 中,我們對此 listing 做了以下更新:
  // 在 reservations 欄位中,新增一筆Reservation 紀錄(create)
  // 這筆紀錄的使用者id為 currentUser.id
  // 開始日期為 startDate
  // 結束日期為 endDate
  // 總價格為 totalPrice
  // 這程式碼是在 Listing 裡新增一筆與該Listing相關聯的Reservation。
  return NextResponse.json(listingAndReservation);
}
//6:43:18
//給lingClinet.tsx用axios打api
//給房屋詳細頁用
