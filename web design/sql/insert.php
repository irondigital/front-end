
<!--2)insert.php-->
<?php
if(isset($_POST['save']))
{
$link=mysqli_connect("localhost","root","","mydb");
$dt= date('Y-m-d', strtotime($_POST['dt']));
$str="insert into emp values ($_POST[txtno],'$_POST[txtname]','$_POST[txtjob]','$_POST[txtmgr]','$dt',
	$_POST[txtsal],'$_POST[txtcom]','$_POST[txtdept]')";
if(mysqli_query($link,$str))
	header("Location:show.php");
else
	echo "record not inserted plz check query..".$str;
}
?>
<html>
<body>
	<center>
<form action="" method="post" style="margin: 10% 0 0 0 ">
Empno: <input type="text" name="txtno"><br><br>
Name:<input type="text" name="txtname"><br><br>
Job: <input type="text" name="txtjob"><br><br>
Mgr:<input type="text" name="txtmgr"><br><br>
Hire Date: <input type="date" name="dt" value="<?php echo date('Y-m-d'); ?>"><br><br>
Salary:<input type="text" name="txtsal"><br><br>
Comm:<input type="text" name="txtcom" ><br><br>
Dept No: <input type="text" name="txtdept"><br><br>
<br><br>
<input type="submit" name="save" value="Insert">
</form>
</center>
</body>
</html>