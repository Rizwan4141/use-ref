import React, { useEffect, useRef } from "react";


const Otp = () => {
    const result=useRef(null)
   useEffect(()=>{
       result.current.focus()
   },[])
  return (
    <div>
      <h1>opt</h1>
      <input style={{ width: "20px", margin: "10px" }} type="number" ref={result} />
      <input style={{ width: "20px", margin: "10px" }} type="number" />
      <input style={{ width: "20px", margin: "10px" }} type="number" />
      <input style={{ width: "20px", margin: "10px" }} type="number" />
    </div>
  );
};

export default Otp;
