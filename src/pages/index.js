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

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const Values = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
  };
  const errors = {
    firstname: false,
    lastname: false,
    username: false,
    email: false,
  };
  const usernames = ["baldan"];

  const [step, setStep] = useState(0);
  const bla = step > 0;
  const end = step == 3;

  const CurrentStep = [Steps, Step2, Step3, Ender][step];

  const [formvalue, setFormvalue] = useState(Values);
  const [formError, setFormError] = useState(errors);
  const [isValid, setIsValid] = useState(false);

  const handleonchange = (event) => {
    const { value, name } = event.target;
    setFormvalue((formvalue) => ({ ...formvalue, [name]: value }));
  };

  const errornames = [
    "Please enter a valid phone number.",
    "Please provide a valid email address.",
    "Password must include letters and numbers.",
    "Passwords do not match. Please try again.",
  ];

  const InputValidation = () => {
    const letterregex = /[^a-zA-Z]/;
    const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let message = {};
    if (letterregex.test(formvalue.firstname)) {
      setFormError((prev) => ({ ...prev, firstname: true }));
    } else {
      setFormError((prev) => ({ ...prev, firstname: false }));
      allcheck();
    }
    if (letterregex.test(formvalue.lastname)) {
      setFormError((prev) => ({ ...prev, lastname: true }));
    } else {
      setFormError((prev) => ({ ...prev, lastname: false }));
      allcheck();
    }
    if (usernames.includes(formvalue.username)) {
      setFormError((prev) => ({ ...prev, username: true }));
    } else {
      setFormError((prev) => ({ ...prev, username: false }));
      allcheck();
    }
    if (emailregex.test(formvalue.email)) {
      setFormError((prev) => ({ ...prev, email: false }));
    } else {
      setFormError((prev) => ({ ...prev, email: true }));
      allcheck();
    }
    // if (regex.test(formvalue.lastname)) {
    //   setFormError((prev) => ({ ...prev, lastname: true }));
    // } else {
    //   setFormError((prev) => ({ ...prev, lastname: false }));
    //   allcheck();
    // }
    // if (usernames.includes(formvalue.username)) {
    //   setFormError((prev) => ({ ...prev, username: true }));
    // } else {
    //   setFormError((prev) => ({ ...prev, username: false }));
    //   allcheck();
    // }

    // if (name == "number") {
    //   if (event.target.value.length == 8) {
    //     setIsValid(true);
    //   } else {
    //     setIsValid(false);
    //   }
    // }
  };

  const value = Object.values(formError);
  const allcheck = () => {
    for (let i = 0; i < value.length; i++) {
      if (value.includes(true)) {
        setIsValid(false);
      } else {
        setIsValid(true);
      }
    }
  };
  console.log(isValid, "isvalid");

  const nemegch = () => {
    InputValidation();
    // setStep(step + 1);
    // isValid ? setStep(step + 1) : console.log("hi");
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
  console.log(formvalue, formError);
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
          <CurrentStep
            onchange={handleonchange}
            formvalue={formvalue}
            formerror={formError}></CurrentStep>{" "}
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
