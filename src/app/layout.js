import { Inter } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PocketShuttle — Real-time Movement Safety Platform",
  description: "PocketShuttle is a flexible real-time movement accountability and safety platform for families, schools, drivers, and transport companies. Know where your people are, every step of the way.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
