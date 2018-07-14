var Hidapp = artifacts.require("./Hidapp.sol");

// test suite
contract('Hidapp', function(accounts){
  it("should be initialized with empty values", function() {
    return Hidapp.deployed().then(function(instance) {
      return instance.readReport();
    }).then(function(data) {
      assert.equal(data[0], 0x0, "dataProvider must be empty");
      assert.equal(data[1], "", "report name must be empty");
      assert.equal(data[2], "", "report description must be empty");
      assert.equal(data[3].toNumber(), 0, "report price must be empty");
    })
  });
});
