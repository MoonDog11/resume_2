<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "juanherrera0625@gmail.com";
    $subject = "Mensaje desde el formulario de contacto";
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $mensaje = $_POST["mensaje"];
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $mensaje, $headers)) {
        echo "<p>¡El mensaje se envió correctamente!</p>";
    } else {
        echo "<p>Ocurrió un error al enviar el mensaje.</p>";
    }
}
?>
