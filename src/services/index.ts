import { ChatBody } from "@/types";

const AUTH_TOKEN = process.env.NEXT_PUBLIC_AUTH_TOKEN;

export const fetchChat = async (body: ChatBody) => {
    const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${AUTH_TOKEN}`,
        },
        body: JSON.stringify(body),
    });
    return response.json();
};