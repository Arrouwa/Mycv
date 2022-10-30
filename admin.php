<?php 
include'connect.php';
?>
<html>
<head>
<title>Student page</title>
<link rel="stylesheet" href='css/student.css'>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>
<body>
<div class='container1'>
<div class='logo1'></div>
<div class='nav1'>
<ul>
<li><a href="">Dashboard</a></li>
<li><a href="">apply school</a></li>
<li><a href="">login out</a></li>
</ul>
</div>
<div class='content1'>
<center>
<table class="table table-sm" style='width:70%;' align='center'>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Full Name</th>
      <th scope="col">Email</th>
      <th scope="col">Joining date</th>
	  <th scope="col">Apply</th>
    </tr>
  </thead>
  <tbody>
  <?php
  $id=$_GET['studentid'];

  // FETCHING DATA FROM DATABASE
 $result = "select * from user where uid=$id and  status='' ";
 $query=mysqli_query($con,$result);
 



while ($row = mysqli_fetch_array($query)) {
	$fname=$row['fullname'];
	$email=$row['email'];
	$year=$row['join_date'];

?>
    <tr>
      <th scope="row">1</th>
      <td><?php echo $fname; ?></td>
        		<td><?php echo $email;?></td>
        			<td><?php echo $year;?></td>
	  <td><a href="addinformation?add=<?php echo $id; ?>">add information</a></td>
    </tr>
	<?php
				}
			?>
  </tbody>
</table>
</center>
</div>
<div class='footer1'></div>
</div>
</body>
</html>