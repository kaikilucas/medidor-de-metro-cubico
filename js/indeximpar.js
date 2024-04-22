function resultado() {
    let num1 = prompt('Digite um numero: ')
    if (num1 % 2 <= 0) {
        alert(num1 + " é par")
    } else {
        alert(`${num1} é impar`)
    }
}