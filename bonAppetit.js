const bill = [3, 10, 2, 9];
let k = bill[1];
let b = 12;


const bonAppetit = () => {
    let sum = bill.reduce((a, b) => a + b, 0);
    let annaPrice = (sum - k) / 2;
    if (b - annaPrice > 0) {
        let difference = b - annaPrice;
        console.log(difference)
    } else if (b === annaPrice) {
        console.log('Bon Appetit')
    }
}

/*console.log(*/bonAppetit(bill, k, b)