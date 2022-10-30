<?php 
include'connect.php';
 $id=$_GET['add'];
 if(isset($_POST['nextstep'])){
	 $dob=$_POST['dob'];
	 $course=$_POST['course'];
	 $country=$_POST['country'];
	 $province=$_POST['province'];
	 $city=$_POST['city'];
	 $gender=$_POST['sex'];
	 $mobile=$_POST['mobile'];
	 $address=$country." ".$province." ".$city;
	 $sql="INSERT INTO student(sid,gender,dob,mobile,address,course) VALUES('$id','$gender','$dob','$mobile','$address','$course')";
		if(mysqli_query($con,$sql)){
			header("location:addinformation2?add2=$id");
		}
		else{
			echo"fail".mysqli_errno();
		}
		mysqli_close($con);
	 
 }
?>
<html>
<head>
<title>Student page</title>
<link rel="stylesheet" href='css/student.css'>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>
<body>
<div class='container1' style="height:160vh">
<div class='logo1' style="height:3%"></div>
<div class='nav1' style="height:7%">
<ul>
<li><a href="">Dashboard</a></li>
<li><a href="">apply school</a></li>
<li><a href="">login out</a></li>
</ul>
</div>
<div class='content1' style="height:86%">
<form style="width:55%;margin:auto" method='post'>
<div class="form-group">
    <p>Student Registration</p>
  </div>
  <div class="form-group">
  <?php
  // FETCHING DATA FROM DATABASE
 $result = "select * from user where uid=$id";
 $query=mysqli_query($con,$result);
 
$row = mysqli_fetch_array($query);
	$fname=$row['fullname'];
	?>
    <label for="exampleInputEmail1">Full name</label>
    <input type="email" class="form-control"value="<?php echo $fname; ?>" name="fname" id="exampleInputEmail1" aria-describedby="emailHelp" disabled>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Mobile</label>
    <input type="number" class="form-control" id="exampleInputPassword1" placeholder="enter date of birth" name='mobile'>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">gender</label>
	<select class="form-control" name='sex'>
	<option>Male</option>
	<option>Female</option>
	</select>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">DOB</label>
    <input type="date" class="form-control" id="exampleInputPassword1" placeholder="enter date of birth" name='dob'>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">course</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="enter course youu are applying for" name='course'>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Country</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="enter country name" name='country'>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">province</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="enter province" name='province'>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">city</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="enter city" name='city'>
  </div>
  
  <input type="submit" class="btn btn-primary" name="nextstep" value="next step"></input>
</form>
</div>
<div class='footer1' style="height:4%"></div>
</div>
</body>
</html>