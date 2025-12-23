<!--Write a php script for create table.-->
<?php
$con=mysqli_connect("localhost","root","","mydb");
$dept="create table dept(   
  deptno int(2) NOT NULL PRIMARY KEY,   
  dname varchar(14),   
  loc varchar(13)   
)";
$emp="create table emp(   
	  empno    int(4) PRIMARY KEY,   
	  ename    varchar(10),   
	  job      varchar(9),   
	  mgr      int(4),   
	  hiredate date,   
	  sal      int(7),   
	  comm     int(7),   
	  deptno   int(2) references dept(deptno)
	)";
if(mysqli_query($con,$dept))
{
	echo "<br> Table Created..<br>";
}
if(mysqli_query($con,$emp))
{
	echo "<br> Table Created..<br>";
}

mysqli_query($con,"INSERT INTO emp VALUES ('7369','SMITH','CLERK','7902','1980-12-17','800.00',NULL,'20')");
mysqli_query($con,"INSERT INTO emp VALUES ('7499','ALLEN','SALESMAN','7698','1981-02-20','1600.00','300.00','30')");
mysqli_query($con,"INSERT INTO emp VALUES ('7521','WARD','SALESMAN','7698','1981-02-22','1250.00','500.00','30')");
mysqli_query($con,"INSERT INTO emp VALUES ('7566','JONES','MANAGER','7839','1981-04-02','2975.00',NULL,'20')");
mysqli_query($con,"INSERT INTO emp VALUES ('7654','MARTIN','SALESMAN','7698','1981-09-28','1250.00','1400.00','30')");
mysqli_query($con,"INSERT INTO emp VALUES ('7698','BLAKE','MANAGER','7839','1981-05-01','2850.00',NULL,'30')");
mysqli_query($con,"INSERT INTO emp VALUES ('7782','CLARK','MANAGER','7839','1981-06-09','2450.00',NULL,'10')");
mysqli_query($con,"INSERT INTO emp VALUES ('7788','SCOTT','ANALYST','7566','1982-12-09','3000.00',NULL,'20')");
mysqli_query($con,"INSERT INTO emp VALUES ('7839','KING','PRESIDENT',NULL,'1981-11-17','5000.00',NULL,'10')");
mysqli_query($con,"INSERT INTO emp VALUES ('7844','TURNER','SALESMAN','7698','1981-09-08','1500.00','0.00','30')");
mysqli_query($con,"INSERT INTO emp VALUES ('7876','ADAMS','CLERK','7788','1983-01-12','1100.00',NULL,'20')");
mysqli_query($con,"INSERT INTO emp VALUES ('7900','JAMES','CLERK','7698','1981-12-03','950.00',NULL,'30')");
mysqli_query($con,"INSERT INTO emp VALUES ('7902','FORD','ANALYST','7566','1981-12-03','3000.00',NULL,'20')");
mysqli_query($con,"INSERT INTO emp VALUES ('7934','MILLER','CLERK','7782','1982-01-23','1300.00',NULL,'10')");

mysqli_query($con,"INSERT INTO dept VALUES ('10','ACCOUNTING','NEW YORK')");
mysqli_query($con,"INSERT INTO dept VALUES ('20','RESEARCH','DALLAS')");
mysqli_query($con,"INSERT INTO dept VALUES ('30','SALES','CHICAGO')");
mysqli_query($con,"INSERT INTO dept VALUES ('40','OPERATIONS','BOSTON')");
mysqli_query($con,"INSERT INTO dept VALUES ('50','Testing','Noida')");
mysqli_query($con,"INSERT INTO dept VALUES ('60','Marketing','Mathura')");   

echo $grpby="select SUM(sal) from emp GROUP BY deptno";
echo "<br><br> Result of Groupby Query...<br>Salary<br>----------<br>";
$res=mysqli_query($con,$grpby);
while($row=mysqli_fetch_row($res))
{
	echo $row[0]."<br>";
}
echo "<br>";
echo $having="select SUM(sal) from emp GROUP BY deptno HAVING SUM(sal)>9000";
echo "<br><br> Result of Having Query...<br>Salary<br>----------<br>";
$res=mysqli_query($con,$having);
while($row=mysqli_fetch_row($res))
{
	echo $row[0]."<br>";
}
echo "<br>";
echo $leftjoin="select empno,ename,job,emp.deptno from emp left join dept on emp.deptno=dept.deptno;";
echo "<br><br> Result of Left Join Query...<br>";
echo "<table border=1> <tr> <td>Empno</td> <td>Ename</td> <td>Job</td> <td>Deptno</td></tr>";
$res=mysqli_query($con,$leftjoin);
while($row=mysqli_fetch_row($res))
{
	echo "<tr><td>".$row[0]."</td><td>".$row[1]."</td><td>".$row[2]."</td><td>".$row[3]."</td></tr>";
}
echo "</table> <br>";
echo $rightjoin="select empno,ename,job,dept.deptno from emp right join dept on emp.deptno=dept.deptno";
$res=mysqli_query($con,$rightjoin);
echo "<br><br> Result of Right Join Query...<br>";
echo "<table border=1> <tr> <td>Empno</td> <td>Ename</td> <td>Job</td> <td>Deptno</td></tr>";
while($row=mysqli_fetch_row($res))
{
	echo "<tr><td>".$row[0]."</td><td>".$row[1]."</td><td>".$row[2]."</td><td>".$row[3]."</td></tr>";
}
echo "</table> <br>";
echo $subquery="SELECT empno, ename, job,deptno FROM emp WHERE deptno IN (SELECT deptno FROM dept WHERE deptno = 20)";
$res=mysqli_query($con,$subquery);
echo "<br><br> Result of SubQuery...<br>";
echo "<table border=1> <tr> <td>Empno</td> <td>Ename</td> <td>Job</td> <td>Deptno</td></tr>";
while($row=mysqli_fetch_row($res))
{
	echo "<tr><td>".$row[0]."</td><td>".$row[1]."</td><td>".$row[2]."</td><td>".$row[3]."</td></tr>";
}


?>