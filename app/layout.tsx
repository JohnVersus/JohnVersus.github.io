import { ColorModeButton } from 'components/elements';
import { Footer } from 'components/modules';
import Head from 'next/head';

import './globals.css';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Profile</title>
        <meta name="description" content="JohnVersus Profile" />
        <link rel="icon" href="favicon.ico" />
      </head>
      <body>
        <ColorModeButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}
