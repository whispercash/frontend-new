import { atom, useAtom } from 'jotai';
import { ChatResponse } from "@/types";

export const aiActionAtom = atom({} as ChatResponse);
