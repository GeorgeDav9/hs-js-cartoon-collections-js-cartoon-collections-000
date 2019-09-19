var dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"]

function dwarfRollCall(dwarves) {
  var dwarvesNames = [];
 
   for (var i = 0; i < dwarves.length; i < i++){
   dwarvesNames.push(`${i+1}. ${dwarves[i]} `)
 }
 return dwarvesNames.join ("")
  
}
var planeteerCalls = ["earth", "wind", "fire", "heart" ]

function summonCaptainPlanet(planeteerCalls){
   var newCalls = [];
   
   for (var i = 0; i < planeteerCalls.length; i++){
     var calls = planeteerCalls[i] + '!'; 
     var cappedCalls = calls.toUpperCase();
     newCalls.push(cappedCalls);
   }
   
   return newCalls;
  
}

  function longPlaneteerCalls(words) {
 
     for (var i = 0; i < words.length; i++) {
           if (words[i].length > 4) {
              return true;
     }
  }
    return false;
  }

function findTheCheese(foods) {
   for (var i = 0; i < foods.length; i++) {
      if (foods[i] === "gouda" || foods[i] === "cheddar" || foods[i] === "camembert") {
        return foods[i];
      }
   }
    return "no cheese!"
}  


function wordsWithB(words) { // [ "car", "apple", "bear", "bob"]
  for (var i = 0; i < words.length; i++) {
    if (words[i].charAt(0) === "b") {
      var wordsWithB = [];
      wordsWithB.push(words[i]);
      return wordsWithB;
    }
  }
  
  
}