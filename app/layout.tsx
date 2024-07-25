import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import {ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton} from '@clerk/nextjs'
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Saloni_dev",
  description: "Evently is a platform for Event management system",
  icons: {
    icon: '/assets/images/logo.svg'
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider> 
    <html lang="en">
        <body className={poppins.variable}>
          {/* <header>  */}
        {/* <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
            </SignedIn>  */}
          {/* </header> */}
          <main>
            {children}
          </main>
           </body>
      </html>
      </ClerkProvider>
  );
}
