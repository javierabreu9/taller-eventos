function mostrarMensaje() {
    alert("Hola! Soy el div");
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const divConBtn = document.querySelector(".divbtn");
    divConBtn.addEventListener("click", mostrarMensaje);
  });
  
  