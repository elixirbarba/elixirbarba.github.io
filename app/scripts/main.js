var frontinvale = function() {

  var init = function() {
    removeLoading();
    closeNavOnClick();
    resizeNavOnScroll();
    rellax();
  },

  rellax = function () {
    var rellax = new Rellax('.rellax', {
      center: true
    });
  },

  resizeNavOnScroll = function() {

    var header = document.getElementById('header');

    document.addEventListener("scroll", function(){
      if(document.body.scrollTop>80){
        header.classList.add('small')
      } else{
        header.classList.remove('small')
      }
    });
  },

  removeLoading = function() {
    setTimeout(function () {
      document.body.classList.remove('loading');
    }, 2000);
  },

  closeNavOnClick = function() {
    var nav = document.getElementsByTagName('nav')[0];
    var ul = nav.getElementsByTagName('ul')[0];
    ul.addEventListener('click', function (e) {
      document.getElementById('menu-control').checked = false;
    });
  };

  return {
    init
  };

}();

window.onload = frontinvale.init;
