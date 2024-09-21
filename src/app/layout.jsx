import Navbar from "@/components/navbar";
import "./globals.css";
import { font } from "@/lib/font";
import IframeModal from "@/components/modals/iframe-modal";
import QrCodeModal from "@/components/modals/qr-code-modal";
import Footer from "@/components/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <Navbar />
        <main>
          <IframeModal />
          <QrCodeModal />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
