# Carreras de Javascript

## Resumen

En este proyecto vamos a construir un pequeño juego de javascript. Van a existir dos jugadores, y ellos van a competir corriendo sus carros hasta la meta.

Cada jugador avanzara su carro al hundir repetidamente alguna tecla del teclado. Por ejemplo el jugador 1 puede avanzar su carro al hundir la tecla 'q' mientras que el jugador 2 lo hace al hundir la teclas 'p'.

Para este reto va ser muy importante saber como manejar los eventos que genera el navegador por medio del uso de [jQuery][].

Al terminar este proyecto deberías tener algo que se comporte como el siguiente ejemplo: [Javascrtipt-racer](https://juan267.github.io/javascript-racer/)

Este es solo un esqueleto de la funcionalidad, la idea es que tu lo mejores para que sea vea como un juego que realmente alguien estaría motivado a usar.

## Pasos


### Paso 0: Crea los archivos

En este reto no te vamos a dar ningún tipo de archivo para empezar, tendrás que escribir todos los archivos de HTML, CSS y JavaScript que necesites y juntarlos.

Puedes empezar creando el tablero de juego donde nuestros usuarios van a competir. Existen muchas formas de hacer esto pero lo mas básico seria hacer algo de este estilo:

```html
<table class="racer_table">
  <tr id="player1_strip">
    <td></td>
    <td class="active"></td>
    <td></td>
    <td></td>
    ... etc ...
  </tr>
  <tr id="player2_strip">
    <td></td>
    <td></td>
    <td></td>
    <td class="active"></td>
    ... etc ...
  </tr>
</table>
```

Luego CSS, podrías darle unos estilos:


```css
.racer_table td {
  background-color: white;
  height: 20px;
  width: 20px;
}

.racer_table td.active {
  background-color: black;
}
```

Para actualizar la posición del jugador seria suficiente con añadir la clase `active` al `td` apropiado. Existen muchas otras maneras de lograr justo este mismo resultado esta es simplemente una sugerencia.

Usa [normalize.css][] para evitar estilos cambiantes por navegador.

### Paso 1: Añade Javascript

Necesitamos una manera en que javascript pueda actualizar el estado del tablero. Crea unas funciones de javascript que actualizan la posición de algún jugador al ser invocadas. Puedes darle la posición actual del jugador a la función como `input` y esta debe actualizar el HTML para reflejar la nueva posición.

se vería algo como esto:

```javascript
update_player_position('player1', 10);
```

No olvides poner este Javascript en un archivo separado, y usa la consola del navegador para debuguear tu aplicación.

### Paso 2: Pega tus funciones a eventos del teclado

Es hora de hacer el juego interactivo. Use el evento [keyup][] para detectar cuando un jugador a presionado una tecla. Una posible forma de hacer esto seria la siguiente:


```javascript
$(document).ready(function() {
  $(document).on('keyup', function(event) {
    // Detecta que tecla se hundió e invoca la función adecuada
    // Googlea 'jquery keyup what key was pressed' si no sabes como hacer esto
  });
});
```

### Paso 3: Crea los estados de inicio y fin de juego

El ultimo paso es crear un estado de juego de `inicio` y `fin`, de forma que podamos reiniciar el juego y declarar un ganador cada vez que este termine.

Añade un botón que de `reiniciar` el cual solo se puede presionar cuando exista un ganador. Al hundir este botón el juego debe revertir a su estado de `inicio`

## Recursos

* [jQuery][]
* [normalize.css][]
* [Documentación para: keyup][keyup]


[jQuery]: http://learn.jquery.com/about-jquery/
[normalize.css]: http://necolas.github.com/normalize.css/
[keyup]: http://api.jquery.com/keyup/
