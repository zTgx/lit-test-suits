import { ApiPromise, WsProvider } from '@polkadot/api';

export async function GetApi() {
    const newLocal = 'wss://rpc.polkadot.io';
    const wsProvider = new WsProvider(newLocal);
    const api = await ApiPromise.create({ provider: wsProvider });
    return api;
}

export async function GetHeaderHash(blockNumber: number) {
    const api = await GetApi();
    // returns Hash
    const blockHash = await api.rpc.chain.getBlockHash(blockNumber);
    // returns SignedBlock
    const signedBlock = await api.rpc.chain.getBlock(blockHash);

    // the hash for the block, always via header (Hash -> toHex()) - will be
    // the same as blockHash above (also available on any header retrieved,
    // subscription or once-off)
    console.log("   [API】 Get SignedBlock header hash: ", signedBlock.block.header.hash.toHex());

    // the hash for each extrinsic in the block
    console.log('   [API] Get SignedBlock extrinsics: ');
    signedBlock.block.extrinsics.forEach((ex, index) => {
        console.log('   [Extrinsic] Index : ', index, ', Extrinsic hash: ', ex.hash.toHex());
    });
}