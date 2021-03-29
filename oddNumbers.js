//Print odd numbers in an array
let numArray = [1,2,3,4,5,6];

//anonymous function
var oddNumbers = function(arr){
    let tempArray = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            tempArray.push(arr[i]);
        }
    }
    return tempArray;
}

console.log(oddNumbers(numArray).join(' '));// 1 3 5


//arrow function

var oddNumbers1 = (arr)=>{
    let tempArray = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            tempArray.push(arr[i]);
        }
    }
    return tempArray;
}

console.log(oddNumbers1(numArray).join(' '));// 1 3 5