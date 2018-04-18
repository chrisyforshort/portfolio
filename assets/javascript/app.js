$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.scrollspy').scrollSpy({
      scrollOffset: 90,
      throttle: 80,
      activeClass: 'activenow' 
    });
  });
