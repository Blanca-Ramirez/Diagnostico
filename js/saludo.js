function welcome() {
  var username = sessionStorage.getItem("username");

  if (username == null) {
    username = "usuario";
  }

  var saludo = "¡Buen día, " + username + "! 🌞";

  document.getElementById("saludo").innerHTML = saludo;
}
