'use client'
import Logo from "./components/Logo";

export default function Home() {
  return (
    <div className="h-full w-100% flex justify-center items-center flex-col pt-10">
      <h1 className="text-xl"><b>This page has 3D, interactive objects.</b></h1>
      <Logo />
    </div>
  );
}
