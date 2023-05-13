<?php
include("database.php");
// 
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Page</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body >
    <form class="register" action="register.php" method="post">
        FirstName:
        <input type="text" name="firstname" placeholder="John"><br>
        LastName:
        <input type="text" name="lastname" placeholder="Mayor"><br>
        Username:
        <input type="text" name="username" placeholder="John Mayor"><br>
        Email:
        <input type="email" name="email" placeholder="johnmayor@gmail.com"><br>
        Password:
        <input type="password" name="password"><br>
        <input type="submit" name="register" value="Register">
    </form>
    Already a User?
    <a href="login.php">Login</a>
</body>
</html>

<?php

$firstname=$_POST["firstname"];
$lastname=$_POST["lastname"];
$username=$_POST["username"];
$email=$_POST["email"];
$password=$_POST["password"];
$password=password_hash($password,PASSWORD_DEFAULT);

$sql="INSERT INTO user_details(username,firstname,lastname,email,password)
VALUES ('$username','$firstname','$lastname','$email','$password')";
mysqli_query($conn,$sql);

// header("Location:home.php");
mysqli_close($conn);

?>