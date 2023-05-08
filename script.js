$(document).ready(function() {
  $('.plus-btn').click(function() {
    var player = $(this).attr('id').split('-')[0];
    var score = parseInt($('#'+player+'-score').text()) + 1;
    $('#'+player+'-score').text(score);
  });

  $('.minus-btn').click(function() {
    var player = $(this).attr('id').split('-')[0];
    var score = parseInt($('#'+player+'-score').text()) - 1;
    $('#'+player+'-score').text(score);
  });

  $('#save-btn').click(function() {
    var scores = {};
    scores["Jonas"] = parseInt($('#jonas-score').text());
    scores["Peter"] = parseInt($('#peter-score').text());
    scores["Mama"] = parseInt($('#mama-score').text());
    scores["Papa"] = parseInt($('#papa-score').text());
    
    $.ajax({
      url: "/save-scores",
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify(scores),
      success: function(response) {
        console.log(response);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus, errorThrown);
      }
    });
  });
});
