let browser = prompt("Введите название вашего браузера", '');
if (browser === "edge"){
    alert("You've got EDGE");
}else if (browser === "chrome" || browser === "firefox" 
        || browser === "safari" || browser === "opera"){
            alert("We support these browsers too");
}else{
    alert("We hope that this page looks ok");
}
