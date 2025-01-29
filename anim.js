// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "no, esta noche va mal", time: 24 },
  { text: "vuelvo a casa sin fe ", time: 26 },
  { text: "Otro fin sin ganar", time: 28 }, 
  { text: "Que esta huye tu sombra", time: 34 },
  { text: "Hasta huye tu sombra", time: 35 },

  { text: "Hasta huye tu sombra", time: 38 },
  { text: "Te veo caminando en el bar", time: 47 },
  { text: "Bailando el vals", time: 49 },
  { text: "y yo todo un galán", time: 53 },
  { text: "Que asta vine con flores", time: 57 },
  { text: "Hasta vine con flores", time: 58 },
  { text: "Te he traido mil flores", time: 60 },
  { text: "Soñe", time: 70 },
  { text: "Nunca soltabas mi mano", time: 72 },
  { text: "", time: 74 },
  { text: "", time: 81 },
  { text: "", time: 84 },
  { text: "", time: 86 },
  { text: "", time: 0 },
  { text: "", time: 0 },
  { text: "", time: 153 },
  { text: "", time: 158 },
  { text: "", time: 164 },
  { text: "", time: 169 },
  { text: "", time: 176 },
  { text: "", time: 183 },
  { text: "", time: 188 },
  { text: "", time: 140 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);