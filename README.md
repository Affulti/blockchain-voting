# Blockchain-Voting

基于[以太坊](https://ethereum.org/)的去中心化投票系统。

## 系统工作流程

对应用程序基本工作流程的简要说明。

- 主持人将通过在区块链网络 (EVM) 中启动/部署系统来创建一个投票实例，然后创建一个实例并开始投票，并填写投票的详细信息（包括投票人投票的候选人）。
- 然后可能的投票人连接到同一个区块链网络注册成为投票人。 用户成功注册后，他们各自的详细信息将发送并且显示在管理员面板（即验证页面）中。
- 然后主持人将检查注册信息（区块链帐户地址、姓名和电话号码）是否有效并与他的记录相符。 如果是，则主持人批准注册用户，使他们有资格参加投票并在选举中投票。
- 经主持人批准后的注册用户（选民）将投票投给感兴趣的候选人（从投票页面）。
- 一段时间后，根据选举的规模，主持人结束选举。 当发生这种情况时，投票结束，结果显示在结果页面顶部宣布获胜者。

## 搭建开发环境

### 要求

- [Node.js](https://nodejs.org)
- [Truffle](https://www.trufflesuite.com/truffle)
- [Ganache](https://trufflesuite.com/ganache/) (GUI)
- [Metamask](https://metamask.io/) (浏览器插件)

### 获取要求

1. 下载并安装**NodeJS**
  
   从[此处](https://nodejs.org)下载并安装Node.js

2. 使用 node packager manager (npm) 安装 **truffle**

    ```go
       npm install -g truffle
    ```

3. 下载并安装**Ganache**

   从[此处](https://trufflesuite.com/ganache/)下载Ganache可视化客户端，Windwos10进入设置-》更新和安全-》开发者选项，选择开发人员模式，打开PowerShell,运行
   ```powershell
   Add-AppPackage -Path .\appx安装包文件路径
   ```


4. 安装**metamask**浏览器扩展

    从 [此处](https://metamask.io/download)下载并安装 metamask。

### 配置项目进行开发

1. 启动计算机

2. 运行本地Ethereum区块链：在客户端打开Ganache GUI

3. 使用以下详细信息在浏览器上配置MetaMask

```
   新的 RPC URL: `http://127.0.0.1:7545` ( **ganache cli**使用 `port: 8545` , 如果要使用ganache cli ，同时也要更新文件：`truffle-config.js` )*

   Chain ID: `1337`
```

4. 从 ganache-gui 导入账号的助记词到浏览器上的MetaMask插件
5. 将智能合约部署到（本地）区块链网络（即 ganache-gui）

    ```shell
    # 在 blockchain-voting 目录
    truffle migrate
    ```

    > 注意：使用 `truffle migrate --reset` 会进行重新部署

6. 启动开发服务器（前端）

    ```shell
    cd client
    npm install 
    npm start
    ```

    > 如果在 `npm install` 期间遇到**错误**，请注意您可能需要从 [learn.microsoft.com/en-us/cpp/windows/latest-supported-vc- redist](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170)（这里是 X64 的直接下载链接：[aka.ms/ vs/17/release/vc_redist.x64.exe](https://aka.ms/vs/17/release/vc_redist.x64.exe)).


## 系统测试

### 智能合约测试

1. 下载
```
npm install  chai
npm install chai-as-promised
```

2. 要执行测试，执行下面的命令：
```
 truffle test 
```

3. 对单个文件进行测试
```
 truffle test ./test/voter.js
```


