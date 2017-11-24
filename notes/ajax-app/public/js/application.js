// $(document).ready(function() {

//   // Event listeners
//   $('.post-container').on('click', '.vote-button', function(e){
//     // 1.Fresco yo estoy a cargo
//     console.log('Estoy a cargo')
//     e.preventDefault()

//     // 2.Recopilar Informacion
//     console.log('Informacion')
//     var url = this.href
//     var button = this

//     // 3.Crear un request con AJAX
//     console.log('Se crea el request')
//     var request = $.ajax({
//       method: "GET",
//       url: url,
//       data: {
//         error: false
//       }
//     })

//     // 4.Actualizar el DOM con la respuesta
//     request.done(function(response){
//       $(button).parent().find('.points').html(response.votes)
//     })

//     request.error(function(response){
//       console.log('Errror')
//       console.log(response)
//       $('.post-container').html(JSON.parse(response.responseText).valor)
//     })

//   })



//   // Event listener
//   $('form').on('submit', function(e){
//     e.preventDefault()

//     //Sacar la informacion
//     var formData = $(this).serialize()
//     // var title = $(this).find('input[name="title"]').val()
//     var url = this.action
//     //Ajax

//     $.ajax({
//       method: 'POST',
//       url: url,
//       data: formData
//     })
//     .done(function(response) {
//       // Actualizar el DOM
//       // Con partials
//       $('.post-container').append(response)

//       // Con JSON
//       $('.post-container').append(
//         `<article id='${response.post.id}'><a href='/posts/${response.post.id}/vote' class="fa fa-sort-desc vote-button"></a><h2><a href='/posts/${response.id}'>${response.post.title}</a></h2><p><span class="points">0</span><span class="username">${response.post.username}</span><span class="timestamp">0</span><span class="comment-count">${response.post.comment_count}</span><a class="delete" href='/posts/${response.post.id}'></a></p></article>`
//       )
//     })
//   })
// });















































// $(document).ready(function() {
//   $('#posts').on('submit', function(event) {
//     // Fresco yo mismo voy hacer el request
//     event.preventDefault()
//     console.log('Yo tengo el control')


//     // Sacar la informacion
//     var url = this.action
//     var title = this.title.value

//     // <form id="posts" method="post" action="/posts">
//     //   <input type="text" name="title" placeholder="title">
//     //   <input type="text" name="author" placeholder="title">
//     //   <input type="text" name="content" placeholder="title">
//     //   <input type="submit" value="submit new post">
//     // </form>

//     var formData = $(this).serialize()

//     // var title = $(this).find('input[name="title"]').val()
//     //Ajax
//     // Voy a hacer el request

//      $.ajax({
//         method: 'POST',
//         url: this.action,
//         data: formData
//      }).done(function(response) {
//         // var source = $('#post-template').html()
//         // var template = Handlebars.compile(source)
//         // var html = template(context)
//         // $('.post-container').append(html)
//         $(`a[href=/post/${response.id}/votes]`).remove()
//      }).fail(function(response) {
//         console.log('Estoy en el fail')
//      })

//   })


// // Event delagation
//   $('.post-container').on('click', '.vote-button', function(event) {

//     event.preventDefault()
//     // console.log('Paramos el a')

//     $.ajax({
//       method: 'GET',
//       url: this.href
//     }).done(function(response) {
//       $('.post-container').find(`#${response.id}`).find('.points').html(`${response.votes_count}`)
//     })

//   })

// })
