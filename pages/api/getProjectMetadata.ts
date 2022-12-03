import { NextApiRequest, NextApiResponse } from 'next';
import jsdom from 'jsdom';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.body;
  if (!url) {
    throw new Error('Missing URL!!');
  }
  try {
    const myHeaders = new Headers();
    const requestOptions: RequestInit = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    const response = await fetch(url, requestOptions);

    const dom = new jsdom.JSDOM(await response.text());
    const title = dom.window.document.head.getElementsByTagName('title')[0].text;
    const description = (
      dom.window.document.head.querySelector('meta[name="description"]') as unknown as HTMLMetaElement
    )?.content;
    // OG Data
    const ogType = (dom.window.document.head.querySelector('meta[property="og:type"]') as unknown as HTMLMetaElement)
      ?.content;
    const ogUrl = (dom.window.document.head.querySelector('meta[property="og:url"]') as unknown as HTMLMetaElement)
      ?.content;
    const ogTitle = (dom.window.document.head.querySelector('meta[property="og:title"]') as unknown as HTMLMetaElement)
      ?.content;
    const ogDescription = (
      dom.window.document.head.querySelector('meta[property="og:description"]') as unknown as HTMLMetaElement
    )?.content;
    const ogImage = (dom.window.document.head.querySelector('meta[property="og:image"]') as unknown as HTMLMetaElement)
      ?.content;
    const ogImageAlt = (
      dom.window.document.head.querySelector('meta[property="og:image:alt"]') as unknown as HTMLMetaElement
    )?.content;

    // Twitter Data
    const twitterType = (
      dom.window.document.head.querySelector('meta[name="twitter:card"]') as unknown as HTMLMetaElement
    )?.content;
    const twitterUrl = (
      dom.window.document.head.querySelector('meta[name="twitter:site"]') as unknown as HTMLMetaElement
    )?.content;
    const twitterTitle = (
      dom.window.document.head.querySelector('meta[name="twitter:title"]') as unknown as HTMLMetaElement
    )?.content;
    const twitterDescription = (
      dom.window.document.head.querySelector('meta[name="twitter:description"]') as unknown as HTMLMetaElement
    )?.content;
    const twitterImage = (
      dom.window.document.head.querySelector('meta[name="twitter:image:src"]') as unknown as HTMLMetaElement
    )?.content;

    const metadata = {
      title,
      description,
      ogData: {
        ogType,
        ogUrl,
        ogTitle,
        ogDescription,
        ogImage,
        ogImageAlt,
      },
      twitterData: {
        twitterType,
        twitterUrl,
        twitterTitle,
        twitterDescription,
        twitterImage,
      },
    };
    res.status(200).json({ metadata });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      res.status(400).json(error.message);
    }
  }
}
