# AJAXificando Hacker News

## Objetivos de Aprendizaje

  * Hacer request de AJAX usando jquery

## Resumen

En este reto vamos a convertir una aplicación de Sinatra que ya funciona, en una que realize request de AJAX. Al final del reto los usuarios de tu aplicación podrán  crear Posts y Votos y eliminarlos de forma asíncrona.

Para empezar clona este repositorio y corre el comando `bundle install` para instalar las dependencias.

## Pasos

### Paso 1 : Votos

Haz click en el botón para hacer un `upvote`, te darás cuenta de que la pagina se recarga y el nuevo voto aparece. Tu trabajo sera hacer que esta operación se ejecute de forma asíncrona al usar AJAX.

Si lo haces de forma correcta, el acto de hacer click en el botón de upvote no va a causar que la pagina se refresque, si no que únicamente va a actualizar el valor de la cuenta de votos de ese post y al mismo tiempo enviar el request a nuestra base de datos.

Este es el flujo básico de este request hecho con AJAX:

1. Tienes que adjuntar un `event listener` a los `a` tag que tengan href con el valor: `/posts/{{post._id}}/votes`
2. Para impedir que el navegador se refresque, el callback del event listener debe prevenir el comportamiento `default` del navegador al hacer click en un link.
3. Debe después hacer el request de Ajax al servidor, a la url que esta en el atributo `href` del `a` tag.
4. El servidor va actualizar la cantidad de votos del post especifico en la base de datos.
5. El servidor va a enviar una respuesta.
6. El cliente, después de ser notificado que ha recibido la respuesta exitosamente del servidor, puede manipular el `DOM`. En este caso por ahora solo queremos cambiar el color de la flecha a que se ponga `roja`.
7. Si refrescas la pagina deberías ver que el numero de votos del `post` se incrementa.

Esta es la sintaxis básica de como realizar un AJAX request:

```javascript
  // $.ajax recibe un objeto de opciones para configurar el request
  var ajaxRequest = $.ajax({
    // Estos dos atributos determinan la ruta del servidor a la que ira el request.
    url: "/foo",
    type: 'GET',
    // El atributo 'data' determina que datos enviamos al servidor
    // El servidor podrá acceder a estos valores mediante el objeto 'params'
    // Si el servidor solo necesita conocer la información que contiene la URL, este atributo no es necesario.
    data: { bar: 'baz' }
  })

  // La función .done recibe un callback, el cual solo se va a dispara si el servidor response con un código de estado exitoso. El callback recibe como argumento la respuesta del servidor.
  ajaxRequest.done(someCallbackFunction)

  // como .done, la funcione .fail se dispara cuando el servidor responde con un codigo de estado de error.
  ajaxRequest.fail(someOtherCallbackFunction)
```

Que es lo que necesita saber el servidor par actualizar el numero de votos en el servidor? Que necesita saber el cliente para actualizar el DOM ? Como hace el cliente para obtener los datos que le envía el servidor y viceversa ?

### Paso 2 : Votos ahora si enserio

Perfecto, en este punto votar exitosamente un post hace que la flecha cambie de color. Peor el punto es que el numero de votos aumente!

Tu tarea en este paso es actualizar el numero de votos de forma asíncrona cuando alguien hace click en esa flecha.

Para este paso va a ser necesario que cambiemos un poco de código que vive en nuestro servidor.

si vas al archivo `app/controllers/index.rb` vas a encontrar una ruta que dice lo siguiente:

```ruby
get '/posts/:id/vote' do
  post = Post.find(params[:id])
  post.votes.create(value: 1)
  redirect "/posts"
end
```

Esta ruta en este estado actual, toma el `id` del post que estamos upvoteando de la URL, e invoca la función `votes.create` la cual te retamos a que investigues de donde viene. Una vez votes.create hace su trabajo, redireccionamos al `root`.

Como tal este comportamiento funciona muy bien para cuando nuestra aplicación no era asincrónica pero ahora la verdad no es nada util. Tu trabajo sera cambiar el código dentro de esta ruta, explícitamente para que en vez de redireccionar al `root` nos envíe como respuesta el `post_votes` en formato `JSON`.

algo por el estilo de:

``` ruby
content_type :json
{id: post.id, points: post.votes}.to_json
```

De esta forma en el cliente vamos a recibir `post_votes` como un objeto con todas las propiedades de este incluyendo su numero de votos actual y el `id` para saber a cual de los post tenemos que actualizar en el DOM.

### Paso 3 : Borrando

Ahora que ya tienes los votos funcionando. Hagamos que la el link para borrar un post funcione.

Al hacer click en `delete post` ese post debería borrarse de la base de datos, y como consecuencia desaparecer del DOM.

Recuerda el flujo para lograr que esto funcione. Primero tenemos que disparar un request al servidor a esta ruta:

```ruby
delete '/posts/:id' do
  # Implementar la lógica de esta ruta.
end
```

Esta ruta igual que la anterior necesita que le hagamos cambios para que funcione de manera asincrónica. Que se te ocurre que debería devolver, Que posible información te serviría tener en el cliente para actualizar el DOM ? Recuerda que el servidor puede responder con `strings`, `JSON` o incluso con `HTML`. En la carpeta `views` tenemos el archivo `_post.erb` sera que te puede servir para algo ?

Una vez que sepas que te serviría que devolviera el servidor, ve al código del cliente e implementa loss cambios necesarios que tienes que hacer en el DOM.


### Release 3 : Creando Posts

Uff borrando terminado, ahora nos aproximamos a tu reto mas difícil, crear un Post. Como podrás haber notado al final de la pagina se encuentra un formulario para crear un Post. Este funciona pero no lo hace de forma Asincrónica.

Para hacer el cambio deberas lograr que al hacer el `ajax` request este envíe los datos dentro del formulario a la ruta para crear un post. Para lograr esto investiga como funciona el la función de jQuery `.serialize()`.

Igual que en el paso anterior vas a tener que hacer modificaciones a esta ruta

```ruby
post '/posts' do
  Post.create( title: params[:title],
               username: Faker::Internet.user_name,
               comment_count: rand(1000) )
  redirect '/posts'
end
```

Y muy seguramente tendrás que usar el partial `_post.erb`.

Una vez tengas la respuesta del servidor lista, actualiza el DOM de forma necesaria.

### Release 4 : Estas seguro que todo funciona?

Excelente, creaste un nuevo post!, Pero funciona su botón de `upvote`, funciona la `delete post` para borrarlo? probablemente no :(

Hay muchas formas de solucionar este problema. [La implementación de event delegation de jQuery](https://learn.jquery.com/events/event-delegation/) puede ser util.

### Release 5 : Validaciones

Actualmente los usuarios pueden crear `post` con títulos en blanco. Deberías prevenir que el usuario no pueda hacer esto.

Para lograr esto tendrás que modificar el código en las rutas de forma que antes de crear el `post` valides que la información que te enviaron era correcta. Si no lo es debes enviar una respuesta al cliente con un código de error dentro del rango de los `400`lo que quiere decir error del cliente. Si no te acuerdas muy bien de tus códigos HTTP [HTTP status cats](https://www.flickr.com/photos/girliemac/sets/72157628409467125/) están al rescate.

La funcione `$.ajax` al recibir una respuesta con un código dentro de los `400` va a dispara el callback de `fail`. Dentro de este deberías actualizar el DOM mostrándole al usuario donde estuvo su error.
