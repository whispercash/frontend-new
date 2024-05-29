"use client"

import { Navbar } from "@/components/Navbar";
import { Web3Action } from "@/components/Web3Action";
import CryptoCoinOverviewWidget from '@/components/TradingView'; 

import { getProgramMetaData } from '@/web3/connections';
import { useEffect } from "react";


export default function Dashboard() {

  useEffect(() => {
    getProgramMetaData();
  }, []);

  return (
    <main className="w-full h-screen flex flex-col gap-5">
      <Navbar />
      <div className="w-full px-5 flex flex-row gap-5">
        <div className="w-3/4">
          <CryptoCoinOverviewWidget />
        </div>
        <div className="w-1/4">
          <Web3Action />
        </div>
      </div>
    </main>
  );
}

