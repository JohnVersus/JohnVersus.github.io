import ColorModeButton from './ColorModeButton';
import Footer from './Footer';

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
