import Navbar from "@/components/navbar";
import IframeModal from "@/components/modals/iframe-modal";
import QrCodeModal from "@/components/modals/qr-code-modal";
import Footer from "@/components/footer";
import Sidebar from "@/components/sidebar/sidebar";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function RootLayout({ children, params }) {
  const messages = await getMessages();

  return (
    <html lang={params.locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar locale={params.locale} />
          <Sidebar locale={params.locale} />
          <main>
            <IframeModal />
            <QrCodeModal />
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
