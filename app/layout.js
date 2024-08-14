import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from './context/ThemeContex';
import ThemeInitializer from './web_components/ThemeInitializer';
import ClientLayout from './ClientLayout';
import { FrontUI } from './context/FrontPageUiContext';
import { Front2UI } from './context/FrontPage2Context';
import { Front3UI } from './context/FrontPage3Context';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Satyam Blogs",
  description: "Blogs by Satyam Regmi. Blogs Related to: Tech, Games and New Updates.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <ThemeInitializer />
          <ClientLayout>
            <FrontUI>
              <Front2UI>
                <Front3UI>
                  {children}
                </Front3UI>
              </Front2UI>
            </FrontUI>
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
