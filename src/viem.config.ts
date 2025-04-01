import { createPublicClient, http, webSocket } from 'viem';
import { mainnet } from 'viem/chains';

export const client = createPublicClient({
  chain: mainnet,
  // transport: http('https://ethereum-rpc.publicnode.com'),
  transport: webSocket('wss://ethereum-rpc.publicnode.com'),
});
