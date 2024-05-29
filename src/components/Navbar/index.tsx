import Image from "next/image";
import { useState } from "react";
import { fetchChat } from "@/services";
import { ChatResponse } from "@/types";

import { aiActionAtom } from "@/state";
import { useSetAtom } from "jotai";
import ConnectContainer from "@/web3";

export const Navbar = () => {
    const setAction = useSetAtom(aiActionAtom)
    const [chatVal, setChatVal] = useState("")

    const askAi = async () => {
        try {
            const resp = (await fetchChat({
                message: chatVal,
                model: "gpt-3.5-turbo"
            })) as ChatResponse;
            setAction(resp);
            setChatVal("");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="navbar bg-base-100 justify-between">
            <div className="">
                <a className="btn btn-ghost text-xl">
                    <Image alt="logo" src="/logo_wc2.png" width={50} height={50} />
                    <span>WhisperCash</span>
                </a>
            </div>
            <div className="form-control w-1/2 flex flex-row gap-2">
                <input type="text"
                    placeholder="Ask AI"
                    value={chatVal}
                    onChange={(e: any) => setChatVal(e.target.value)}
                    onKeyUp={(e) => { if (e.key === 'Enter') { askAi(); } }}
                    className="input input-bordered w-full" />
                <button className="btn btn-success" onClick={() => askAi()}>Ask</button>
            </div>
            <div className="gap-2 flex-end">
                <ConnectContainer />
            </div>
        </div>
    )
};