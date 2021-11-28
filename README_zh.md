# Truffle-Ballot-Dapp

![Node](https://img.shields.io/static/v1?label=react&message=Node.js&color=blue&logo=react)
![Truffle](https://img.shields.io/static/v1?label=Ethereum&message=Truffle&color=orange&logo=Ethereum)
![Solidity](https://img.shields.io/static/v1?label=Solidity&message=Ethereum&color=green&logo=Solidity)

## 语言

简体中文 |
[Engish](https://github.com/favorhau/Truffle-Ballot-Dapp/blob/main/README.md)


## 概述

`Truffle-Ballot-Dapp` 是一个基于以太坊网络的投票示例，具备基于智能合约的参与者投票以及单人单票的投票特征。并且程序采用了ABI(Application Binary Interface)用于连接合约层与应用层。`克隆`此仓库可以获取更多细节内容。
 
其前端页面如下：

[![ouAgm9.png](https://z3.ax1x.com/2021/11/28/ouAgm9.png)](https://imgtu.com/i/ouAgm9)

## 依赖

1. **Npm** 

想要取得安装信息 , 请从 https://nodejs.org/en/ 获取

2. **Metamask**

一个加密的区块链钱包, 请从 https://metamask.io 获取

3. **Yarn(可选)**

`Yarn`是一个`Javascript`的包管理工具，其修补了许多NPM的缺陷。

## 快速开始

你需要在开始前安装上述的[依赖](#依赖)

1. 全局安装Truffle

```bash
npm install -g truffle
```

2. 运行Truffle部署

```
truffle develop
```

3. 可以选择的选取下面一个步骤

- 打包并部署合约，如果在truffle命令行里面则不需要在前面加上`truffle`.**(推荐)**
```
compile
migrate
```

- 使用`Ganache-CLI`部署合约 **(可选)**
> 需要对`truffle-config.js`文件进行修改,可以参考[官方文档](https://www.trufflesuite.com/docs/truffle/reference/configuration#networks)的内容添加网络参数。根据你所采用的端口，编辑`client/src/utils/getWeb3.js`第29行的代码更新端口参数。

**⚠️如果使用此步，则可跳过第2步，并且运行下面的打包部署命令

```
truffle compile
truffle migrate
```

4. 启动React前端页面

我们需要正确地先将合约进行打包部署，而后进入`client`目录运行前端代码。

```
cd client
```
然后，

```
npm install
```
**或** 如果你安装了`Yarn`
```
yarn
```

5. 启动带有`metamask`的浏览器如`Chrome`或`FireFox`

你需要通过metamask来登录账户。为了支付Gas费用，你可以在metamask中导入私钥从而得到接近100个测试网络中的以太坊。

## 限制

- [ ] 新增参与者
- [ ] 匿名投票
- [ ] 投票的隐私保护

## 后期工作
- [ ] 对投票结果加入随机响应机制
- [ ] 使用一些隐私保护手段如差分隐私对投票进行保护

## 参考

https://github.com/truffle-box/react-box

https://goethereumbook.org/en/

https://zhuanlan.zhihu.com/p/38452188