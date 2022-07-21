





<?php 
if(isset($_POST['submit'])) {
    
    $to = 'ourmail@example.com'; 
    $from = $_POST['email']; 
    $subject ='Adlivetech Contact Form';
    $name = $_POST['name']; 
    $email = $_POST['email']; 
    $phone = $_POST['phonenumber'];
    $subject = $_POST['subject']; 
    $messag = $_POST['messag']; 
   

$message = '<html><body>';

$message .='<table>';
$message .='<tr><td>Name:</td><td>'. $name .'</td></tr>';

$message .='<tr><td>Email:</td><td>'. $email .'</td></tr>';

$message .='<tr><td>Phone:</td><td>'. $phone .'</td></tr>';

$message .='<tr><td>Subject:</td><td>'. $subject .'</td></tr>';

$message .='<tr><td>Message:</td><td>'. $messag .'</td></tr>';

$message .='</table>';

$message .='</body></html>';


$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "To: {$to}\r\n";
$headers .= "From: {$name} <{$from}>\r\n";
$headers .= "Reply-To: <{$to}>\r\n";
$headers .= "Subject: {$subject}\r\n";
$headers .= "X-Mailer: PHP/".phpversion()."\r\n";

mail($from, $subject, $message, $headers);
 
}

?>