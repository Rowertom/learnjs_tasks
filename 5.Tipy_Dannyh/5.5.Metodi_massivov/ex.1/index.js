function camelize(str){
    let arr = str.split('-');
    arr = arr.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1));
    arr = arr.join('');
    return arr;
}

console.log(camelize("background-color"));