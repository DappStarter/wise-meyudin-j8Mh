require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entire sun food stone royal stereo minor hotel light army gauge'; 
let testAccounts = [
"0xd191ea8e80a64942166e48fb04b585f44bf5f246fb3affeef0db5bb5e5d2dfc1",
"0xf4e9714e9ccb14e2709b105ff2b44e0e60d4edb38a3d91b3c27fe715b6992e07",
"0x304a7cc9552554b7e6bc8f56a8fa2516f09e036ea7709f83e6479fb2dc6671c1",
"0x51fcbedc58d27d0b0ba7a9ff5f6c1462a441d4b7f9caf45d26d5ed6438c2913c",
"0x1c1a6406cb4de3c085746fa835a48d044b1c9e965738dc4b52a83ab3eb0bdc80",
"0xe0fd5653a36ea5aa0e70dbb9abb487c0b0701fee398121663e5e8c7ef6be1423",
"0xc0982daf03f69e209ac538920333188158f25188799e67592016a6798e255733",
"0x76406c1e8f6a4d05328ab7eccd01932cf08cf87c084c90cc176bda775d666e40",
"0xaf837385ca2a98adbab9815746d8c337325f977269528d0d1cce12a051db1d11",
"0x0b15ae903ef5515753d4deeeb5df65369cb6877dace6922e47d29cbcb894052d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


