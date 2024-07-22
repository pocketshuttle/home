import Image from "next/image";
import Header from "./components/Header";
import Features from "./components/Features";
import School from "./components/School";
import Download from "./components/Download";


export default function Home() {
  return (
    <main className="">
      <Header/>
      <Features/>
      <School/>
      <Download/>
    </main>
  );
}
