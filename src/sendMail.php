<?php

if(strcasecmp($_SERVER['REQUEST_METHOD'], 'POST') != 0){
    throw new Exception('Request method must be POST!');
}

$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';
if(strcasecmp($contentType, 'application/json') != 0){
    throw new Exception('Content type must be: application/json');
}

require 'lib/PHPMailer/PHPMailerAutoload.php';

$json = file_get_contents('php://input');
$obj = json_decode($json);

if(!is_object($obj)){
    throw new Exception('Received content contained invalid JSON!');
}

$mail = new PHPMailer;

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->setFrom('contacto@arquitecturamr.com');
$mail->addAddress('contacto@arquitecturamr.com');     // Add a recipient

$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Nuevo mensanje desde la WEB de ' . $obj->email;
$mail->Body    = 'Nombre: ' . $obj->name . '<br> Email: ' . $obj->email . '<br> Titulo: ' . $obj->title . '<br> Mensaje: ' . $obj->comment;
//$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}