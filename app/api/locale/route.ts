import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // Example: Receive the `locale` via a search param
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get("locale");

  return NextResponse.json(locale);
}
