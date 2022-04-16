import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import { moveBall, shortcuts } from "./dom/teclado.js";
import countdown from "./dom/cuenta_regresiva.js";
import scrollTopButton from "./dom/boton_scroll.js";
import darkTheme from "./dom/tema_oscuro.js";
// import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
import userDeviceInfo from "./dom/deteccion-dispositivos.js";
import networkStatus from "./dom/deteccion_red.js";
import webCam from "./dom/deteccion_webcam.js";
import getGeolocation from "./dom/geolocalizacion.js";
import searchFilters from "./dom/filtro_busqueda.js";
import lottery from "./dom/sorteo_digital.js";
import slider from "./dom/carrusel.js";
import scrollSpy from "./dom/scroll_espia.js";
import smartVideo from "./dom/video_inteligente.js";
import contactFormValidations from "./dom/validaciones_formularios.js";
import speechReader from "./dom/narrador.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm(
    "assets/alarma-morning-mix.mp3",
    "#activar-alarma",
    "#desactivar-alarma"
  );
  countdown(
    "countdown",
    "Feb 13, 2022",
    "Feliz cumpleaños. Sigue aprendiendo!🤓"
  );
  scrollTopButton(".scroll-top-btn");
  // responsiveMedia(
  // "youtube",
  // "(min-width: 1024px)",
  // `<a href="https://youtu.be/hu7eG9MSWQA" target="_blank" rel="noopener">Ver video</a>`,
  // `<iframe width="560" height="315" src="https://www.youtube.com/embed/hu7eG9MSWQA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
  // responsiveMedia(
  // "gmaps",
  // "(min-width: 1024px)",
  // `<a href="https://goo.gl/maps/M6M2gcBSnAFPQQri8" target="_blank" rel="noopener">Ver mapa</a>`,
  // `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.7966975583995!2d-58.25068578518957!3d-34.76071377332802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32f8e6aa67d67%3A0x7589a7141e5a4658!2sCOVENDIAR%20ll%20sector%20B!5e0!3m2!1ses-419!2scl!4v1643420814132!5m2!1ses-419!2scl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`);
  responsiveTester("responsive-tester");
  userDeviceInfo("user-device");
  webCam("webcam");
  getGeolocation("geolocation");
  searchFilters(".card-filter", ".card");
  lottery("#winner-btn", ".participante");
  slider();
  scrollSpy();
  smartVideo();
  contactFormValidations();
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();
speechReader();
