<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    // cargar Composer's autoloader
    require '../vendor/autoload.php';

    $nameClient     = $_POST['name_client'];
    $emailClient    = $_POST['email_client'];
    $phoneClient    = $_POST['phone_client'];
    $companyClient  = $_POST['company_client'];
    $messageClient  = $_POST['message_client'];

    // Instaciar phpmailer
    $mail = new PHPMailer();

    try {
        //Server settings
        $mail->CharSet    = "UTF-8";
        $mail->Encoding   = "quoted-printable";
        $mail->isSMTP();                                            // Send using SMTP
        $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
        $mail->Username   = 'mensajes.icodemachine@gmail.com';                     // SMTP username
        $mail->Password   = 'Rrfv1010';                               // SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
        $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
    
        // Quien recibe
        $mail->setFrom('ceo@icodemachine.com', 'Contacto página web');
        $mail->addAddress('comercial@icodemachine.com', 'Comercial');  
        $mail->addAddress('ceo@icodemachine.com', 'Ceo');    // Add a recipient
        $mail->addReplyTo('comercial@icodemachine.com', 'Información');
    
        // Contenido
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = 'Contacto desde la página web';
        $mail->Body    = 'La siguiente persona esta interesada en los servicios de iCodeMachine <br> 
                          Nombre: '.$nameClient. ' <br>
                          Teléfono: '.$phoneClient.' <br>
                          Email: '.$emailClient.' <br>
                          Empresa: '.$companyClient. '<br>
                          Mensaje: '.$messageClient.'<br>';
        $mail->AltBody = 'La siguiente persona esta interesada en los servicios de iCodeMachine <br> 
                          Nombre: '.$nameClient. ' <br>
                          Teléfono: '.$phoneClient.' <br>
                          Email: '.$emailClient.' <br>
                          Empresa: '.$companyClient. '<br>
                          Mensaje: '.$messageClient.'<br>';
    
        $mail->send();

        $message = '<div class="alert alert-success text-center" role="alert">Tu mensaje ha sido enviado! </div>';
        echo $message;
    } catch (Exception $e) {
        $message = '<div class="alert alert-warning text-center" role="alert">El mensaje no se pudo enviar. Mailer Error: '. $mail->ErrorInfo .'</div>';
        echo $message;
    }

?>