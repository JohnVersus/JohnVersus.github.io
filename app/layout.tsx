import ColorModeButton from './ColorModeButton/ColorModeButton';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
export { metadata } from './seo';

import './globals.css';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ColorModeButton />
        {children}
        <Navbar />
        <Footer />
      </body>
    </html>
  );
}
