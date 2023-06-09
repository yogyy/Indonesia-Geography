import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  console.log(request.nextUrl.searchParams.get('name'));
  const query = request.nextUrl.searchParams.get('name');
  const res = await fetch(`https://api.wilayah-nusantara.id/kabupaten?name=${query}`);
  const data = await res.json();

  return NextResponse.json({ data });
}
