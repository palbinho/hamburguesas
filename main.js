$(document).ready(function() {
    $('.card-body').hide();
    $('.btn-primary').click(function(event) {
        event.preventDefault(); 
        alert('¡Gracias por tu pedido!');
    });
});

$(document).ready(function() {
    $('.btn-light').hover(
        function() {
            $(this).text('¡Haz clic para ver más!');
        },
        function() {
            $(this).text('Explorar Menú');
        }
    );
});

$('.card').click(function() {
        $(this).find('.card-body').slideToggle();
    });
    
 $('.container').hide().fadeIn(2000);
