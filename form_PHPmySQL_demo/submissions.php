<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">

    <title>Test Submissions</title>
      
  </head>
  <body>
      

<?php  


 $link = mysqli_connect('jeremysarachan19342.ipagemysql.com', 'emailcollect', 'groupEmail48!','groupemail1') OR die (mysqli_connect_error());
 

$query = "SELECT * FROM emailform";
$result = mysqli_query($link,$query)
or die ('Error querying database.');

echo "<table class='table'>";
echo "<thead>";
echo "<tr>";
echo "<th scope'col'>Timestamp</th>";
echo "<th scope'col'>Name</th>";
echo "<th scope'col'>E-mail</th>";
echo "</tr></thead><tbody>";

while ($row = mysqli_fetch_array($result)){
$name = $row ['name'];
$timestamp=$row['date'];
$email = $row ['email'];


echo "<tr>";
echo"<td>$timestamp</td>";
echo "<td>$name</td>";
echo "<td>$email</td>";
echo"</tr>";
 }
echo"</table>";
   
   mysql_close($link);
?>

      


</body>
</html>