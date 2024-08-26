<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize input data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Set up the email
    $to = "1foxgameing@gmail.com";  // Your email address
    $subject = "New Contact Form Submission";
    $body = "You have received a new message from your website contact form.\n\n".
            "Here are the details:\n\nName: $name\n".
            "Email: $email\n\nMessage:\n$message";
    $headers = "From: noreply@yourdomain.com\r\n";  // Replace with your domain email
    $headers .= "Reply-To: $email\r\n";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send the message.";
    }
}
?>
