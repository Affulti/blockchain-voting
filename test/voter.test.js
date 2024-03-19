var Election = artifacts.require("../contracts/Election.sol");

require('chai')
    .use(require('chai-as-promised'))
    .should();

contract("Election", function(accounts){

    describe("投票人的注册:", () => {
        it("注册一个姓名为voter_1, 电话号码为11111111111,并验证他为合格投票人", async () => {
            const election = await Election.deployed();

            election.registerAsVoter("voter_1","11111111111");
            //为验证前
            let totalVoter = await election.getTotalVoter();
            totalVoter.toString().should.equal("0");        
        });
    });

    describe("验证投票人:", () => {
        it("验证投票人为合格投票人", async () => {
            const election = await Election.deployed();

            await election.verifyVoter(true,"0xAe54f10fA2ac821f3803e0f347542d7306592D29");
            //验证后
            let totalVoter_ = await election.getTotalVoter();
            totalVoter_.toString().should.equal("1");    
        });
    });

});
