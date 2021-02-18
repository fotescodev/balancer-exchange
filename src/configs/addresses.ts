import registry from '@balancer-labs/assets/generated/dex/registry.homestead.json';
import registryKovan from '@balancer-labs/assets/generated/dex/registry.kovan.json';
import registryMoonbase from '@balancer-labs/assets/generated/dex/registry.moonbase.json';
import { getSupportedChainName } from '../provider/connectors';

require('dotenv').config();

function getContracts(chainName: string) {
    if (chainName === 'mainnet') {
        return {
            bFactory: '0x9424B1412450D0f8Fc2255FAf6046b98213B76Bd',
            proxy: '0x3E66B66Fd1d0b02fDa6C811Da9E0547970DB2f21',
            weth: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            multicall: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
            sorMulticall: '0x514053aCEC7177e277B947b1EBb5C08AB4C4580E',
        };
    }
    if (chainName === 'kovan') {
        return {
            bFactory: '0x8f7F78080219d4066A8036ccD30D588B416a40DB',
            proxy: '0x2641f150669739986CDa3ED6860DeD44BC3Cda5d',
            weth: '0xd0A1E359811322d97991E03f863a0C30C2cF029C',
            multicall: '0x2cc8688C5f75E365aaEEb4ea8D6a480405A48D2A',
            sorMulticall: '0x71c7f1086aFca7Aa1B0D4d73cfa77979d10D3210',
        };
    }

    if (chainName === 'moonbase') {
        return {
            bFactory: '0x794b081a84d6D3C046061523016B3a817b6d00E5', //process.env.CONTRACT_BFACTORY,
            proxy: '0xE6386206a76F0480344f8C1663B23011ff9b2CB4', //process.env.CONTRACT_EXCHANGE_PROXY,
            weth: '0xd5d5DB0389D04e6F5fdEA430F314d699FC449fD4', //process.env.CONTRACT_ERC20_WETH,
            multicall: '0x3B55Fde7dE792df861dF5041Da4a86e7Bd6c30D6', //process.env.CONTRACT_MULTICALL,
            sorMulticall: '', //process.env.CONTRACT_MULTICALL, // sorMulticall has not been deployed yet..
        };
    }

    return {};
}

function getAssets(chainName: string) {
    if (chainName === 'mainnet') {
        return registry;
    }
    if (chainName === 'kovan') {
        return registryKovan;
    }
    if (chainName === 'moonbase') {
        return registryMoonbase;
    }
    return {
        tokens: {},
        untrusted: [],
    };
}

const chainName = getSupportedChainName();
const contracts = getContracts(chainName);
const assets = getAssets(chainName);

export { contracts, assets };
