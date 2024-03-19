// 导入智能合约 Election
const Election = artifacts.require("Election");

// 部署智能合约
module.exports = function (deployer) {
  deployer.deploy(Election);
};
