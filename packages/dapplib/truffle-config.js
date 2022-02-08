require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glove flower smooth name reflect pizza slow hover another army gentle'; 
let testAccounts = [
"0x3a9284747080fb79814a37fb2ea33b66868fb4cd20a7b105fddabe3bee1c71f7",
"0xceb2c792988646df8d239a6c9a71cccef03d168de7e2c3359af798a23935bd5e",
"0x2b5ff97a46490c272024d532adf7ad286b3815d9dd3296cd7fc8af29a1701aee",
"0x6e2ed712f94196d05d6a4ed927207bbd42beb44b861eea5257e9a29a537f1aba",
"0xadec151cb21adfcefac973861601db537fd317e7041f41f5f6cf02bb92a219c4",
"0xa7042315657a086d5d367bf46f86c67d8466194d268d72d14ec9c3886d7ed849",
"0xb534c5335f25680601958039db66d530979d622bb07b7539fd497f1f19d077b6",
"0x5c4d0e9575dab530236eb59856e552d2f15ca20015cc46fc74c58f247dec8fef",
"0x882f745a9b0eab8ef38ab70d96f60283ffb5f8c4111b194732c3439bf5be6fd0",
"0xadecdc90bb65b5b660d0d20f18d5b1bfdc03a3262b45f4613f47b30212919a53"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

