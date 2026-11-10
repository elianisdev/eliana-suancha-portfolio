import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eliana Suancha · Frontend Developer",
  description:
    "Frontend Developer Semi Senior. React, Next.js y TypeScript con foco en accesibilidad y rendimiento.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${plusJakartaSans.variable} ${inter.variable} ${jetBrainsMono.variable} h-full scroll-smooth scheme-dark antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink font-sans text-fg">
        {children}
      </body>
    </html>
  );
}
