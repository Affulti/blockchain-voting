// 导入智能合约 Migrations
const Migrations = artifacts.require("Migrations");

// 部署智能合约
module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
