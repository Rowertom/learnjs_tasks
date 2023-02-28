function sumInput(){
    let arr = [];
    while(true){
        let num = prompt('Type number', 0);
        if (num === "" || num === null || !isFinite(num)){ 
            break;
        }
        arr.push(+num);
    }

    let sum = 0;
    for(let num of arr){
        sum += num;
    }

    return sum;
}

alert(sumInput());