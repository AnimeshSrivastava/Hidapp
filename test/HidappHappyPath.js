var Hidapp = artifacts.require("./Hidapp.sol");

// test suite
contract('Hidapp', function(accounts){
  var hidappInstance;
  var dataProvider = accounts[1];
  var reportName = "Cline";
  var reportDescription = "Description for report Cline";
  var reportPrice = 10;

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

    it("should store a report", function() {
      return Hidapp.deployed().then(function(instance) {
        hidappInstance = instance;
        return hidappInstance.storeReport(reportName, reportDescription, web3.toWei(reportPrice, "ether"), { from: dataProvider})
      }).then(function() {
        return hidappInstance.readReport()
      }).then(function(data) {
        assert.equal(data[0], dataProvider, "data provider must be" + dataProvider);
        assert.equal(data[1], reportName, "report name must be" + reportName);
        assert.equal(data[2], reportDescription, "report description must be" + reportDescription);
        assert.equal(data[3].toNumber(), web3.toWei(reportPrice, "ether"), "report price must be" + dataProvider);
    });
  });
});
