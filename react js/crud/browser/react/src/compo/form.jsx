import React, { use } from "react";
import { useState , useEffect } from "react";
 import Manage from "./manage";
 import {useNavigate} from "react-router-dom";
function Form() {
    const [fullname, setName] = useState("");
    const [email, setEmail] = useState("");
   
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
       const data = fetch("http://localhost:3000/api/auth/users", {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({fullname,email})
            
        }).then(res => res.json())
          
.then(data => {
    console.log(data);
    alert("Data added successfully 🎉");
    navigate("./manage");
})
.catch(err => {
    console.error(err);
    alert("Something went wrong");
       })
     
        
    };

    return (
        <>
        <div className="container w-150 p-4 bg-gray-100 rounded-lg shadow-md items-center justify-center mx-auto my-10"> 
            
                <h1 className="text-2xl font-bold text-gray-800">Form Component</h1>
            
           <div>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" name="name"  onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" name="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"  onChange={(e) => setEmail(e.target.value)}         />
                    </div>
                    <div>
                        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Submit</button>
                    </div>
                </form>
           </div>
        </div>
        
        </>
    )
}

export default Form;