import Navbar from "@/components/navbar";
import "./globals.css";
import { font } from "@/lib/font";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
