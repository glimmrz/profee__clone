import Navbar from "@/components/navbar";
import "./globals.css";
import { font } from "@/lib/font";
import IframeModal from "@/components/modals/iframe-modal";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <Navbar />
        <main>
          <IframeModal />
          {children}
        </main>
      </body>
    </html>
  );
}
