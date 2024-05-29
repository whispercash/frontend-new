import { GearApi, ProgramMetadata } from '@gear-js/api';

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
    const gearApi = await GearApi.create({ providerAddress: testnet });

    const chain = await gearApi.chain();
    const nodeName = await gearApi.nodeName();
    const nodeVersion = await gearApi.nodeVersion();
    const genesis = gearApi.genesisHash.toHex();

    console.log(chain);
    console.log(nodeName);
    console.log(nodeVersion);
    console.log(genesis);


    const meta = ProgramMetadata.from(shardedFungibleTokenStorage);

    console.log(meta)
};

