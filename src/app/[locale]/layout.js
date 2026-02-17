import Bootstrap from "@/components/Bootstartp";
import ClientProvider from "@/rit/slices/ClientProvider";
import { NextIntlClientProvider } from "next-intl";
import { routing } from "../../../i18n/routing";
import { setRequestLocale } from "next-intl/server";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/navbar/Nanbar";
import Footer from "@/components/footer/Footer";
import "../globals.css";
import { Alexandria } from "next/font/google";

const alexandria = Alexandria({
  subsets: ["arabic", "latin"],
  weight: ["100", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-alexandria",
});
export const metadata = {
  title: "Nabdat Khair",
  description:
    "Nabdat Khair Foundation Website - Empowering Communities, Transforming Lives through Compassion and Action.",
  icons: {
    image: "/images/logo.png",
  },
};

export default async function LocaleLayout({ children, params }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale || routing.defaultLocale || "ar";

  // console.log(locale);
  await setRequestLocale(locale); // مهم تضيف await هنا

  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body cz-shortcut-listen="true" className={alexandria.variable}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ClientProvider>
            <Navbar />
            {children}
            <Footer />
            <Toaster position="top-lift" reverseOrder={false} />
            <Bootstrap />
          </ClientProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
