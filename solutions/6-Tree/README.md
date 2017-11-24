# Arbol de Naranjas Javascript

## Resumen

En este reto vamos construir una aplicación que agrupe todas las tecnologías presentes en el desarrollo de Front-end.

Tu reto sera modelar un árbol de naranjas. Nuestro árbol debe tener las siguientes funcionalidades:

* El Arbol puede envejecer
* Por cada año que el árbol envejece hasta llegar a su edad de dar frutos, este debe crecer de altura.
* Después de que este llega a su edad de dar frutos, este puede crear naranjas.
* El árbol genera un numero al azar de naranjas cada año, después de llegar a su edad de dar frutos.
* Cada naranja tiene un diámetro al azar
* Es posible recoger todas las naranjas que crezca el árbol durante el año
* Todas las naranjas que no se recojan antes de que el árbol crezca otro año, se mueren cuando este crece otro año
* El árbol muere después de llegar a su maxima edad, y no puede dar mas frutos después de esto.

Al final tu aplicación debería funcionar como la siguiente:

[Orange Tree](https://juan267.github.io/javascript_orange_tree/)

## Pasos


### Paso 0: Trabajando con Jasmine

Hemos escrito varias pruebas para ti usando una librería de javascript llamada Jasmine. Tu trabajo sera crear el código para hacer que estas pruebas pasen.

Para ver las pruebas abre el archivo `tests.html` en tu navegador. La primera vez que lo abras deberías ver la primera prueba fallando. Escribe el código en `app/javascripts/solution.js` para lograr que esta prueba pase. Luego ve al archivo `spec/solution-spec.js` y descomenta la siguiente prueba. Para descomentarla (cambia `xit` por  `it`) y continua trabajando.


### Paso 1: Javascript Objects VS Funciones constructoras

Tienes dos opciones de formular la solución de este reto:

- Opción 1: Objetos literales y funciones (Sin usar prototypes o funciones constructoras)

- Opción 2: Funciones Constructoras e instancias

Te sugerimos que pruebes creando la solución primero usando la opción 1 y luego hagas un refactor para pasar a la opción 2.

Al terminar de trabajar en este archivo deberías poder un árbol de naranjas, hacer que envejezca, crecer naranjas en el árbol y recoger sus frutas.

### Paso 2: La vista

Ahora vamos a volver nuestra aplicación interactiva, con una interfaz de usuario mediante la interacción con el DOM usando la librería jQuery. El código que modifica el DOM, deberá ser implementado en `view.js`.

Ya te hemos creado un esqueleto del html en el archivo `orange.html`, este lo puedes modificar a tu gusto.

* Escribe código que te permita `plantar` un árbol al presionar un botón. Este debería hacer un árbol visible en la pantalla.
Si ves en el div `#orange-tree-template`, te darás cuenta de que nada de lo que hay ahi sale todavía en la pantalla.
Podrías usar un poco de javascript para cambiar las propiedades de CSS y hacerlo aparecer.
Una vez que el árbol sea visible seria bueno deshabilitar el botón de plantar mas arboles.

* Escribe el código para hacer que el árbol envejezca al presionar un botón.
Si el árbol envejece lo suficiente como para empezar a dar frutos, deberían empezar a aparecer naranjas en el árbol (para esto usa la imagen de naranja en la carpeta `images`).
La edad del árbol debería aparecer en el elemento `p.age`.
El numero total de naranjas debería aparecer en el elemento `p.fruit-count`.

* Escribe el código que permita `recoger` una naranja al hundir un botón. Esto debería disminuir el numero de naranjas y eliminar una de las imágenes de naranja que hay en el árbol.

## Recursos

- [tryJasmine.com](http://tryjasmine.com)
- [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [Jasmine Documentation](http://pivotal.github.io/jasmine/)
- [Jasmine Cheat Sheet](http://www.cheatography.com/citguy/cheat-sheets/jasmine-js-testing/)
- [Jasmine jQuery](https://github.com/velesin/jasmine-jquery)
- [Another Jasmine Tutorial](http://evanhahn.com/how-do-i-jasmine/)
