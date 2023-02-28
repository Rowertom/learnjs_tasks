let connect = prompt("Кто там?", '');
if (connect === "админ"){
    let password = prompt("Пароль?", "");
    if (password === "я главный"){
        alert("Здравствуйте!!!")
    }else if(password === "" || password === null){
        alert("отменено");
    }else {
        alert("неверный пароль");
    }
}else if(connect === "" || connect === null){
    alert("отменено");
}else{
    alert("я вас не знаю!");
}