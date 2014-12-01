<?php
$mail = $_POST['mail'];

$name = $_POST['name'];

$text = $_POST['text'];

$to = 'contacto@pds.com.ve';

$name = htmlspecialchars($name, ENT_QUOTES);
$text = htmlspecialchars($text, ENT_QUOTES);
$name = stripslashes($name);
$text = stripslashes($text);
$message = '<html><body>';
$message .= '<h3>Nuevo mensaje de '.$name.' <a href="mailto:'.$mail.'">: '.$mail.'</a> </h3>';
$message .= '<p>'.$text.'</p>';
$message .= '</body></html>';
$subject = 'Formulario:'.$mail; 
$headers = 'From: Form - '.$name.' <form@pds.com.ve>' . "\r\n" . 
    'Reply-To:'.$mail.''. "\r\n" . 
    'X-Mailer: PHP/' . phpversion(); 
$headers .= "Reply-To: contacto@pds.com.ve" . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

$message = stripslashes($message);
if(mail($to,$subject,$message,$headers)){
echo "Gracias por contactarnos, te responderemos en breve.";
}
else{
echo "No pudimos enviar tu mensaje. Intenta más tarde";
}
?>