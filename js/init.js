(function($){
  $(function(){

    $('.sidenav').sidenav();

    // pour le slider
      $('.slider').slider({
        fullwidth:true,
        indicators:false,
        heigth:500,
      });
    //les trois points sur le slider
      $(document).ready(function(){
        $('.slider').slider();
  
      });


      //pour le scrollspy

      $(document).ready(function(){
        $('.scrollspy').scrollSpy();
      });
  }); // end of document ready
})(jQuery); // end of jQuery name space

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')
 
next.addEventListener('click', function() {
let items = document.querySelectorAll('.item')
document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
  let items = document.querySelectorAll('.item')
  document.querySelector('.slide').prepend(items[items.length - 1])
  })
