import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "John's Profile",
  colorScheme: 'dark',
  applicationName: "John's Profile",
  description: 'This is my profile data of what I do, my past work, contact info etc..',
  manifest: '/favicon/site.webmanifest',
  icons: { icon: ['/favicon/favicon-32x32.png', '/favicon/favicon-16x16.png'], apple: '/favicon/apple-touch-icon.png' },
  openGraph: {
    type: 'website',
    siteName: "John's Profile",
    url: 'https://johnversus.dev',
    title: "John's Profile",
    description: 'This is my profile data of what I do, my past work, contact info etc..',
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
    title: "John's Profile",
    description: 'This is my profile data of what I do, my past work, contact info etc..',
    images: {
      url: 'https://i.ibb.co/hsN3QLh/image.png',
      alt: "John's Profile",
    },
  },
};
