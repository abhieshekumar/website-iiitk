<?php

    $email=$_POST["email"];
    $message=$_POST["message"];

    $time=date('Y-m-d H:i:s:u');
    $filename = md5(date('Y-m-d H:i:s:u'));
    $myfile = fopen($filename.".php", "w");
    $txt="<?php header('Location : index.php'); exit();?> Message : ".$message."Email : ".$email."Date : ".$time;
    fwrite($myfile, $txt);
    fclose($myfile);
?>