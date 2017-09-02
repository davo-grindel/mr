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

if (!filter_var($obj->email, FILTER_VALIDATE_EMAIL)) {
    $error = "Invalid email format";
    http_response_code(503);
    print $error;
    return;
}

if(ctype_space($obj->name) || ctype_space($obj->title) || ctype_space($obj->comment)){
    $error = "White spaces";
    http_response_code(503);
    print $error;
    return;
}

if(empty($obj->name) || empty($obj->title) || empty($obj->comment)){
    $error = "Empty Fields";
    http_response_code(503);
    print $error;
    return;
}

$mail = new PHPMailer;

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->setFrom('info@arquitecturamr.com');
$mail->addAddress('info@arquitecturamr.com');     // Add a recipient

$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Nuevo mensanje desde la WEB de ' . $obj->email;
$mail->Body    = 'Nombre: ' . $obj->name . '<br> Email: ' . $obj->email . '<br> Titulo: ' . $obj->title . '<br> Mensaje: ' . $obj->comment;
//$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

if(!$mail->send()) {
    print 'Message could not be sent.';
    print 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    print 'Message has been sent';
}