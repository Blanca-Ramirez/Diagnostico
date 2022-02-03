const campoNumerico = document.getElementById("factorial");
const botonCalcular = document.getElementById("botonCalcular");

campoNumerico.addEventListener("keydown", function (evento) {
  const teclaPresionada = evento.key;
  const teclaPresionadaEsUnNumero = Number.isInteger(parseInt(teclaPresionada));

  const sePresionoUnaTeclaNoAdmitida =
    teclaPresionada != "ArrowDown" &&
    teclaPresionada != "ArrowUp" &&
    teclaPresionada != "ArrowLeft" &&
    teclaPresionada != "ArrowRight" &&
    teclaPresionada != "Backspace" &&
    teclaPresionada != "Delete" &&
    teclaPresionada != "Enter" &&
    !teclaPresionadaEsUnNumero;
  const comienzaPorCero =
    campoNumerico.value.length === 0 && teclaPresionada == 0;

  if (sePresionoUnaTeclaNoAdmitida || comienzaPorCero) {
    evento.preventDefault();
  }
});

botonCalcular.addEventListener("click", function (evento) {
  if (!/^[1-9][0-9]?[0-9]?$/.test(campoNumerico.value)) {
    campoNumerico.value = "";
    alert("El limite es 999");
    return;
  }
  factorial();
});
