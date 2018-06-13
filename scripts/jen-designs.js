/*I wrapped the on click submit button call to wait for the document to be ready, mainly a safety precaution
*
* The variables rows and cols are created when submit is clicked so that they always grab the current value inside of them.
*
* event is passed in as a parameter to our anonymous function (this parameter is a sent automatically in callback functions and has a lot of useful tools).
* In this case we use event to prevent default behavior of the submit button. Which would refresh the page and never allow us to capture data of Grid Height/Width
*/
$(document).ready($('#submit').on('click', function (event) {
  event.preventDefault();
  // Select color input
  var paint = document.getElementById('colorPicker').value;

  // Select size input
  var rows = document.getElementById('inputHeight').value;
  var cols = document.getElementById('inputWidth').value;



  console.log(rows, cols); //just checking to see that the values are correct
  
  makeGrid(rows, cols); //passed in variable names as arguements to function call
}));
   

                  
function makeGrid(rows, cols) {
  /* I was trying to get this working with the style of code you were doing 
  *hence all the leftover variables.
  * I'm sure it is possible if you spend the time to figure it out.
  */
  var canvas = document.getElementById('pixelCanvas');
  
//  var trC = document.createElement('tr');
// I don't think you need the grid since pixelCanvas is already a table
//    var grid = document.createElement('table');
//    grid.className = 'grid';
  
  
  //I used a regular for loop here because for of was not adding more then a single row
  for (var r = 1; r <= rows; r++) {
//    document.getElementsByTagName("tr");
//    canvas.appendChild(trC);
    $('#pixelCanvas').append('<tr></tr>'); //append the html tr tags
    $('td').remove(); //remove extra td's added through each iteration
    
    for (var c = 1; c <= cols; c++) {
//      var trF = document.getElementsByTagName("tr");
      var tdC = document.createElement('td');
      $('tr').append(tdC);
    }
  }
}

/* You will need to eventually check somehow if a grid has already been created and then delete the previous grid if so before creating a new one if someone submits a new grid after having already made one*/

/* for the color picker you'll have to take the currently selected value and on a click within a td fill it with that currently selected color*/