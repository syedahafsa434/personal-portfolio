import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Modern Portfolio | Syeda Hafsa",
  description:
    "Full Stack Developer Portfolio showcasing projects and experience",
  icons: {
    icon: "/icon.svg",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen relative">
            <div className="animated-gradient" />
            <Navigation />
            <main className="pt-24 px-4 pb-12 relative">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
