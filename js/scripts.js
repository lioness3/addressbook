
$(document).ready(function(){
$(".newcontact").submit(function(event){
  var name = $("input#name").val();
  var address = $("input#address").val();
  var number = $("input#number").val();


 $(".contacts").prepend("<ul>" + name + "</ul>" + "<li>" + address + "</li>" + "<li>" + number + "</li>");
 event.preventDefault()
})

});
