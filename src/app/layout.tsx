import type { Metadata } from "next";
import "./globals.css";
import PageHeader from "./components/Header/page-header";
import Footer from "./components/footer";
import ClientProvider from "./components/ClientProvider";

export const metadata: Metadata = {
  title: "CSPL",
  description:
    "Discover inspiring Christian books by Dr. Chibueze Ukaegbu. Biblical fiction, devotionals, spiritual growth guides, and faith-building literature. Read previews and find your next transformative read.",
  keywords: [
    "Christian books",
    "Christian author",
    "biblical fiction",
    "devotional books",
    "spiritual growth",
    "faith-based literature",
    "Christian living",
    "inspirational books",
    "Dr. Chibueze Ukaegbu",
    "Nigerian Christian author",
    "faith and spirituality",
    "Christian literature",
    "religious books",
    "spiritual journey",
    "Christian faith",
  ],
  icons: { icon: "/CSPLlogo.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='antialiased'>
        <ClientProvider>
          <PageHeader />
          <main>{children}</main>
          <Footer />
        </ClientProvider>
      </body>
    </html>
  );
}
