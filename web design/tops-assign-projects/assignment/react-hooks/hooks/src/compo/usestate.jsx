import { useState } from "react"
// usestate is a react hooks that allow to use functional Component to manage local data and re-render when state will changes.

function Usestate(){

const [set ,setdata] = usestate(0)
// set → current value

// setdata → function to update it

// 0 → only used on first render
return(


    <>
    <h2>{set}</h2>
    <button onClick={()=>setdata(c=>c+1)}>increase</button>
    </>
)
}
