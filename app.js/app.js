function about() {
    window.scrollTo(0, 350);
  };
  function portfolio(){
      window.scrollTo(0, 850);
  };
  function testi(){
      window.scrollTo(0, 2050);
  };

  window.onscroll = function() {myFunction()};

function myFunction() {
    var z = document.getElementById('up');
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      z.style.visibility = "visible";
  } else  {
      z.style.visibility = "hidden";
  }
  
z.addEventListener("click" ,function(){
    window.scrollTo(0,0);
});
};

function res() {
    var a = document.getElementById("res_nav");
    var b = document.getElementById("background");
    a.style.display = 'block';
    b.style.display = 'block';
};
function closs() {
    var c = document.getElementById("res_nav");
    var d = document.getElementById("background");
    c.style.display = 'none';
    d.style.display = 'none';
    
};