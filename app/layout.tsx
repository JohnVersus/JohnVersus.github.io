import ColorModeButton from './ColorModeButton/layout';
import Footer from './Footer/layout';

import './globals.css';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <ColorModeButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}
