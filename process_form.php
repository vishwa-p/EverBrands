<?php
if ( $_SERVER[ 'REQUEST_METHOD' ] == 'POST' ) {
    $name = $_POST[ 'inputname' ];
    $email = $_POST[ 'inputemail' ];
    $phone = $_POST[ 'inputphone' ];
    $comment = $_POST[ 'inputcomment' ];

    // Configure your email settings here
    $to = 'patelvishwa1701@example.com';
    $subject = "Contact Form Submission from $name";
    $message = "Name: $name\nEmail: $email\nPhone: $phone\nComment: $comment";
    $headers = "From: $email";

    if ( mail( $to, $subject, $message, $headers ) ) {
        echo 'Thank you for your submission!';
    } else {
        echo 'Error: Unable to send email.';
    }
}
?>
