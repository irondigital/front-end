// create a function for clearAll

function clearAll() {
    document.getElementById("result").value = "";
};  

function one(){
    var a = document.getElementById("result").value;
    var b =a.slice(0,-1);
    document.getElementById("result").value = b;  
}

function inpval(res){
    document.getElementById("result").value+=res;
   
}
function equal(){
    var v=  document.getElementById("result").value;
    var e= eval(v);
    document.getElementById("result").value = e;
}

function sqrt(){
    var x = document.getElementById("result").value;
    var y = Math.sqrt(x);
    document.getElementById("result").value = y;
}

function root(){
    var x = document.getElementById("result").value;
    var y = Math.pow(x,2);
    document.getElementById("result").value = y;
}

function cbrt(){
    var x = document.getElementById("result").value;
    var y = Math.pow(x,3);
    document.getElementById("result").value = y;
}