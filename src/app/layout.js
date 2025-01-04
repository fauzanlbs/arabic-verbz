import { pressStart2P } from './fonts';
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body className={`bg-[#383838] ${pressStart2P.className} flex flex-col min-h-screen`}>
        <main className="flex-grow">
          {children}
        </main>
        <footer className="py-6 text-center">
          <p className="text-[#90EE90] text-sm">
            Made with ❤️ by{' '}
            <a 
              href="https://fauzanlubis.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#FFD700] hover:underline"
            >
              fauzanlubis.com
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
} 