const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    if(strokes == 1) return "Hole-in-one!";  //array index  return names[0]
      else if(strokes <= par -2) return "Eagle"; //array index return names[1]
      else if(strokes == par -1) return "Birdie"; //array index  return names[2]
      else if(strokes == par) return "Par"; //array index  return names[3]
      else if(strokes == par + 1) return "Bogey"; //array index return names[4]
      else if(strokes == par + 2) return "Double Bogey"; //array index  return names[5]
      else if(strokes >= par + 3) return "Go Home!";//array index return names[6]

return "Change Me";
}
golfScore(5, 4);