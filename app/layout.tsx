import type { Metadata } from "next";
import Head from "next/head";
import Header from "../components/Header"
import "./globals.scss";

export const metadata: Metadata = {
  title: "Vaction project - Valleir",
  description: "Vaction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <Head>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <html lang="en">
      <body>
        <div className="main">
          <Header />
          {children}
        </div>
      </body>
    </html>
    </>
  );
}
