"use client"

import { Navbar } from "@/components/Navbar";
import { Web3Action } from "@/components/Web3Action";


export default function Dashboard() {
  return (
    <main className="w-full h-screen flex flex-col gap-5">
      <Navbar />
      <div className="w-full px-5">
        <Web3Action />
      </div>
    </main>
  );
}

