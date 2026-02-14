import type { Metadata } from "next";
import "./globals.css";
import PageHeader from "./components/Header/page-header";
import Footer from "./components/footer";
import ClientProvider from "./components/ClientProvider";

export const metadata: Metadata = {
  title: "Author Book Showcase",
  description: "Discover captivating stories and exclusive book previews",
  keywords: ["books", "fiction", "mystery", "thriller", "author"],
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
