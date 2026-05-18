import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script'
import WelcomePopup from '@/components/WelcomePopup';


const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Systrocode- digital marketing, UI/UX Design Company in India",
  description: "Welcome to Systrocode, your gateway to digital excellence. Specializing in web development, digital marketing, data analysis & Python automation, we empower businesses to thrive in the digital era. Our innovative solutions, tailored strategies & expert team set the foundation for your online success.",
  keywords: "web development, digital marketing, data analysis, python automation, SEO, UI/UX design, wireframing, AI automation, cybersecurity",
  authors: [{ name: "Systrocode" }],
  creator: "Systrocode",
  publisher: "Systrocode",
  robots: "index, follow",
  verification: {
    google: "bce143db5e922614", // Google Search Console verification
    other: {
      'cf-2fa-verify': '8681bbe417b7934'
    }
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://systrocode.tech',
    title: 'Systrocode - Digital Marketing & Web Development Company',
    description: 'Specializing in web development, digital marketing, data analysis & Python automation. Empowering businesses to thrive in the digital era.',
    siteName: 'Systrocode',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Systrocode - Digital Marketing & Web Development Company',
    description: 'Specializing in web development, digital marketing, data analysis & Python automation.',
    creator: '@systrocode',
  },
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png']
  },
  alternates: {
    types: {
      'application/rss+xml': [
        { url: '/blog/rss.xml', title: 'Systrocode Blog RSS Feed' },
      ],
    },
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#4C4C6E',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* RSS Feed */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Systrocode Blog RSS Feed"
          href="/blog/rss.xml"
        />

        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q5NM5N122J"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-Q5NM5N122J');
              `}
        </Script>
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9650313315366716"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} font-normal text-lg antialiased`} suppressHydrationWarning>
        {children}

        {/* WhatsApp Widget */}
        <Script
          src="https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js"
          id="aisensy-wa-widget"
          strategy="afterInteractive"
        />
        <Script id="aisensy-widget-config" strategy="afterInteractive">
          {`
            (function() {
              function setupWidget() {
                const script = document.getElementById('aisensy-wa-widget');
                if (script) {
                  script.setAttribute('widget-id', 'aaa4y0');
                } else {
                  setTimeout(setupWidget, 100);
                }
              }
              setupWidget();
            })();
          `}
        </Script>

        <Script
          src="https://scripts.simpleanalyticscdn.com/latest.js"
          strategy="afterInteractive"
        />
        <WelcomePopup />
      </body>
    </html>
  );
}
