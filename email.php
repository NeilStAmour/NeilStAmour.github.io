<?php
	$siteKey = '6LcHiAkTAAAAAE4sAYMiuobxfiOsSjtOCRG2rRGo'
	$secret = '6LcHiAkTAAAAAND2B6zOlUXbEFy_KF3EumsWMec9'

        $name;$email;$message;$captcha;
        if(isset($_POST['name']))
			$name=$_POST['name'];
        if(isset($_POST['email']))
			$email=$_POST['email'];
        if(isset($_POST['message']))
			$message=$_POST['message'];
        if(isset($_POST['g-recaptcha-response']))
			$captcha=$_POST['g-recaptcha-response'];

		
		mail("neil.stamour@gmail.com", "test", "testtest", "From: FirstName LastName <neil.stamour@gmailcom>");
		
        if(!$captcha){
          echo '<h2>Please check the the captcha form.</h2>';
				exit;
        }
        $response=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=6LcHiAkTAAAAAND2B6zOlUXbEFy_KF3EumsWMec9&response=".$captcha."&remoteip=".$_SERVER['REMOTE_ADDR']);
        if($response.success==false)
        {
			echo '<h2>You are spammer ! Get the @$%K out</h2>';
        }else
        {
			echo '<h2>Thanks for posting comment.</h2>';
			$sendMail = mail("neil.stamour@gmail.com", "test", $message);
        }
?>