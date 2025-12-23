import React,{useState} from "react";

function Employee() {
 const [name,setname] = useState({
    name:"milan",
    age:24,
    designation:"developer"
 });
   const employeup = ()=>{
    setname({
        name:"devdas",
        age:25,
        designation:"designer"
    })
   }
 return(
    <>
    <div>
        <p>my name is {name.name} and my age is {name.age}and i am a {name.designation}</p>
        <button onClick={employeup}>updatedata</button>
    </div>
    
    </>
 )
}
export default Employee;