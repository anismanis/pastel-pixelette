// Select color input
// select size input
var height, width, color;

// Scripts waiting until HTML page is ready(eg:the document is loaded completely)
$(document).ready(function() {
    // When size is submitted by the user, call makeGrid()
    $('#sizePicker').submit(function makeGrid(grid) {
        // Empty grid to start over
        $('table tr').remove();
        // Set the grid dimensions from input value
        var height = $('#inputHeight').val();
        var width = $('#inputWidth').val();
        // Loop over each row
        for (var i = 1; i <= height; i++) {
            $('table').append('<tr></tr>');
            // Loop over each column
            for (var j = 1; j <= width; j++) {
                $('tr:last').append('<td></td>');
                $('td').attr("class", 'cells');
            }
        }
        // Prevent default submit behavior 
        grid.preventDefault();
        // Add current color to clicked cell
        $('.cells').click(function(paint) {
            // Getting the color input value.
            var color = $('#colorPicker').val();
            if ($(this).attr('style')) {
                $(this).removeAttr('style')
                // Add input color to cell's background  
            } else {
                $(paint.target).css('background-color', color);
            }

        });
    });
});