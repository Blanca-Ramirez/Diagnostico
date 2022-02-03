function factorial() {
  var contenedor = document.getElementById("contenedor");
  contenedor.innerHTML = "";

  // Construir tabla
  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");

  // Añadir clases de table
  table.classList.add(
    "table",
    "table-striped", // Añade color a las filas
    "table-bordered", // Añade un borde
    "border",
    "border-dark", // Pone el borde de color negro
    "w-25"
  );

  // Añadir clases de thead
  thead.classList.add("table-dark"); // Cambia el color del background a negro

  table.appendChild(thead);
  table.appendChild(tbody);

  // Construir thead
  let header = table.insertRow();
  header.classList.add("text-center");

  let heading_1 = document.createElement("th");
  heading_1.innerHTML = "Iteración";

  let heading_2 = document.createElement("th");
  heading_2.innerHTML = "Expresión";

  let heading_3 = document.createElement("th");
  heading_3.innerHTML = "Valor";

  header.appendChild(heading_1);
  header.appendChild(heading_2);
  header.appendChild(heading_3);

  thead.appendChild(header);

  // Construir tbody
  var num = document.getElementById("factorial").value;

  let expresion = 1;
  let valor = 1;

  for (let index = 0; index < num; index++) {
    let row = tbody.insertRow();

    let cell = row.insertCell();
    cell.innerHTML = index + 1;
    cell.classList.add("text-center"); // Pone el texto centrado

    cell = row.insertCell();
    expresion += "*" + (index + 1);
    cell.innerHTML = expresion;
    cell.classList.add("text-start"); // Pone el texto a la izquierda

    cell = row.insertCell();
    valor *= index + 1;
    cell.innerHTML = valor;
    cell.classList.add("text-end"); // Pone el texto a la derecha
  }

  contenedor.appendChild(table); // Agrega la tabla al div
}

function searchKeyPress(e) {
  e = e || window.event;
  if (e.keyCode == 13) {
    document.getElementById("botonCalcular").click();
    return false;
  }
  return true;
}
