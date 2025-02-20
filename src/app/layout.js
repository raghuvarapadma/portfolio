import "./globals.css";

export const metadata = {
  title: "raghu.dev",
  description: "Welcome to my site!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased container`}
      >
        {children}
      </body>
    </html>
  );
}
