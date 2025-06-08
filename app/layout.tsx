import type { Metadata } from "next";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";

export const metadata: Metadata = {
  title: "Ilham Muhammad | Portfolio",
  description:
    "Portfolio of Ilham Muhammad, a software engineer specializing in web development and design.",
  generator: "Next.js",
  applicationName: "Ilham Muhammad Portfolio",
  keywords: [
    "Ilham Muhammad",
    "Portfolio",
    "Software Engineer",
    "Web Development",
    "Design",
  ],
  authors: [{ name: "Ilham Muhammad", url: "https://ilham-muhammad.com/" }],
  creator: "Ilham Muhammad",
  publisher: "Ilham Muhammad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
