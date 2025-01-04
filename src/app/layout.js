import { pressStart2P } from './fonts';

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body className={`bg-[#383838] ${pressStart2P.className}`}>{children}</body>
    </html>
  );
} 