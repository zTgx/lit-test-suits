import { ApiPromise, WsProvider } from '@polkadot/api';
import { cryptoWaitReady } from '@polkadot/util-crypto';

export async function x() {
    const newLocal = 'wss://rpc.polkadot.io';
    const wsProvider = new WsProvider(newLocal);
    const api = await ApiPromise.create({ provider: wsProvider });
    console.log('xxxx');
    await cryptoWaitReady();

    // Do something
    console.log(api.genesisHash.toHex());

    return 7;
}
