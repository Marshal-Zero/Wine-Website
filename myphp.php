<form id="two" method="POST" action="<?php $_SERVER['PHP_SELF'] ?>">
<fieldset id="personal">
<legend>Contact Information </legend>

<label for="lastname">name : </label>
<input name="name" id="lastname" type="text" placeholder="Please enter your name"
tabindex="1" /><br />

<label for="address">email : </label>
<input name="email" id="address" type="text" placeholder="Please enter your email"
tabindex="3" /><br />
</fieldset>
<br />
<fieldset id="current">
<legend>Your Message </legend>
<p>
<textarea name="message" cols="40" rows="10">
</textarea>
</p>
</fieldset>
<p>
<input id="button1" type="submit" value="Submit" name='submit' />
<input id="button2" type="reset" />
</p>
</form>

<?php

if (isset($_POST['submit'])) {

    $to = "info@maffan.com";
    $subject = "Contact Form";
    $name_field = $_POST['name'];
    $email_field = $_POST['email'];
    $message = $_POST['message'];

    $body = "From: $name_field\n E-Mail: $email_field\n Message:\n $message";

    echo "Thank you $name_field. Your data was sent to $to!";
    mail($to, $subject, $body);
    
} 
else {echo "Please enter your name";}
?>