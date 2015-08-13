// jQuery DOM maniuplation

$(document).on('ready', function() {

  $('#start').on ('click', function(){
    $('#questions')
      .append("<p><strong>"+questionArr[0]+"</strong></p>");
    for (var i = 0; i < optionsArr.length; i++) {
      for (var j = 0; j < optionsArr[j].length; j++) {
        $('#questions')
        .append('<input class="option" type="radio" name="question1" value=1> '+optionsArr[i][j]+'<br>');
      }
    }
  });

});


// $('input[name=question1]:checked').val();



