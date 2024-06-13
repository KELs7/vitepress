# XianWalletUtils

The `XianWalletUtils` JavaScript utility provides a simple interface for interacting with Xian wallet information and requesting transactions via custom events in a web environment.

## Overview

`XianWalletUtils` encapsulates the functionality needed to request wallet information and to send transactions using an event-driven approach. It is designed to work within applications that support custom event dispatching and listening, facilitating interaction with blockchain wallets.

## Installation

To use `XianWalletUtils`, simply include the `dapp.js` file in your project.
Get dapp.json from the [github repo](https://github.com/xian-network/dapp-utils)

```html
<script src="path/to/dapp.js"></script>
```

## Initialization

Before using `XianWalletUtils`, it's important to initialize the utility to set up necessary event listeners. This ensures that the utility is ready to handle requests and responses appropriately.

```javascript
XianWalletUtils.init();
```

Or if you want to use another Node to get balance infos etc.

```javascript
XianWalletUtils.init("https://testnet.xian.org");
```

## Usage

### Requesting Wallet Information

To request wallet information, you can use the `requestWalletInfo` function. This function returns a promise that resolves with the wallet details.

```javascript
XianWalletUtils.requestWalletInfo()
    .then(info => {
        console.log('Wallet Address:', info.address);
        console.log('Is Locked:', info.locked);
        console.log('Chain ID:', info.chainId);
    })
    .catch(error => {
        console.error('Extension not installed');
    });
```

To get the balance of the wallet, you can use `getBalance` function with the contract of the token that you want to get the balance of. This function returns a promise that resolves with the wallet balance.

```javascript
XianWalletUtils.getBalance("currency")
    .then(balance => {
        console.log('Balance:', balance);
    })
    .catch(error => {
        console.error(error);
    });
```

### Sending Transactions

To send a transaction with detailed control over the transaction parameters, use the `sendTransaction` function. This function requires specifying the contract name, method name, kwargs. It returns a promise that resolves with the transaction result.

```javascript
XianWalletUtils.sendTransaction(
    "currency",            // contract name
    "transfer",            // method/function name
    {                      // kwargs (method arguments)
        "to": "wallet_address",
        "amount": 1000
    }
).then(result => {
    if (result.errors) {
        console.error('Transaction Errors:', result.errors);
    } else {
        console.log('Transaction Result:', result);
    }
});
```