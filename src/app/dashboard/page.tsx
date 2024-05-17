"use client"
import Image from "next/image";
import ConnectContainer from '@/web3';


export default function Dashboard() {
  return (
    <main className="w-full h-screen">
            <h1>Wallets</h1>
            <ConnectContainer />
    </main>
  );
}

