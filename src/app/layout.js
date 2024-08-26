import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script'


const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Systrocode- digital marketing, Web Design Company in India",
  description: "Get your online presence with Systrocode's expert web development and digital marketing services. Drive growth and success with our professional solutions.",
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png']
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-normal text-lg antialiased`}>
        {children}
      </body>
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js"  />
    </html>
  );
}
