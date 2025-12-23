<!--write a php script for fetch record from table & in same page 
give the link for insert new record & give the link for update 
and delete for each record. -->
<!-- 1) show.php -->
<?php
$link=mysqli_connect("localhost","root","","mydb");
$str="select * from emp";
$result=mysqli_query($link,$str);
?>
<table border="2" align="center" style="margin-top:5%">
<tr>
	<td colspan="8">
	<a href="insert.php">Click here for insert new record</a>
	</td>
</tr>
<tr>
<td>Emp no</td>
<td>Emp Name</td>
<td>Job</td>
<td>Mgr</td>
<td>Hire  Date</td>
<td>Salary</td>
<td>Comm</td>
<td> Dept No</td>
<td>Update</td>
<td>Delete</td>
</tr>
<?php
while ($row = mysqli_fetch_array($result,MYSQLI_BOTH))
{
?>
<tr>
<td><?=$row[0]?></td>
<td><?=$row['ename']?></td>
<td><?=$row[2]?></td>
<td><?=$row['mgr']?></td>
<td><?=$row['hiredate']?></td>
<td><?=$row['sal']?></td>
<td><?=$row[6]?></td>
<td><?=$row[7]?></td>
<td><a href="upd.php?id=<?=$row[0]?>">Update</a></td>
<td><a href="del.php?id=<?=$row[0]?>">Delete</a></td>
</tr>
<?php } ?>