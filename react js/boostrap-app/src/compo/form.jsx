function Form(){
   
 
     function handleSubmit(e){
        e.preventDefault();
        const email = e.target.Email;
        const password = e.target.Password;

        


        if(email === "" || password === ""){
            alert("Please fill in all fields.");
        }else {
            alert("Form submitted successfully!");
        }

      console.log("Email:", email.value);
        console.log("Password:", password.value); 
     }

     
    return (
    <>
     <div className="mx-auto mt-5 p-5 w-50 border border-3 rounded-3 h-auto shadow-lg bg-lights">

     <h1 className="text-center text-danger">login form</h1>
     <hr className="w-50 mx-auto" />

        <form action="post" className="form-group text-center" onSubmit={handleSubmit}>
         <div className="m-3 ms-5 ">
            <label htmlFor="email">Email:</label>
     <input type="text" name="Email" className="w-60 p-1 border border-2 rounded shadow-l"  />

         </div>
   <div className="m-3">
            <label htmlFor="password">Password:</label>
     <input type="password" name="Password" className="w-60 p-1 border border-2 rounded shadow-l" />

<div className="mt-4 text-center">
     <button type="submit" className="p-2 bg-danger shadow-lg rounded">Submit</button>
</div>
      <div className=" mt-4 text-center"  >
 <h4  >continue with google</h4>
      <h4>forget password</h4>
      </div>
     
         </div>

        </form>
     


     </div>
    
    
    
    
    
    </>




    )
}
export default Form;