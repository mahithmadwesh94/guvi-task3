//Return all the palindromes in an array

let arr = ['ABC', 'aaa', 'ABA', 'DAD', 'MOM'];

var palin1 = function (arr) {


    arr.forEach((x) => {
        let tempArr = [];

        let tempString = '';
        for (let i = 0; i < x.length; i++) {
            tempArr.push(x[i]);
        }

        for (let i = 0; i < x.length; i++) {
            tempString += tempArr.pop();
        }


        if (x === tempString) {
            console.log(x);
        }
    });
}


palin1(arr);


var palin2 = (arr) => {
    arr.forEach((x) => {
        let tempArr = [];

        let tempString = '';
        for (let i = 0; i < x.length; i++) {
            tempArr.push(x[i]);
        }

        for (let i = 0; i < x.length; i++) {
            tempString += tempArr.pop();
        }


        if (x === tempString) {
            console.log(x);
        }
    });
}

palin2(arr);
