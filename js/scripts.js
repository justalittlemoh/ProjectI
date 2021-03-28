

// code that runs, when page is loaded

$(document).ready($('.rounded').addClass('shadow'));
$(document).ready($('.carousel-item,.carousel-img').addClass('shadow'));
$(document).ready($('#introductionModal').modal('show'));



// onclick events

$('.activateContact').click(function() {
    $('#contactModal').modal('show');
});

$('#btnMailme').click(function() {
    $('#messageForm').toggle('slow');
    $('#btnMailme').attr("type","submit");
    $('#btnMailme').text('Submit').click(function(){
        $('#btnMailme').submit();
        $('#introductionModal').modal('toggle');
    });
});

