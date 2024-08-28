import type { Metadata } from "next";

import "@searchlight/shared/styles/app.scss";
import "@searchlight/shared/styles/colors.scss";

export const metadata: Metadata = {
  title: "Searchlight admin",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
