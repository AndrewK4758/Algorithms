let a = [3, 4];
let b = [24, 48];
let n = a.length;
let m = b.length;
let count = 0;
let factor = 1;

function getTotalX(a, b) {
    let potential = [],
        final = [];
    for (let i = a[a.length - 1]; i <= b[0]; i++) {
      if (a.every(x => i % x === 0)) potential.push(i);
    }
    for (let i = 0, len = potential.length; i < len; i++) {
      if (b.every(x => x % potential[i] === 0)) final.push(potential[i]);
    }
    return final.length;
  }