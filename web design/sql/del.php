<!--5) del.php -->
<?php 
$link=mysqli_connect("localhost","root","","mydb");
$str="delete from emp where empno=$_GET[id]";
if(mysqli_query($link,$str))
	header("Location:show.php");
else
	echo "record not Deleted plz check query..".$str;
?>