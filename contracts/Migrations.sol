// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

// 合约部署
contract Migrations {

    // 合约的所有者，初始值为合约创建者的地址
    address public owner;

    // 记录最后一次完成的迁移的版本号
    uint256 public last_completed_migration;

    // 限制访问权限的修饰符
    modifier restricted() {
        if (msg.sender == owner) _;
    }

    constructor() public{
        owner = msg.sender;
    }
  // 设置完成迁移的版本号
    function setCompleted(uint256 completed) public restricted {
        last_completed_migration = completed;
    }
}
