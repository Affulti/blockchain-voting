var Election = artifacts.require("../contracts/Election.sol");

require('chai')
    .use(require('chai-as-promised'))
    .should();

contract("Election", function(accounts){

    describe("获取主持人地址:", () => {
        it("主持人地址默认是部署地址，也就是Ganache的index=0的address", async () => {
            const election = await Election.deployed();

            let admin = await election.getAdmin();
            admin.toString().should.equal("0x88076fafacE55C7F771B7ca0589C5C843b4a9560");
        });
    });

    describe("获取候选人的数量:", () => {
        it("刚开始部署时,没有候选人,所以为0", async () => {
            const election = await Election.deployed();
            
            let totalCandidate = await election.getTotalCandidate();
            totalCandidate.toString().should.equal("0");

        });
    });

    describe("获取投票人的数量:", () => {
        it("刚开始部署时,没有投票人,所以为0", async () => {
            const election = await Election.deployed();
            
            let totalVoter = await election.getTotalVoter();
            totalVoter.toString().should.equal("0");

        });
    });

    describe("获取投票的开始标志:", () => {
        it("刚开始部署时,开始标志为false", async () => {
            const election = await Election.deployed();
            
            let start = await election.getStart();
            start.toString().should.equal("false");

        });
    });

    describe("获取投票的结束标志:", () => {
        it("刚开始部署时,结束标志为false", async () => {
            const election = await Election.deployed();
            
            let end = await election.getEnd();
            end.toString().should.equal("false");
        });
    });

});
