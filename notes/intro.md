# Introduction to JavaScript AKA: ECMAscript


- Lenguaje pequeño diseñado para ser incluido en diferentes entornos -- como el navegador
- Provee control programatico sobre el DOM
- Orientado a Objetos
  - Propiedades y metodos pueden ser añadidos dinamicamente a los objetos
  - Cadena de Prototipos
  - Funciones como ciudadanos de primer nivel
- Typeado Dinamico
  - No hay que decir el tipo para crear una variable
  - Se le puede dar a una variable diferentes tipos de valor
- comentarios con `\\`
- Expresiones terminan con ;

### Tipos Primitivos

- `number`
  - `parsetInt()` y `parseFloat()`
- `string`
  - `+` y o string templates  para concatenación de strings
  - `length`
  - `charAt`, `indexOf`, `lasIndexOf`, `concat`, `split`, `slice`, `substr`, `toUpperCase`.
- `boolean`
- `null`
- `undefined`
- Equality
  - `==`
  - `===` stric equal

### Variables

- palabra clave `var` para declarar variables
- Si no se usa la palabra `var` la variable queda global. PELIGROSO!
- Scope
  - local: disponible solo dentro de funcion donde se define
  - global: disponible en cualquier lado
  - No hay scope por bloque *Hasta hace poco*
- Variables Globales
  - El scope global es el `window` para los navegadores. `window.variable_name`
- Constantes
  - Palabra clase `const`

### Loops

- `for` loop
  - of
  - in
- `while`
- `do .. while`

### Arrays

- Indices empeizan desde 0
- metodos:
  - `push`, `pop`, `concat`, `join`, `shift`, `unshift`, `slice`, `splice`, `reverse`, `sort`
  - `indexOf`, `lastIndexOf`, `forEach`, `map`, `filter`, `every`, `some`


### Objetos Literales (Hashes)

- Listas de pares llave/valor
- Pueden ser nesteados
- Accediendo a valores
  - Sintax de array `[]`
  - Syntax de `.`
- `(for .. in ..) { .. }` para iterar sobre Objeto

### Funciones

- Declaracion
- Invocacion
- Parametros
- Pueden ser llamadas recursivamente
- Functional scope
- Funciones anonimas


### Interaccion con el DOM

- Que es el DOM?
- Con javascript tienes cuntrol de CRUD completo sobre los nodos del DOM
- Podemos pegarnos a cualquier evento de la pagina
- Encontrando Nodos
    - `document.getElementById()`
    - `document.getElementsByTagName()`
    - `document.getElementsByClassName()`
    - `document.queryselector()`
    - `document.queryselectorall()`
- Actualizando Nodos
    - `element.innerHTML`
    - `element.attribute`
    - `element.setAttribute()`
    - `element.style.attribute`
- Añadiendo/removiendo nodos
    - `document.createElement()`
    - `document.removeChild()`
    - `document.appendChild()`
    - `document.replaceChild()`
    - `document.write(text)`
- Agregando `event handlers`
    - `element.addEventListener(event_name, function)`
    - EXCEPT IE 6-8 has `element.attachEvent` instead

### La consola

- `console.log`

## Recursos
- Common JS mistakes: http://www.w3schools.com/js/js_mistakes.asp
- JS best practices: http://www.w3schools.com/js/js_best_practices.asp
- HTML DOM events: http://www.w3schools.com/jsref/dom_obj_event.asp
- Strict equality: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_when_to_use_them
- Regular expressions in JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
- Web API: https://developer.mozilla.org/en-US/docs/Web/API/document

- Mozilla Developer Network JavaScript Resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript
