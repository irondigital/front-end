import { useState } from "react";



function Data (){
   const [data, setData] = useState ({
    name: "milan",
    age: 24,
    designation: "developer"
   });

   const changeData = ()=>{
    setData ({
        name: "devdas",
        age: 25,
        designation: "senior developer"
       });
   }

   

    return (
        <>
        
        <div>
            <h1>my name is {data.name}</h1>
            <h2>my age is {data.age}</h2>
            <h3>my designation is {data.designation}</h3>
            <button onClick={changeData}>change</button>
        </div>
        
        </>
    )
}
export default Data;