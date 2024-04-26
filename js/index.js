function resultado() {
  d1 = document.getElementById("diametro").value;
  a1 = document.getElementById("altura").value;
  pi = 3.14;
  r1 = (d1 * d1 * pi * a1) / 4;
  r2 = r1.toFixed(3);
  ola = document.getElementById("aqui").innerHTML =
    "O resultado é de " + r2 + " Litros";
}
