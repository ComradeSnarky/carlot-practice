var CarLot = (function () {
  var inventory = [];

  return {
    getInventory: function () {
      return inventory
    },
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open('GET', 'inventory.json')
      inventoryLoader.addEventListener("load", function () {
        inventory = JSON.parse(this.responseText).cars //puts everything that comes back from loadInventory into empty array variable above.  .cars goes into the object and pulls just the array
        callback(inventory)
      });
      inventoryLoader.send()
    }
  };

})();