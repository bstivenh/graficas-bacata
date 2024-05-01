$('#enviar-info').click(function(){
    var email_client    = $('#email-client').val();
    var name_client     = $('#name-client').val();
    var phone_client    = $('#phone-client').val();
    var company_client  = $('#company-client').val();
    var message_client  = $('#message-client').val();

    var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;

    
    if($('#termin-client').is(":checked")){
        
        if (regex.test($('#email-client').val().trim())) {
            if(name_client != null && phone_client != null && message_client) {

                var data = {
                    email_client:   email_client,
                    name_client:    name_client,
                    phone_client:   phone_client,
                    company_client: company_client,
                    message_client: message_client
                };
                $('#response-alert-icode').removeClass('hidden');
                $.post("data/enviarCorreo.php", data, function(html_message){
                    $('#response-alert-icode').html(html_message);
                });

            } else {
                // Campos sin diligenciar
                var html_message = '<div class="alert alert-warning text-center" role="alert">Hay campos sin diligenciar</div>';
                $('#response-alert-icode').removeClass('hidden');
                $('#response-alert-icode').html(html_message);
            }
    
        } else {
            // Correo no valido
            var html_message = '<div class="alert alert-warning text-center" role="alert">Correo no valido</div>';
            $('#response-alert-icode').removeClass('hidden');
            $('#response-alert-icode').html(html_message);
        }

    } else {
        // No se selecciono el termino y condiciones
        var html_message = '<div class="alert alert-warning text-center" role="alert"> Error no acepto los Términos y Condiciones</div>';
        $('#response-alert-icode').removeClass('hidden');
        $('#response-alert-icode').html(html_message);
    }
});