import type { Metadata } from "next";
import "./globals.css";
import { Inter, Raleway } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme/theme-provider"
import AppSideBar from "@/components/web/AppSideBar";

import Navbar from "@/components/web/Navbar";
import { TooltipProvider } from "@/components/ui/tooltip"
import { SidebarProvider } from "@/components/ui/sidebar"
import { Toaster } from "@/components/ui/sonner"

import { cookies } from "next/headers";

const ralewayHeading = Raleway({ subsets: ['latin'], variable: '--font-heading' });

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: "Exploring Shadcn UI",
  description: "Exploring Shadcn UI",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <html
      lang="en" className={cn("font-sans", inter.variable, ralewayHeading.variable)}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider defaultOpen={defaultOpen}>
            <TooltipProvider>
              <AppSideBar />
              <main className="w-full">
                <Navbar />
                <div className="px-4">
                  {children}
                  <Toaster />
                </div>
              </main>
            </TooltipProvider>
          </SidebarProvider>
        </ThemeProvider>

      </body>
    </html>
  );
}
