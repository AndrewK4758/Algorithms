let arr = [1, 2, 3, 4, 5];
let n = 2; //number of places to move left

const rotateLeft = () => {

    for (let i = 0; i < arr.length; i++) {
        if (i < n) {
           arr.push(arr.shift())
        }
    }
    return arr
};

console.log(rotateLeft())