import { aiActionAtom } from "@/state";
import { useAtomValue } from "jotai";
import { useEffect } from "react";

import { SwapAction } from "./swap";
import { TransferAction } from "./transfer";

export const Web3Action = () => {
    const chatAction = useAtomValue(aiActionAtom);

    useEffect(() => {
        console.log(chatAction);
    }, [chatAction]);

    return (
        <div>
            {chatAction.action === 'swap' && <SwapAction action={chatAction} />}
            {chatAction.action === 'send' && <TransferAction action={chatAction} />}
        </div>
    );
};