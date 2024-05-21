import { ChatResponse } from "@/types";
import { useEffect, useState } from "react";

interface TransferProps {
    action: ChatResponse;
}

const Coins = [
    { title: 'ETH', value: 'eth' },
    { title: 'USDT', value: 'usdt' },
]

export const TransferAction = (props: TransferProps) => {
    const [fromVal, setFromVal] = useState(props.action.units);
    const [fromCoin, setFromCoin] = useState<any>({});
    const [toAddress, setToAddress] = useState(props.action.receiver_id);

    useEffect(() => {
        const from = Coins.find(k => k.value === props.action.from);
        setFromCoin(from);
    }, []);

    return (
        <section className="transfer-window">
            <div className="w-96 p-4 bg-white rounded-lg shadow-lg">
                <div className="text-lg font-bold text-center mb-4">Transfer</div>

                <div className="flex flex-col gap-3">

                    <input className="input input-bordered w-full max-w-xs" placeholder="Transfer value" value={fromVal} onChange={(e) => setFromVal(e.target.value)} />
                    <div className="dropdown dropdown-bottom">
                        <div tabIndex={0} role="button" className="btn m-1">{fromCoin.title}</div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            {Coins.map(k => <li key={k.value} onClick={() => setFromCoin(k)}><a>{k.title}</a></li>)}
                        </ul>
                    </div>
                    <input className="input input-bordered w-full max-w-xs" placeholder="Transfer value" value={toAddress} onChange={(e) => setToAddress(e.target.value)} />
                </div>
            </div>
        </section>
    )
};