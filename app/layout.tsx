import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex Chen // Senior Data Analyst & Chuyên gia BI",
  description:
    "Portfolio của Alex Chen — Senior Data Analyst chuyên SQL, Python, Power BI, Tableau và pipeline dữ liệu tự động.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background font-body text-on-surface antialiased selection:bg-primary-container selection:text-on-primary">
        {children}
      </body>
    </html>
  );
}
