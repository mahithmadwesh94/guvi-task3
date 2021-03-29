//Convert all the strings to title caps in a string array 
let letterarr = ['A','B','C','D','E'];

//anonymous function
var oddNumbers = function(arr){
   
    for(let i=0;i<arr.length;i++){
        arr[i] = arr[i].toLowerCase();
    }
    return arr;
}

console.log(oddNumbers(letterarr).join(' '));//a b c d e


//arrow function

var oddNumbers1 = (arr)=>{
     for(let i=0;i<arr.length;i++){
        arr[i] = arr[i].toLowerCase();
    }
    return arr;
}

console.log(oddNumbers1(letterarr).join(' '));//a b c d e