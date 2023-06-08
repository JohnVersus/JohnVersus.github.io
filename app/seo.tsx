import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "John's Profile",
  colorScheme: 'dark',
  applicationName: "John's Profile",
  description: 'Profile data of what I do, my past work, contact info etc..',
  manifest: '/favicon/site.webmanifest',
  icons: { icon: ['/favicon/favicon-32x32.png', '/favicon/favicon-16x16.png'], apple: '/favicon/apple-touch-icon.png' },
};
