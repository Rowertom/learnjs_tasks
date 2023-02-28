let currentArr = [5, 3, 8, 1];

function filterRange(arr, a, b){
    let array = arr.filter(item => item >= a && item <= b);
    return array;
}

console.log(filterRange(currentArr, 1, 4));