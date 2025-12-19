import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import Script from "next/script";

const geistSans = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Grand Finale project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} ${geistMono.className}`}>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>

        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement(
                { pageLanguage: 'en', autoDisplay: false },
                'google_translate_element'
              );
            }
          `}
        </Script>
      </body>
    </html>
  );
}
