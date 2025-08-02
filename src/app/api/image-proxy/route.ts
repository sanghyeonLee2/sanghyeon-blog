import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const imageUrl = req.nextUrl.searchParams.get('url');
  if (!imageUrl) {
    return new Response('Missing image url', { status: 400 });
  }

  try {
    const res = await fetch(imageUrl);

    if (!res.ok) {
      console.error(`Image fetch failed: ${res.status} ${res.statusText}`);
      return new Response(`Failed to fetch image status:${res.status} text: ${res.statusText}`, {
        status: res.status,
      });
    }

    const contentType = res.headers.get('content-type') || 'image/jpeg';
    const imageBuffer = await res.arrayBuffer();

    return new Response(imageBuffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400, immutable',
        'Content-Length': imageBuffer.byteLength.toString(),
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    console.error('Unexpected error during image proxy:', error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    return new Response(`Failed to fetch image: ${errorMessage}`, { status: 500 });
  }
}
