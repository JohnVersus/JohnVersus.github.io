import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://johnversus.dev'),
  title: 'John Versus — Engineer & Builder',
  applicationName: 'John Versus',
  description:
    'Portfolio of John Versus — self-taught full-stack engineer building polished web products, developer tools, and AI-powered apps.',
  manifest: '/favicon/site.webmanifest',
  icons: {
    icon: ['/favicon/favicon-32x32.png', '/favicon/favicon-16x16.png'],
    apple: '/favicon/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'John Versus',
    url: 'https://johnversus.dev',
    title: 'John Versus — Engineer & Builder',
    description:
      'Portfolio of John Versus — self-taught full-stack engineer building polished web products, developer tools, and AI-powered apps.',
    images: [
      {
        url: 'https://i.ibb.co/hsN3QLh/image.png',
        width: 1920,
        height: 960,
        alt: "John's Profile",
      },
    ],
    locale: 'en-US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'John Versus — Engineer & Builder',
    description:
      'Portfolio of John Versus — self-taught full-stack engineer building polished web products, developer tools, and AI-powered apps.',
    images: {
      url: 'https://i.ibb.co/hsN3QLh/image.png',
      alt: "John's Profile",
    },
  },
};

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f3f1ea',
  width: 'device-width',
  initialScale: 1,
};
