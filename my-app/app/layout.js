import localFont from "next/font/local";
import "./globals.css";

const DM_sans=localFont({
  src:[
    {
      path: "./fonts/DM-sans.ttf",
      weight: "100 900",
      style: "normal"
    }
  ],
  variable: "--font-DM",
})

const Outfit=localFont({
  src:[
    {
      path: "./fonts/Outfit.ttf",
      weight: "100 900",
      style: "normal"
    }
  ],
  variable: "--font-Outfit",
})



export const metadata = {
  title: "Study-app",
  description: "Made to help u learn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${DM_sans.variable} ${Outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
