$('video').on('click', function(){
   $("body").append('<p id="hello">Hello World</p>')
   $("#hello").hide()
   $("#hello").fadeIn('40000')
})