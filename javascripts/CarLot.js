"use strict"; //makes javascript code run in less strict mode. add at the top of all js files

var CarLot = (function () {
  var inventory = [];
  var fillInventory = function(data){
    data.cars.forEach(function(element){
      inventory.push(element)
    })
  }
  return {
    getInventory: function () {
      return inventory
    },
    loadInventory: function () { //loadInventory is a function that immediately returns a promised object
      return new Promise(function (resolve, reject) {
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open('GET', 'inventory.json')
      inventoryLoader.send();

      inventoryLoader.addEventListener("load", function () {
        var data = JSON.parse(this.responseText)
        fillInventory(data);
        resolve(inventory); //no longer responsible for calling populatePage
      });
     });
    }
  }
})();