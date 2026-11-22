"use client";
import { useState } from "react";
import { NavBar } from "@/components/navbar";
import Link from "next/link";
import Image from "next/image";
import cloud from "@/public/Cloud.png";
import sun from "@/public/sun.png";
import moon from "@/public/moon.png";
import rainingUmbrellas from "@/public/umbrellas-falling-down-like-raindrops-CanvaGenAi.jpg";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [lightMode, setLightMode] = useState<"light" | "dark">("light");

  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="flex justify-between mx-10 mt-5">
        <div className="">
          <Image
            className="animate-slidein"
            alt="clouds in the sky"
            src={cloud}
          />
        </div>
        <div>
          {lightMode === "light" ? (
            <Image onClick={() => setLightMode("dark")} alt="sun" src={sun} />
          ) : (
            <Image
              onClick={() => setLightMode("light")}
              alt="moon"
              src={moon}
            />
          )}
        </div>
      </div>
      {/* mx-20 my-10 */}
      <div className="h-full mx-20 my-10 flex flex-col border border-black rounded-md bg-[#fac6c5]">
        <NavBar />
        <div className="h-full flex justify-between">
          <main className="m-10">{children}</main>
          <aside className="flex flex-col items-center w-[30%] bg-[#7d6548] rounded-br-md p-5 text-center">
            <Link className="content-center" href="/about">
              About me
            </Link>
            <Image
              alt="umbrellas falling down like raindrops"
              src={rainingUmbrellas}
              height={100}
              style={{ borderRadius: "50%" }}
            />
            <p>
              Hi, my name is Raining Umbrellas. I am a developer by trade but a
              life longer learner and curious person. I have a lot of interests
              and this site is where i get to share it with the world. No
              pressure 😬.
            </p>
          </aside>
        </div>
      </div>
      <footer className="flex justify-center bg-[url('/grass.png')]">
        2026
        <Link href="/my-favorite-things"> © </Link> RainingUmbrellas. All rights
        reserved.
      </footer>
    </div>
  );
}
