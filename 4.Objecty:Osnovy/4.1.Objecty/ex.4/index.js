let menu = {
    width: 200,
    height: 300,
    title: "My menu",
}

function multiplyNumeric(obj) {
    for (let key in obj) {
        obj[key] = typeof obj[key] === "number" ?
            obj[key] * 2 : obj[key];
    }
}

console.log(multiplyNumeric(menu));