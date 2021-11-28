# Truffle-Ballot-Dapp

![Node](https://img.shields.io/static/v1?label=react&message=Node.js&color=blue&logo=react)
![Truffle](https://img.shields.io/static/v1?label=Ethereum&message=Truffle&color=orange&logo=Ethereum)
![Solidity](https://img.shields.io/static/v1?label=Solidity&message=Ethereum&color=green&logo=Solidity)

## Language

[简体中文](https://github.com/favorhau/Truffle-Ballot-Dapp/blob/main/README_zh.md) |
[Engish](https://github.com/favorhau/Truffle-Ballot-Dapp/blob/main/README.md)


## Overview

The Truffle-Ballot-Dapp is a Ethereum-Based Ballot demo, including the features like giving ballot to the person you want based on smart-contart and making sure that any address(voters) only have one ballot.

Front-End page is as follow:

[![ouAgm9.png](https://z3.ax1x.com/2021/11/28/ouAgm9.png)](https://imgtu.com/i/ouAgm9)

## Dependencies

1. **Npm** 

For more information , Get from https://nodejs.org/en/

2. **Metamask**

A crypto wallet & gateway to blockchain apps, Get from https://metamask.io

3. **Yarn(optional)**

Yarn is a package manager that doubles down as project manager, which can fix some bug from NPM.

## Quick Start

You should install the [Dependencies](#Dependencies) above before getting start.

1. Install Truffle globally and run the unbox command.

```bash
npm install -g truffle
```

2. Run the development console.
```
truffle develop
```

3. You can *alternatively* choose one step as follow.
- Compile and migrate the smart contracts. Note inside the development console we don't preface commands with truffle.(**Recommand**)
```
compile
migrate
```
- Using Ganache-CLI for build **(Alternatively)**.

> It's as easy as modifying the config file! Check out [the documentation](https://www.trufflesuite.com/docs/truffle/reference/configuration#networks) on adding network configurations. Depending on the port you're using, you'll also need to update line 29 of client/src/utils/getWeb3.js.


4. Start React pages

In the client directory, we run the React app. Smart contract changes must be manually recompiled and migrated.

```
cd client
```
And then ,

```
npm install
```
**or** if you have Yarn
```
yarn
```

5. Open the URL at Chrome or FireFox with metamask

You should login the Account with metamask and have a ballot.
To pay the gas you should have some ETH. You can import the privacy key in metamask and get about 100 ETH in your test network.

## Limitation

- [x] Adding new candidates
- [x] Anonymous Accounts to ballot
- [x] Privacy protect method

## To-Do-List
- [ ] Using random-response for ballot result
- [ ] Take some privacy method such as differential privacy (DP) to protect the Accounts' ballot result.