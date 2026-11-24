import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";
import { SANITY_CONTENT_TAG } from "@/sanity/lib/live";

export async function POST(request: NextRequest) {
  const secretName = "SANITY_REVALIDATE_SECRET";
  const secret = process.env[secretName];
  if (!secret) {
    return new Response("Webhook secret is not configured", { status: 500 });
  }

  const { isValidSignature } = await parseBody(request, secret, true);
  if (!isValidSignature) {
    return new Response("Invalid signature", { status: 401 });
  }

  revalidateTag(SANITY_CONTENT_TAG, { expire: 0 });
  return NextResponse.json({ revalidated: true });
}
