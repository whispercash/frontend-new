import { GearApi, ProgramMetadata, getStateMetadata } from '@gear-js/api';
// import { readFileSync } from 'fs';

// const storageWasm = readFileSync('../contracts/debug/sharded_fungible_token_storage.opt.wasm');

const testnet = "wss://testnet.vara.network";

// const gearApi = await GearApi.create();

// Sharded Fungible Token Storage: 

// Sharded Fungible Token Logic:
// 0xe3d0b00eb3782e96610f9d0d489bbe738b8a86cef1805bf19ebc0dfa4e7700f2

// Sharded Fungible Token:
// 


// Escrow Token:
// 

const shardedFungibleTokenStorage = "0xefebb220297ae5824c6f6191dd4e68e0e1280b05684ea631b741f9f2642afb10"
const shardedFungibleTokenLogic = "0xe3d0b00eb3782e96610f9d0d489bbe738b8a86cef1805bf19ebc0dfa4e7700f2"
const shardedFungibleToken = "0x44b50e7ca1322563db3bef883f92e6e6ca0fd46dce9d18372a73ab4bc0eb679c"
const escrowContract = "0xeb86ba1a3fb3d7254cd7064b2be03f21c8170f7569fbbf62026f7be8f920b368"

export const getProgramMetaData = async () => {

    const res = await fetch('../contracts/debug/sharded_fungible_token_storage.opt.wasm');
    const arrayBuffer = await res.arrayBuffer();
    const storageWasm = Buffer.from(arrayBuffer);
    // const metadata = await getStateMetadata(buffer);
    


    const gearApi = await GearApi.create({ providerAddress: testnet });

    const chain = await gearApi.chain();
    const nodeName = await gearApi.nodeName();
    const nodeVersion = await gearApi.nodeVersion();
    const genesis = gearApi.genesisHash.toHex();

    console.log(chain);
    console.log(nodeName);
    console.log(nodeVersion);
    console.log(genesis);

    console.log(
        `You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`,
    );


    // const programMetaData = ProgramMetadata.from(shardedFungibleTokenStorage);

    // console.log(programMetaData)

    console.log(storageWasm)
    const stateMetadata = await getStateMetadata(storageWasm);

    console.log(stateMetadata);

    // const state = await gearApi.programState.readUsingWasm(
    //     {
    //         programId: shardedFungibleTokenStorage,
    //         fn_name: 'name_of_function_to_execute',
    //         wasm: storageWasm,
    //         argument: { input: 'payload' },
    //     },
    //     stateMetadata,
    //     programMetaData
    // );

};

