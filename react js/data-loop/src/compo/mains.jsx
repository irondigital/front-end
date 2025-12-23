import React from "react";
import Data from "./data.jsx";
const Mains=()=>{
 
    return(
        <div className="grid grid-cols-3 gap-4 p-4">
            {
                Data.map((item)=>{
                    return(
                        <div key={item.id} className="border p-4 rounded shadow text-center" >
                            <img src={item.photo} alt={item.name} className="w-32 h-32 mx-auto rounded-full mb-4"/>
                            <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                            <p className="mb-1">Age: {item.age}</p>
                            <p>Skill: {item.skill}</p>
                        </div>
                    )
                })
            } 
    
     </div>
    )
}
export default Mains;