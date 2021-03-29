//Sum of all numbers in an array
let numarr = [11,12,13,14,15];

//anonymous function
var oddNumbers = function(arr){
    let total = 0;
    for(let i=0;i<arr.length;i++){
       total += arr[i];
    }
    return total;
}

console.log(oddNumbers(numarr));//65


//arrow function

var oddNumbers1 = (arr)=>{
    let total = 0;
    for(let i=0;i<arr.length;i++){
       total += arr[i];
    }
    return total;
}

console.log(oddNumbers1(numarr));//65


