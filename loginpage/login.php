<?php
  include("database.php"); 
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Login Page</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body id="login">
    <div class="login">
    <form action="login.php" method="post">
        Username:
        <input type="text" name="username" placeholder="John Mayor"><br>
        Password:
        <input type="password" name="password"><br>
        <input type="submit" name="login" value="login">
    </form>
    New User?
    <a href="register.php">Signup</a>
    </div>
</body>
</html>

<?php

$username=$_POST["username"];
$password=$_POST["password"];

$sql="SELECT password FROM `user_details` WHERE username='$username'";
$result = mysqli_query($conn,$sql); 
foreach($result as $p){
    if(password_verify($password,$p["password"]))
    {
        header("Location:home.php");
    }
    
    else
    {
        echo "You don't have an account";
    }
}

mysqli_close($conn);
?> 