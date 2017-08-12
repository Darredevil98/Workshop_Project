/*alert("Hello");
alert("What is a webpage?");
alert("A miserable little pile of code. But enough talk, HAVE AT YOU!");
alert(5 - "8");
alert(4+"20");
$(document).ready(function(){
  alert($("#modify-item").text());
})*/
/*$(document).ready(function(){
  $("goal-button").click(function(){
    $("#goals").append("<li class='item'>" + $("#new-goal").val() + "</li>");
    $("new-goal").val("");
  })
})*/
$(document).ready(function() {
  $("#goal-button").click(function() {
    $("#goals").append("<li class='item'>" + $("#new-goal").val() + "</li>");
    $("#new-goal").val("");
  })
})
