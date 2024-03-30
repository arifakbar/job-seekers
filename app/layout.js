import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";
import StoreProvider from "@/lib/redux/storeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JobSeekers",
  description: "A Job Board Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#E3E5E8] dark:bg-[#313338]`}>
        <StoreProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            storageKey="jobseeker-theme"
          >
            {children}
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
