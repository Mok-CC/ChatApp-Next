import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams.get('page');
  const page = params ? parseInt(params) : 1;

  const list = await prisma.chat.findMany({
    skip: (page - 1) * 20, // 跳过多少条记录
    take: 20, // 取多少条记录
    orderBy: {
      updateTime: 'desc', // 按更新时间倒序排序
    },
  });
  return NextResponse.json({ code: 0, data: { list } });
}
