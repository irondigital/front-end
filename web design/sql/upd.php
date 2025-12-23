<!--3) upd.php -->
<?php
$link=mysqli_connect("localhost","root","","mydb");
$no=$_GET['id'];
$str="select * from emp where empno=".$no;
$result=mysqli_query($link,$str);
$row = mysqli_fetch_row($result);
?>
<html>
<body>

<center>
<form action="update.php" method="post" style="margin: 10% 0 0 0 ">
Empno: <input type="text" name="txtno" value='<?=$no?>'><br><br>
Name:<input type="text" name="txtname" value='<?=$row[1]?>'><br><br>
Job: <input type="text" name="txtjob" value='<?=$row[2]?>'><br><br>
Mgr:<input type="text" name="txtmgr" value='<?=$row[3]?>'><br><br>
Hire Date: <input type="date" name="dt"  value='<?=$row[4]?>'><br><br>
Salary:<input type="text" name="txtsal" value='<?=$row[5]?>'><br><br>
Comm:<input type="text" name="txtcom" value='<?=$row[6]?>'><br><br>
Dept No: <input type="text" name="txtdept" value='<?=$row[7]?>'><br><br>
<br><br>
<input type="submit" name="Update" value="Update">
</form>
</center>
<!-- 
<form action="update.php" method="get">
Rollno:<input type="text" name="txtno" 
value='<?=$no?>'><br>
Name:<input type="text" name="txtname" 
value='<?=$row[1]?>'><br>
Class:<input type="text" name="txtclass"
 value='<?=$row[2]?>'><br>

Mobile No:<input type="text" name="txtmob"
 value='<?=$row[4]?>'><br>
Address:<textarea rows="5" cols="5" 
name="txtaddress"><?=$row[5]?> 
</textarea><br>
<input type="submit" name="Update" value="Update">
</form> -->
</body>
</html>