import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/Components/Header";
import { Steps } from "@/Components/Step";
import { Footer } from "@/Components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="bg-gray-400 w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col w-fit h-fit min-w-[480px] min-h-[655px] p-[32px] items-start border-[8px] gap-[28px] border-none bg-[#fff]">
        <Header></Header>
        <Steps></Steps>
        <Footer></Footer>
      </div>
    </div>
  );
}
