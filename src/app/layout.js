"use client"

import { ClerkProvider } from '@clerk/nextjs';
// import AuthButtons from '../components/AuthButtons';
import AuthButtons from './components/AuthButtons';
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata = {
//   title: "Drishti - Eye care",
//   description: "An application which cares for your eyes. ",
// };

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
    <body>
          <header style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
            <AuthButtons />
          </header>
          <main>{children}</main>
        </body>
    </html>
    </ClerkProvider>
  );
}



{/* <body
className={`${geistSans.variable} ${geistMono.variable} antialiased`}
>
{children}
</body> */}