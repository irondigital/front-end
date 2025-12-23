var myVar;
function mainFunction()
{
  myVar=setTimeout("display()",3000);
}
function display()
{
 document.getElementById("loader").style='display:none';
 document.getElementById("main-app").style='display:block';   
}