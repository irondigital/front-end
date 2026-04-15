import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login(){
    const navigate = useNavigate();

    const [data, setdata] = useState({
        email:"",
        password:""
    });
    function handleChange(e){
        setdata({...data,[e.target.name]:e.target.value})
    }
    const handleLogin = async () => {
        try {
            const response = await axios.post("http://localhost:5000/auth/api/login", data);
            
            console.log(response.data);
        } catch (error) {
            console.error("Login failed:", error);
        }   
    };
    return(
        <>
            <div className="flex items-center justify-center h-screen">
                <div className="w-full max-w-md">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                email
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="email"  onChange={handleChange} name="email"/>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" onChange={handleChange} name="password"/>
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" onClick={() => navigate("./dashboard")}>
                                logIn
                            </button>
                           
                            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="./register">
                                Don't have an account?
                            </a>

                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;