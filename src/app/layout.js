import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "raghupadma.dev",
  description: "Welcome to my site!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased container`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
