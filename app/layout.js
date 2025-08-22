import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600","700" ]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400" ]
});

export const metadata = {
  title: "Vision Hub- reliable and effective",
  description: "Life changing emotional balance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-7 overflow-x-hidden`}
      >
        <NavBar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
