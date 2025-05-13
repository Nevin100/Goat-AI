import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/providers/theme-provider"
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/sonner"
import { Sidebar } from "@/components/ui/sidebar";
import AppSidebar  from "@/components/AppSidebar"

export const metadata: Metadata = {
  title: "Goat Notes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
          <Sidebar>
            <AppSidebar /> 
            <div className="flex min-h-screen w-full flex-col">

            <Header />
            <main className="flex flex-col flex-1 px-4 pt-10 xl:px-8">{children}</main>
              </div>
              
          </Sidebar>
          
          <Toaster/>
          </ThemeProvider>
    
      </body>
    </html>
  );
}
