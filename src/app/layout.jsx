import "./globals.css";
import { font } from "@/lib/font";

export default async function RootLayout({ children }) {
  return (
    <html>
      <body className={`${font.className} antialiased`}>{children}</body>
    </html>
  );
}
