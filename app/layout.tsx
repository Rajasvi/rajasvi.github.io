import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Rajasvi Vinayak Sharma",
  description:
    "Rajasvi Vinayak Sharma — Senior Machine Learning Engineer at Moveworks (ServiceNow). ML, NLP, LLMs, Information Retrieval, Recommendation Systems. UCSD MS ECE, IIT BHU.",
  keywords:
    "Rajasvi Vinayak Sharma, Machine Learning Engineer, Moveworks, ServiceNow, NLP, LLMs, Information Retrieval, UCSD, IIT BHU, Nvidia, Goldman Sachs",
  authors: [{ name: "Rajasvi Vinayak Sharma" }],
  openGraph: {
    title: "Rajasvi Vinayak Sharma",
    description: "Senior Machine Learning Engineer — Moveworks (ServiceNow)",
    url: "https://rajasvi.xyz",
    siteName: "Rajasvi Vinayak Sharma",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/UCSDlogo.png" type="image/png" />
      </head>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-75SGBCNR9N"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-75SGBCNR9N');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
