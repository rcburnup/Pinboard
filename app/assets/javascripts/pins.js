$(document).ready(function() {

  $('#pins').imagesLoaded(function() {
    $('#pins').masonry({
      itemSelector: '.box',
      gutterWidth: 20,
      isFitWidth: true
    })
  })

})