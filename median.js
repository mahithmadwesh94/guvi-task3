//Return median of two sorted arrays of same size



let a = [0, 2, 3, 5, 9];
let b = [1, 4];

const median = (a1, a2) => {
    let x = a1.concat(a2);
    x.sort(function (a, b) {
        return a - b;
    });
    let len = x.length;

    return len % 2 === 0 ? (x[Math.floor(len / 2) - 1] + x[Math.ceil(len / 2)]) / 2 : x[Math.floor(len / 2)];

}

console.log(median(a, b));


var median1 = function (a1, a2) {
    let x = a1.concat(a2);
    x.sort(function (a, b) {
        return a - b;
    });
    let len = x.length;

    return len % 2 === 0 ? (x[Math.floor(len / 2) - 1] + x[Math.ceil(len / 2)]) / 2 : x[Math.floor(len / 2)];
}

console.log(median1(a, b));
