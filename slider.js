$(document).ready(function () {
    var change_img_time = 3000,
    transition_speed = 400;
    var listItems = $("#slider").children('li'),
    dotItems = $('#dots').children('li'),
    listLen = listItems.length,
    current,
    changeTimeout;
    
    function moveTo(newIndex) {
      var i = newIndex;
      if (newIndex == 'prev') {
        i = (current > 0) ? (current - 1) : (listLen - 1);
      }
      if (newIndex == 'next') {
        i = (current < listLen - 1) ? (current + 1) : 0;
      }
      dotItems.removeClass('active')
        .eq(i).addClass('active');
  
      listItems.fadeOut(transition_speed)
        .eq(i).fadeIn(transition_speed);
      current = i;
      
      clearTimeout(changeTimeout);
      changeTimeout = setTimeout(function() { moveTo('next'); }, change_img_time);
    };
  
    $("#dots li").click(function () {
      var i = $('#dots li').index(this);
      moveTo(i);
    });

    moveTo('next');
  });