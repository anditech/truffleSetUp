pragma solidity 0.5.12;

contract Helloandi {
    string message = "Hello Andi!";

    function getMessage() public view returns (string memory) {
        return message;
    }
    function setMessage(string memory newMessage) public payable {
        require(msg.value >= 1 ether);
        message = newMessage;
    }
}
