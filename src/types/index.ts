export type OpenAIModel = 'gpt-3.5-turbo' | 'gpt-4';
export interface ChatBody {
    message: string;
    model: OpenAIModel;
}

export interface ChatResponse {
    action?: string;
    units?: string;
    from?: string;
    to?: string;
    receiver_id?: string;
    dest?: string;
    chain?: string;
    source?: string;
    source_address?: string;
    dest_address?: string;
    duration_in_days?: string;
    market?: string;
    ticker?: string;
    exchange?: string;
    nft_name?: string;
    chain_address?: string;
}