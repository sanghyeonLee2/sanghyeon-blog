import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const imageUrl = req.nextUrl.searchParams.get('url');
  if (!imageUrl) {
    return new Response('Missing image url', { status: 400 });
  }

  try {
    const res = await fetch(imageUrl, {
      // Notion/S3에서 리다이렉트가 있을 수 있으니 follow 처리
      redirect: 'follow',
      cache: 'no-store', // 서버 fetch 캐싱 방지
    });

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
        // Presigned URL 만료 가능성을 고려해서 캐시 기간 단축
        'Cache-Control': 'public, max-age=300, stale-while-revalidate=60',
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
