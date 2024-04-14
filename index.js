let menuVisible = false;

// Función que oculta o muestra el menú
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function seleccionar() {
  // Oculto el menú una vez que selecciono una opción
  document.getElementById("nav").classList = "";
  menuVisible = false;
}

// Función que aplica las animaciones de las habilidades
function efectoHabilidades() {
  var skills = document.getElementById("skills");
  var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("javascript");
    habilidades[1].classList.add("htmlcss");
    habilidades[2].classList.add("photoshop");
    habilidades[3].classList.add("wordpress");
    habilidades[4].classList.add("drupal");
    habilidades[5].classList.add("comunicacion");
    habilidades[6].classList.add("trabajo");
    habilidades[7].classList.add("creatividad");
    habilidades[8].classList.add("dedicacion");
    habilidades[9].classList.add("proyect");
  }
}

// Detecto el scrolling para aplicar la animación de la barra de habilidades
if (typeof window !== 'undefined') {
  // El código que hace referencia a `window` aquí solo se ejecutará en un entorno de navegador
  window.onscroll = function () {
      efectoHabilidades();
  };
}

// Función para redireccionar a una URL
function redireccionar(URL) {
  window.location.href = URL;
}

// Función para mostrar información de la imagen al pasar el mouse sobre ella
function showImageInfo(element) {
  // Verifica si el contenedor ya tiene la clase "active"
  if (!element.classList.contains("active")) {
    // Agrega la clase "active" para mostrar la información de la imagen
    element.classList.add("active");

    // Establece un temporizador para ocultar la información después de un tiempo
    setTimeout(function () {
      element.classList.remove("active");
    }, 3000); // Cambia el valor 3000 (en milisegundos) según sea necesario
  }
}
