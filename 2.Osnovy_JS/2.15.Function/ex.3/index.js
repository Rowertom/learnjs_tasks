function pow(x, n) {
    x = +prompt("Введите число x", "");
    n = +prompt("Введите степень n", "");
    if (n >= 1) {
        return alert(x ** n);
    } else {
        return alert("Степень не поддерживается")
    }
}
pow();