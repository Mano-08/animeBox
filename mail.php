<?php 

$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['message'];
$to = "m------@gmail.com";
$subject = "ANIME SUGGESTION";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message;
$headers = "From: sugg@animeBox.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:notificationForm.html");
?>