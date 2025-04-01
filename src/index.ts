import { parseAbi } from 'viem';
import { client } from './viem.config';

const USDT_ADDRESS = '0xdAC17F958D2ee523a2206206994597C13D831ec7';
const ABI = parseAbi([
  'event Transfer(address indexed from, address indexed to, uint value)',
]);

// @ts-ignore
const getEvents = async () => {
  const block = await client.getBlockNumber();

  client.watchContractEvent({
    address: USDT_ADDRESS,
    abi: ABI,
    eventName: 'Transfer',
    fromBlock: block,
    batch: false,
    onLogs: (logs) => {
      logs.forEach((log) => {
        const { args } = log;
        console.log(`${args.from} -> ${args.to}: ${args.value}`);
      });
    },
  });
};

// @ts-ignore
const main = async () => {
  await getEvents();
};

main();
