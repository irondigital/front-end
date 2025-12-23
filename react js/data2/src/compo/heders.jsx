import data from "./data.jsx";
function Heders(){
    return(

     <div style={{display:"flex" , justifyContent:"space-evenly"}}>
      {data.map((item)=>{
        return(
          <div key={item.id} style={{border:"2px solid black" ,borderRadius:"5px", width: "300px" ,textAlign:"center", margin:"10px", flexWrap:"wrap"}}>
          <img src={item.photo} alt="" />
          <p>{item.id}
          </p>
          <h1>{item.name}</h1>
          <p>{item.age}</p>
           <p>{item.occupation}</p>


          </div>
        )
      })}
     </div>





    )};
export default Heders;