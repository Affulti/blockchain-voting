var Election = artifacts.require("../contracts/Election.sol");

require('chai')
    .use(require('chai-as-promised'))
    .should();

contract("Election", function(accounts){

    describe("添加候选人:", () => {
        it("添加一个姓名为candidate_1, 简介为win!!!的新候选人", async () => {
            const election = await Election.deployed();

            let candidate_1 = await election.addCandidate("candidate_1","win!!!");
            let totalCandidate = await election.getTotalCandidate();
            totalCandidate.toString().should.equal("1");
        });
    });
});
