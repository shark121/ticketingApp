"use client";
import bgImage from "../../public/images/bgImage.jpg";
import Image from "next/image";
import Navigation from "../../components/navigation";
import {Comfortaa} from "next/font/google"
import Loaders from "./Loading";

const comfortaa = Comfortaa({
  weight: ["400"],
  subsets: ["latin"],

})

export default function Home() {
  return (
    <div className= {`flex min-h-screen flex-col items-center justify-between ${comfortaa.className}  `}>
      <Image className="relative object-cover" src={bgImage} fill alt="bg-ticket-image"></Image>
      <Navigation />
      {/* <Loaders /> */}
    </div>
  );
}
