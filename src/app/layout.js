import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";
import Nav from "./Components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Pokemon App",
  description: "ls nextjs for searching pokemon",
  keywords:' nextjs,launghsai,practice'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Header />
        {/* <Nav /> */}
        <div>
          {children}
        </div>

      </body>
    </html>
  );
}
