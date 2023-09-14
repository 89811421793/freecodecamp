function chunkArrayInGroups(arr, size) {
    var group = [];
  
    var pos = 0;
  
    while(pos < arr.length) {
      group.push(arr.slice(pos, pos += size));
    }
  
    return group;
  
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);