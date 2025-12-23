import React from "react";



function App(){

const data =  [
{ name: "milan",
  age:23,
  city:"rajkot",
  id:1
},
 {name: "dk",
  age:22,
  city:"rajkot",
  id:2
},
 {name: "meet",
  age:21,
  city:"rajkot",
  id:3
},
 {name: "kkk",
  age:20,
  city:"rajkot",
  id:4
}];
  return(

  <div>
    <h1>hello this is a my data</h1>
    {data.map((item)=>{
        return(
            <div key={item.id}>
                <h1>my name is {item.name} my age is {item.age} i am from {item.city} and my collage id is {item.id}</h1>
                

            </div>
        )
    })}
    
  </div>
)};


export default App;