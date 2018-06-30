// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var getHeight, getWidth;

getHeight = $('#inputHeight');
getWidth = $('#inputWeight');

$("#submit").on("click", function makeGrid(event) {
  var r = $("#inputHeight").val();
  var c = $("#inputWeight").val();
  $("table").empty();
  /*var grid = $('table');
  var tr = '<tr></tr>';
  var td = '<td></td>';*/
  for (var i = 0; i < r; i++) {
    $("table").append("<tr></tr>");
    for (var j = 0; j < c; j++) {
      $("tr:last-child").append("<td></td>");
    }
  }

  $("table tr td").on("click", function() {
    $(this).css("background-color", $("#colorPicker").val());
  });
  event.preventDefault();
  return false;
});