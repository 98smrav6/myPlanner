$(document).ready(function() {
    // save button clicks
    $('.saveBtn').on('click', function() {
      // get nearby values
      var value = $(this)
        .siblings('.description')
        .val();
      var time = $(this)
        .parent()
        .attr('id');
  
      // save in localStorage
      localStorage.setItem(time, value);
  
      // Show notification that item was saved to localStorage by adding class 'show'
      $('.notification').addClass('show');
  
      // Timeout to remove 'show' class after 5 seconds
      setTimeout(function() {
        $('.notification').removeClass('show');
      }, 5000);
    });
      // loop over time blocks
    function hourUpdater() {
        var blockHour = parseInt(
            $(this)
              .attr('id')
              .split('-')[1]
          );

       // check to see if we've moved past this time
       if (blockHour < currentHour) {
        $(this).addClass('past');
      } else if (blockHour === currentHour) {
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });

});