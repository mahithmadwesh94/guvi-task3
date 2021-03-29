//Remove duplicates from an array


let arr = [1, 1, 2, 3, 4];


var removeDuplicate = function (arr) {
    let tempSet = new Set(arr);

    return tempSet;
}

console.log(removeDuplicate(arr));

var removeDuplicate1 = (arr) => {
    return new Set(arr);
}

console.log(removeDuplicate1(arr));