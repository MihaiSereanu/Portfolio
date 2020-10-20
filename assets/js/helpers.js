$(document).ready(function() {
  var arrow = document.getElementById('directional');
  arrow.addEventListener("click", loadPage)

  function loadPage() {
      var checker = document.querySelector(".loaded");
      if (checker === null) {
        $("#loader").load("assets/js/pg1.html");
        arrow.setAttribute("class", 'fa fa-angle-double-up');
      } else {
        arrow.addEventListener("click", closePage)
      }
    }

  function closePage() {
    var checker = document.querySelector(".loaded");
    if (checker !== null) {
      $(".loaded").remove();
      arrow.setAttribute("class", 'fa fa-angle-double-down');
      arrow.addEventListener("click", loadPage);
    }
  }

});
