// add solution here
function theBeatlesPlay(musicians, instruments) {
  var tempArray = [];
  
  for (let i = 0; i < musicians.length; i++) {
    tempArray.push(musicians[i] + " plays " + instruments[i]);
  }
  
  return tempArray;
}

function johnLennonFacts()