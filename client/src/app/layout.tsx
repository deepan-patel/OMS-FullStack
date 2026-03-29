import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/web/Navbar";
import Footer from "@/components/web/Footer";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/components/theme/theme-provider"

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OMS",
  description: "Order Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", inter.variable)}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl p-4">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavBar />
            {children}
            <Toaster />
          </ThemeProvider>
          <Footer />
        </div>
      </body>
    </html>
  );
}
