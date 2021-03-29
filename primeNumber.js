// Return all the prime numbers in an array

let arr = [1, 2, 3, 4, 6];

//anonymous function
var primeNumberArray = arr.filter((x) => {
    let isPrime = true
    if (x === 1 || x === 2 || x === 3) {
        return x;
    } else if (x < 0) {
        return null;
    } else if (x % 1 === 0 && x % x === 0) {

        for (let i = x; i <= x; i++) {
            if (x % i === 0) {

                isPrime = false;
            }
        }
    }

    if (isPrime) {
        return x;
    }

})

console.log(primeNumberArray);

//array function
var prime1 = (arr) => {
    let isPrime = true


    let finalArray = []

    for (let i = 0; i < arr.length; i++) {
        let x = arr[i]
        if (x === 1 || x === 2 || x === 3) {

            finalArray.push(x);
        } else if (x < 0) {
            break;
        } else if (x % 1 === 0 && x % x === 0) {

            for (let i = x; i <= x; i++) {
                if (x % i === 0) {

                    isPrime = false;
                }
            }
            if (isPrime) {
                finalArray.push(x);
            }
        }

    }
    return finalArray;
}
console.log(prime1(arr))