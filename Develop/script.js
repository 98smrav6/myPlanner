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
  });