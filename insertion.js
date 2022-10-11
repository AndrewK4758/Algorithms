let array = [12, 21, 53, 27, 845, 99, 255, 295, 5696, 62, 25559, 6, 2, 3523]
let start = 0;
let end = array.length - 1;
for (let i = start + 1; i <= end; i++) {
    //console.log("Outer loop values ", array[i])
    for (let j = i; j > start && array[j-1] > array[j]; j++) {
        //console.log("Inserted Loop", array[j])
        let temp = array[j-1];
        array[j-1] = array[j];
        array[j]=temp;
        console.log("Answers", temp)  
    } 
}