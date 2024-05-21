import { ChatResponse } from "@/types";
import { useEffect, useState } from "react";

interface SwapProps {
    action: ChatResponse;
};

const CoinDetails: any = {
    eth: { title: 'ETH'},
    usdt: { title: 'USDT'},
}

export const SwapAction = (props: SwapProps) => {
    const [fromVal, setFromVal] = useState(props.action.units);
    const [fromCoin, setFromCoin] = useState(props.action.source);
    const [toCoin, setToCoin] = useState(props.action.dest);
    const [toVal, setToVal] = useState("");

    useEffect(() => {
        setToVal('100');
    }, [fromVal]);

    const swapCoin = async () => {
        console.log(`swapping ${fromVal}${fromCoin} to ${toVal}${toCoin}`)
    };

    return (
        <section className="swap-window">
            <div className="w-96 p-4 bg-white rounded-lg shadow-lg">
                <div className="text-lg font-bold text-center mb-4">Swap</div>
                <div className="space-y-4">
                    <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
                        <input
                            type="number"
                            value={fromVal}
                            placeholder="0.0"
                            onChange={(e) => setFromVal(e.target.value)}
                            className="bg-transparent outline-none text-gray-400 text-2xl w-full"
                        />
                        <select value={fromCoin} className="bg-transparent outline-none text-gray-500" onChange={(e) => setFromCoin(e.target.value)}>
                            <option value="eth">ETH</option>
                            <option value="usdt">USDT</option>
                        </select>
                    </div>
                    <div className="text-center">
                        <svg className="h-6 w-6 text-gray-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                    <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
                        <input
                            type="number"
                            value={toVal}
                            placeholder="0.0"
                            readOnly
                            className="bg-transparent outline-none text-gray-400 text-2xl w-full"
                        />
                        <select value={toCoin} className="bg-transparent outline-none text-gray-500" onChange={(e) => setToCoin(e.target.value)}>
                            <option value="eth">ETH</option>
                            <option value="usdt">USDT</option>
                        </select>
                    </div>
                </div>
                <button className="btn btn-warning w-full mt-3" onClick={swapCoin}>Swap</button>
            </div>
        </section>
    )
};