import React from "react";
import "assets/fonts/Stolzl/stylesheet.css";
import "./globals.css";
import "./home.css";
import Footer from "components/layout/footer";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
