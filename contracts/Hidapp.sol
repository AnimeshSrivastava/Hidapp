pragma solidity ^0.4.18;

contract Hidapp {
  // state variables
  address dataProvider;
  string name;
  string description;
  uint256 price;

  // store a report
  function storeReport(string _name, string _description, uint256 _price) public {
    dataProvider = msg.sender; // storing the address of the profile calling the storeReport function
    name = _name;
    description = _description;
    price = _price;
  }

  // display a Report
  function readReport() public view returns (address _dataProvider, string _name,
                      string _description, uint256 _price ){
      return(dataProvider, name, description, price);
    }
}
