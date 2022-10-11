let arr = [-20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854, -520, -470]
arr.sort(function(a, b) { return a - b });
  let n = arr.length;
  let min = arr[1] - arr[0];
  let output = [];

  for (let i = 2; i < n; i++) {
    console.log("Value to subtract", arr[i])
    console.log(diff = (Math.abs(arr[i + 1] - arr[i])));
    if (diff < min) {
      min = diff;
      output = [arr[i], arr[i + 1]];
    } else if (diff == min) {
      output.push(arr[i], arr[i + 1]);
    }
  }
  //console.log(output);




    

