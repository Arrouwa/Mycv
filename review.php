<?php 
include'connect.php';
 $id=$_GET['studentid'];
?>
<html>
<head>
<title>Student page</title>
<link rel="stylesheet" href='css/student.css'>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
<style>
#row11{
	color:black;
	width:140px;
	font-weight:bold;
}
#row22{
	border-bottom:1px dotted navy;
	
}
	

</style>
</head>
<body>
<div class='container1'>
<div class='logo1'></div>
<div class='nav1'>
<ul>
<li><a href="admin?studentid=<?php echo $id; ?>">Dashboard</a></li>
<li><a href="">apply school</a></li>
<li><a href="">login out</a></li>
</ul>
</div>
<div class='content1'>

<table  width='60%' align='center' height='60%' style="margin:30px auto;">
<?php
$sql="select * from student inner join user on user.uid=student.sid where uid=$id";
$result=mysqli_query($con,$sql);
$row=mysqli_fetch_array($result);


?>
<tr>
<td colspan='4' style="text-align:center;font-weight:bold;text-transform:capitalize;">Personal information</td>
</tr>
<tr id="row22">
<td id='row11'>student id</td>
<td><?php echo $row['uid']; ?></td>
<td></td>
<td ></td>
</tr>
<tr id="row22">
<td id='row11'>student name</td>
<td><?php echo $row['fullname']; ?></td>
<td id='row11'>student email</td>
<td><?php echo $row['email']; ?></td>
</tr>
<tr id="row22">
<td id='row11'>Mobile</td>
<td><?php echo $row['mobile']; ?></td>
<td id='row11'>Gender</td>
<td><?php echo $row['gender']; ?></td>
</tr>
<tr id="row22">
<td id='row11'>DOB</td>
<td><?php echo $row['dob']; ?></td>

</tr>
<tr id="row22">
<td colspan='6' style="text-align:center;font-weight:bold;text-transform:capitalize;">academic information</td>
</tr>
<tr id="row22">
<td id='row11'>class xx</td>
<td><?php echo $row['classxx']; ?></td>
<td id='row11'>boarding name</td>
<td><?php echo $row['boardingname']; ?></td>
</tr>
<tr id="row22">
<td id='row11'>percentage</td>
<td><?php echo $row['percentage']; ?></td>
<td id='row11'>Year passing</td>
<td><?php echo $row['yearpassing']; ?></td>
</tr>

</table>

</div>
<div class='footer1'></div>
</div>
</body>
</html>