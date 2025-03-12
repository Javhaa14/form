"use client";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/Components/Header";
import { Steps } from "@/Components/Step";
import { Step2 } from "@/Components/steps/Step2";
import { Step3 } from "@/Components/steps/Step3";
import { Footer } from "@/Components/Footer";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
import { useState } from "react";
import { Ender } from "@/Components/Ender";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Values } from "./values";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [step, setStep] = useState(0);

  const bla = step > 0;
  const end = step == 3;
  const CurrentStep = [Steps, Step2, Step3, Ender][step];
  const [formvalue, setFormvalue] = useState(Values);
  const handleonchange = (event) => {
    const { value, name } = event.target;
    setFormvalue((prev) => ({ ...formvalue, [name]: value }));
  };
  const nemegch = (formvalue) => {
    if (formvalue.number.length < 9) {
      setStep(step + 1);
    } else {
      console.log("8 orontoi oruul");
    }
  };
  const hasagch = () => {
    setStep(step - 1);
  };

  // function MyDropzone() {
  //   const onDrop = useCallback((acceptedFiles) => {
  //     // Do something with the files
  //   }, []);
  //   const { getRootProps, getInputProps, isDragActive } = useDropzone({
  //     onDrop,
  //   });

  //   return (
  //     <div {...getRootProps()}>
  //       <input {...getInputProps()} />
  //       {isDragActive ? (
  //         <p>Drop the files here ...</p>
  //       ) : (
  //         <p>Drag 'n' drop some files here, or click to select files</p>
  //       )}
  //     </div>
  //   );
  // }
  return (
    <div className="bg-gray-400 w-screen h-screen flex justify-center items-center">
      <div
        className={`flex flex-col w-fit h-fit min-w-[480px] ${
          end ? "" : "min-h-[655px]"
        }  p-[32px] items-start rounded-[8px] justify-between gap-[28px] border-none bg-[#fff] `}>
        <div
          className={`${end ? "hidden" : "flex"} w-[416px] h-[465px] flex-col ${
            end ? "gap-[0px]" : "gap-[28px]"
          }`}>
          <Header></Header>
          <CurrentStep onchange={handleonchange} formvalue={formvalue} />
        </div>
        <div
          className={`${
            end ? "hidden" : "flex"
          } w-full flex-row gap-2 flex-start`}>
          <button
            onClick={hasagch}
            className={`${
              bla ? "flex" : "hidden"
            } w-[128px] px-[12px] py-[10px] justify-center items-center rounded-[6px] border-solid border-[#CBD5E1] border-[1px] flex-row bg-white`}>
            <FaChevronLeft className="text-black" />
            <p className="flex text-[#202124]">Back</p>
          </button>
          <Footer count={step + 1} darsan={nemegch}></Footer>
        </div>
        <Ender className={`${end ? "flex" : "hidden"}`} />
      </div>
    </div>
  );
}
