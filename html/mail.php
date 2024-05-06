<?php
header('Access-Control-Allow-Origin: *');
extract($_GET);
if(!($conn=mysqli_connect("localhost:3306","root",""))) {
    die("Could not establish connection with MySQL server");
}
if(!($database=mysqli_select_db($conn, "mydb"))) {
    die("Could not establish connection with database test");
}
$query = "SELECT password FROM allusers WHERE email = '".$email."'";
if(!($result=mysqli_query($conn, $query))) {
    die("Query execution failure");
}
$count = mysqli_num_rows($result);
if($count == 1) {
    $row = mysqli_fetch_assoc($result);
    $password = $row['password'];
    echo "<h1>Password for $email: $password</h1>";
} else {
    echo "<h1>No user found with email: $email</h1>";
}mysqli_close($conn);?>
