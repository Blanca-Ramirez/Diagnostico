function validar() {
  var username = document.getElementById("usuario").value;
  var password = document.getElementById("password").value;

  var usuarios = [
    { nombre: "admin", contraseña: "admin", genero: "m" },
    { nombre: "Blanca", contraseña: "1234", genero: "f" },
  ];

  for (const usuario of usuarios) {
    if (username == usuario["nombre"] && password == usuario["contraseña"]) {
      var mensaje = "Bienvenido";
      if (usuario["genero"] == "f") {
        mensaje = "Bienvenida";
      }
      alert(mensaje + " " + usuario["nombre"]);
      sessionStorage.setItem("username", usuario["nombre"]);
      window.open("pantallaPrincipal.html", "_self");
      return;
    }
  }

  alert("Credenciales Incorrectas");
}

function searchKeyPress(e) {
  e = e || window.event;
  if (e.keyCode == 13) {
    document.getElementById("botonIngresar").click();
    return false;
  }
  return true;
}
