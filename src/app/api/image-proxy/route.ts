import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const imageUrl = req.nextUrl.searchParams.get('url');
  if (!imageUrl) {
    return new Response('Missing image url', { status: 400 });
  }

  try {
    const res = await fetch(imageUrl, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
      },
    });

    if (!res.ok) {
      console.error(`Image fetch failed: ${res.status} ${res.statusText}`);
      return new Response('Failed to fetch image', { status: res.status });
    }

    const contentType = res.headers.get('content-type') || 'image/jpeg';
    const imageBuffer = await res.arrayBuffer();

    return new Response(imageBuffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400, immutable', // 하루 캐싱
        'Content-Length': imageBuffer.byteLength.toString(), // 명시적으로 설정 (성능 향상)
        'Access-Control-Allow-Origin': '*', // 필요 시 외부 접근 허용
      },
    });
  } catch (error) {
    console.error('Unexpected error during image proxy:', error);
    return new Response('Failed to fetch image', { status: 500 });
  }
}
