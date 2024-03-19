// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

contract Election {

    // 声明全局变量
    address public admin; // 主持人address
    uint256 candidateCount; // 候选人数量
    uint256 voterCount; // 投票人数量
    bool start; // 投票开始标志
    bool end; // 投票结束标志

    // 声明候选人的结构体
    struct Candidate {
        uint256 candidateId; // 候选人ID
        string header; // 候选人的姓名
        string slogan; // 候选人的简介
        uint256 voteCount; // 候选人的票数
    }


    // 声明投票人的结构体
    struct Voter {
        address voterAddress; // 投票人的地址
        string name; // 投票人的姓名
        string phone; // 投票人的电话号码
        bool isVerified; // 投票人是否已验证
        bool hasVoted; // 投票人是否已投票
        bool isRegistered; // 投票人是否已注册
    }

    // 声明投票的详细信息的结构体
    struct ElectionDetails {
        string adminName; // 主持人的名称
        string adminEmail; // 主持人的邮箱
        string adminTitle; // 主持人的身份
        string electionTitle; // 投票的名称
        string organizationTitle; // 组织的名称
    }  

    // 声明映射，用于存储候选人和投票人的详细信息
    mapping(uint256 => Candidate) public candidateDetails;
    mapping(address => Voter) public voterDetails;

    address[] public voters; // 用于存储投票人Address的数组

    ElectionDetails electionDetails; // 投票的详细信息

    // 声明修饰符，用于限制只有主持人可以访问某些函数
    modifier onlyAdmin() {
        require(msg.sender == admin);
        _;
    }

    // 构造函数，初始化默认值
    constructor() public {
        admin = msg.sender; //部署智能合约的人为主持人
        candidateCount = 0;
        voterCount = 0;
        start = false;
        end = false;
    }

    // 获取主持人地址
    function getAdmin() public view returns (address) {
        return admin;
    }

    // 获取投票的详细信息
    function getElectionDetails() public view
    returns(string memory adminName, 
            string memory adminEmail, 
            string memory adminTitle, 
            string memory electionTitle, 
            string memory organizationTitle
        ){
        return( electionDetails.adminName, 
                electionDetails.adminEmail, 
                electionDetails.adminTitle, 
                electionDetails.electionTitle, 
                electionDetails.organizationTitle
            );
    }

    // 获取候选人的数量
    function getTotalCandidate() public view returns (uint256) {
        return candidateCount;
    }

    // 获取投票人的数量
    function getTotalVoter() public view returns (uint256) {
        return voterCount;
    }

    // 获取投票的开始标志
    function getStart() public view returns (bool) {
        return start;
    }

    // 获取投票的结束标志 
    function getEnd() public view returns (bool) {
        return end;
    }

    //设置投票情况
    function setElectionDetails(
        string memory _adminName,
        string memory _adminEmail,
        string memory _adminTitle,
        string memory _electionTitle,
        string memory _organizationTitle
    )
        public
        // 只有主持人可以设置
        onlyAdmin
    {
        electionDetails = ElectionDetails(
            _adminName,
            _adminEmail,
            _adminTitle,
            _electionTitle,
            _organizationTitle
        );
        start = true; //开始投票
        end = false;
    }

    // 添加新的候选人
    function addCandidate(string memory _header, string memory _slogan)
        public
        // 只有主持人才可以添加
        onlyAdmin
    {
        Candidate memory newCandidate =
            Candidate({
                candidateId: candidateCount,
                header: _header,
                slogan: _slogan,
                voteCount: 0
            });
        candidateDetails[candidateCount] = newCandidate;
        candidateCount += 1;
    }

    // 投票人的注册
    function registerAsVoter(string memory _name, string memory _phone) public {
        Voter memory newVoter =
            Voter({
                voterAddress: msg.sender,
                name: _name,
                phone: _phone,
                hasVoted: false,
                isVerified: false,
                isRegistered: true
            });
        voterDetails[msg.sender] = newVoter;
        voters.push(msg.sender);
        voterCount += 1;
    }

    // 验证投票人
    function verifyVoter(bool _verifedStatus, address voterAddress)
        public
        // 只有主持人可以验证
        onlyAdmin
    {
        voterDetails[voterAddress].isVerified = _verifedStatus;
    }

    // 投票
    function vote(uint256 candidateId) public {
        require(voterDetails[msg.sender].hasVoted == false);
        require(voterDetails[msg.sender].isVerified == true);
        require(start == true);
        require(end == false);
        candidateDetails[candidateId].voteCount += 1;
        voterDetails[msg.sender].hasVoted = true;
    }

    // 结束投票进程
    function endElection() public onlyAdmin {
        end = true;
        start = false;
    }
}


