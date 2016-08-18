"use strict";

// (function(){
function populatePage (inventory) {
  return new Promise (function(resolve, reject){
  var output = document.querySelector(".output")
  var results = "" //need variable to build string and push into innerHTML so it does not get closed automatically
// Loop over the inventory and populate the page
  inventory.forEach(function(car, i){ //argument in function(car) becomes the 'i' like in a regular for loop
    if (i % 3 === 0) { // starts a new row at the point to which your cards go to the next row (3 can be however many 'cards' you will have on each row)
      results += `<div class="row">`
    }
    results += `
      <div class="col-md-4 carCard" style="border-color: ${car.color}">
      <h3>${car.make}</h3>
      <h3>${car.model}</h3>
      <h3>${car.year}</h3>
      <h3>${car.price}</h3>
      <h3>${car.color}</h3>
      <h3>${car.purchased}</h3>
      <p>${car.description}</p>
      </div>
      ` //+= because each time you are reassigning results //need variable to build string and push into innerHTML so it does not get closed automatically

  if ((i + 1) % 3 === 0) {
    results += `</div>`
  }
  })
  output.innerHTML = results

  console.log(inventory)
  // Now that the DOM is loaded, establish all the event listeners needed
  // CarLot.activateEvents();
resolve()
})
}

// the promises way puts the callbck responsibility on the caller
CarLot.loadInventory()
.then(
  function (inventoryFromLoadInventoryResolve){
    return populatePage(inventoryFromLoadInventoryResolve);

  },
  function (reason){
    console.error('Something went wrong', reason)
  })
.then(function (){ //chaining if set up to return a promise from first function
  CarLot.activateEvents();

});



