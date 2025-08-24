import { NextResponse } from 'next/server';

import { NextRequest } from 'next/server';
export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get('url');
  if (!url) {
    return NextResponse.json({ error: 'Missing URL!!' }, { status: 400 });
  }
  try {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${process.env.GIT_TOKEN}`);
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };

    const resp = await fetch(url, requestOptions);
    const projects = await resp.json();

    const response = NextResponse.json(projects);
    response.headers.set('Cache-Control', 's-maxage=3600, stale-while-revalidate');

    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
  }
}
