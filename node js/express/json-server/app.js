// fetch("http://localhost:4000/users",{
//     method:"POST",
//     headers:{
//         "Content-Type":"application/json"
//     },
//     body:JSON.stringify({
//         "id":3,
//         "name":"rohit",
//         "age":20,
//         "email":"hello@gmail.com"
//     })
// })
// .then(res =>res.json())
// .then(data => console.log("save:",data))
// .catch(err =>console.log(err))


// const axios = require("axios");

// axios.post("http://localhost:4000/users",{
//     "id":4,
//         "name":"rehit",
//         "age":20,
//         "email":"helo@gmail.com"
// })
// .then(res =>console.log(res.data))
// .catch(err =>console.error(err))

// const axios = require("axios");

// axios.put("http://localhost:4000/users/3",{
       
//          "name":"abhay",
//         "age":23,
//         "email":"lal@gmail.com"
// })
// .then(res =>console.log(res.data))
// .catch(err =>console.error(err))

// fetch("http://localhost:4000/users/2",{
//     method:"PUT",
//     headers:{
//         "Content-Type":"application/json",
    
//     },
//     body:JSON.stringify({
         
//        "name":"ketan",
//         "age":20,
//         "email":"ketan@gmail.com"
//     })
// })

// .then(res => res.json())       // ✅ parse JSON
// .then(data => console.log(data)) // ✅ log the updated user
// .catch(err => console.error(err));

fetch("http://localhost:4000/users/2", {
  method: "DELETE"
})
.then(res => {
    if(res.ok) {
        console.log("User deleted successfully");
    } else {
        console.log("Failed to delete user");
    }
})
.catch(err => console.error(err));