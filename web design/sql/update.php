<!--4) update.php -->
<?php
if(isset($_POST['Update']))
{
$link=mysqli_connect("localhost","root","","mydb");
$dt= date('Y-m-d', strtotime($_POST['dt']));
$str="update emp set ename='$_POST[txtname]',job='$_POST[txtjob]',mgr=$_POST[txtmgr],hiredate='$dt',
sal=$_POST[txtsal],comm=$_POST[txtcom],deptno=$_POST[txtdept] where empno=$_POST[txtno]";

if(mysqli_query($link,$str))
	header("Location:show.php");
else
	echo "record not Updated plz check query..".$str;
}
?>