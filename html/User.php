<?php
header('Access-Control-Allow-Origin: *');
 extract($_GET);
 $query="select email from allusers where email=\"".$email."\"";
 $query="select email from allusers where email='varshini@gmail.com'";
 if(!($conn=mysqli_connect("localhost:3307","root","")))
  {
  	die("Could not establish connection with MySQL server");
  }
 if(!($database=mysqli_select_db($conn, "mydb")))
  {
  	die("could not establish connection with database test");
  }
 if(!($result=mysqli_query($conn, $query)))
  {
  	die("Query execution failure");
  }
$count=mysqli_num_rows($result);
if($count==1)
  {
  	   echo "<h1> $email is already taken.. Try Someother..</h1> ";
  }
else 
  {
  	  echo "<h1> Available for taken </h1>";
  }
  mysqli_close($conn);?>
