import ColorModeButton from './ColorModeButton/ColorModeButton';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

import './globals.css';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <ColorModeButton />
        {children}
        <Navbar />
        <Footer />
      </body>
    </html>
  );
}
