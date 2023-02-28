arr = [1, -2, 3, 4, -9, 6];

function getMaxSubSum(array){
    maxSum = 0;
    currentSum = 0;

    for(let numb of arr){
        currentSum += numb;
        maxSum = Math.max(maxSum, currentSum);
        if ( currentSum < 0){
            currentSum = 0;
        }
    }
    return maxSum;
}

console.log(getMaxSubSum(arr));