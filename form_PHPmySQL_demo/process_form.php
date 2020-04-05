  
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    

    <title>Collect E-mail Form</title>
     
  </head>
  <body>
    <div class="container">
        
    
        
     
<div class="container-fluid ">
<?php 
    
function removeQuotes($temp2){
    $temp1 = str_replace('"', "", $temp2);
    $temp= str_replace("'", "", $temp1); 
    return $temp;
}




$name=$_POST['name'];
     
if (!empty($name)){

        $link = mysqli_connect('jeremysarachan19342.ipagemysql.com', 'emailcollect', 'groupEmail48!','groupemail1') OR die (mysqli_connect_error());
               
   
$name=removeQuotes($_POST['name']);
$theemail=removeQuotes($_POST['email']);

//email part
$to = "jsarachan@sjfc.edu";
$subject = "Submission Received";
$headers = "From: jeremysarachan@gmail.com";    
$emailTxt="You received a submission from ".$name.".";
mail($to,$subject,$emailTxt,$headers);
    

$q = "INSERT INTO emailform (name,email) VALUES ('$name','$theemail')";
echo ($q);
 
$r = mysqli_query($link,$q);
mysqli_close($link);

    echo("<h3>Thank you for your submission ".$name.".</h3");
    

}

?> 






</div>
        </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

</body>
</html>
