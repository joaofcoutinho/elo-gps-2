import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { copy } from "@/lib/copy";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
  metadataBase: new URL("https://lp-elo-high-ticket.vercel.app"),
  openGraph: {
    title: copy.meta.title,
    description: copy.meta.description,
    type: "website",
    locale: copy.meta.locale,
    images: [{ url: copy.meta.ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: copy.meta.title,
    description: copy.meta.description,
    images: [copy.meta.ogImage],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={lato.variable}>
      <body className="bg-navy-deep font-sans text-ink-primary antialiased">
        {children}

        {/*
          TODO: ANALYTICS — descomentar quando IDs estiverem disponíveis.
          NEXT_PUBLIC_META_PIXEL_ID — Meta Pixel
          NEXT_PUBLIC_GA_ID          — Google Analytics 4

          import Script from "next/script";
          const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
          const gaId = process.env.NEXT_PUBLIC_GA_ID;

          {gaId && (
            <>
              <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
                strategy="afterInteractive"
              />
              <Script id="ga4-init" strategy="afterInteractive">
                {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`}
              </Script>
            </>
          )}
          {metaPixelId && (
            <Script id="meta-pixel" strategy="afterInteractive">
              {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${metaPixelId}');fbq('track','PageView');`}
            </Script>
          )}
        */}
      </body>
    </html>
  );
}
