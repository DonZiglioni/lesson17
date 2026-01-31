"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import PasswordCheck from "./_components/PasswordCheck";
import Quiz1 from "./_components/Quiz1";
import QuizGame from "./_components/QuizGame";
import DragGame from "./_components/DragGame";
import DragGame2 from "./_components/DragGame2";
import DragGame3 from "./_components/DragGame3";
import HashEx from "./_components/HashEx";
import Quiz2 from "./_components/Quiz2";

export default function Home() {
  const [position, setPosition] = useState("Z")

  const playLesson = () => {
    return (
      <h1>OH!</h1>
    )
  }

  useEffect(() => {

  }, [position])

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center  py-20 px-16 bg-sky-50 ">
        <h1 className="font-extrabold text-4xl ">LESSON 17</h1>
        <hr className="w-full my-4 border-dotted border-black"></hr>
        <div className="flex gap-4 text-base font-medium flex-row mb-10">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="group relative bg-slate-900 h-10 w-42 border-2 border-teal-600 text-sky-50 text-base font-bold rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:border-slate-400 hover:text-sky-200 p-3 text-left before:absolute before:w-10 before:h-10 before:content[''] before:right-2 before:top-2 before:z-10 before:bg-indigo-500 before:rounded-full before:blur-lg before:transition-all before:duration-500 after:absolute after:z-10 after:w-16 after:h-16 after:content[''] after:bg-teal-600 after:right-6 after:top-4 after:rounded-full after:blur-lg after:transition-all after:duration-500 hover:before:right-10 hover:before:-bottom-4 hover:before:blur hover:after:-right-6 hover:after:scale-110">
                <div className="absolute right-32 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-slate-800"></div>
                {/* <div className="absolute right-2 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150  duration-500 bg-sky-800"></div> */}
                {/* <div className="absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150  duration-500 bg-sky-700"></div> */}
                {/* <div className="absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-500 bg-sky-600"></div> */}
                <p className="z-20 text-shadow-[rgba(0,0,0,.5)] text-shadow-sm semi-bold">Course Menu</p>
              </Button>


            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-50">
              <DropdownMenuGroup>
                <DropdownMenuLabel>Today's Topics</DropdownMenuLabel>
                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                  <DropdownMenuRadioItem value="A">Password Security</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="D">File Permissions VS. OS</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="E">Detection Methods</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="F">Update Methods</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="G">Hash Verification</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="H">Browser Security Questions</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="C">Malware Game</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="B">Malware Questions</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

        </div>

        {position === "A" && (
          <PasswordCheck />
        )}
        {position === "B" && (
          <Quiz1 />
        )}
        {position === "C" && (
          <QuizGame />
        )}
        {position === "D" && (
          <DragGame />
        )}
        {position === "E" && (
          <DragGame2 />
        )}
        {position === "F" && (
          <DragGame3 />
        )}
        {position === "G" && (
          <HashEx />
        )}
        {position === "H" && (
          <Quiz2 />
        )}
      </main>
    </div>
  );
}
