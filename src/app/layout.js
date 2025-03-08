import Nav from "@/components/nav";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "raghupadma.dev",
  description: "Welcome to my site!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased container min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <header className="sticky top-0 z-200 bg-background">
              <Nav />
            </header>
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
