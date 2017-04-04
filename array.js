function createArray(){
    var candyArray = ["snickers", "hundred grand", "kitkat", "skittles"];
    return candyArray;
  }
//
//
function addElementToArray(films){
    films.push("A Christmas Story");
    return films
  }
//
function accessElementFromArray(states){
    return states[2];
  }
//
function replaceElementInArray(names){
  names[1] = "Carter";
  return names
}
//
function removeElementFromArray(dishes){
  dishes.splice(2, 2, "Roast Chicken");
  return dishes
}
//
function iterateArray(numbers){
     var newNums = []
     numbers.forEach(function(n){
       newNums.push(n+5)
     })
   return newNums
}
