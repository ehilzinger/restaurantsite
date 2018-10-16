
$(document).click(function() {
    popOut();
});

function popUp() {
    var popup = document.getElementById("popup");
    popup.classList.add("show");
}

function popOut(){
  var popup = document.getElementById("popup");
  popup.classList.remove("show");
  
}
