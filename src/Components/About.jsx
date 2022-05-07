import React, { useEffect, useRef, useState } from "react";

const About = () => {
  const [data1,setData1]=useState("")   //start//
  const result = useRef(null);
  useEffect(() => {
   result.current && result.current.focus();
    },[]);
 useEffect(()=>{
   if(data1.length===1){
     result2.current.focus()
   }
 },[data1.length])
//  console.log("====>",data1)

 const one = (e) => {
  setData1(e.target.value)
 }                                    //end
 const[data2,setData2]=useState("")
 const result2 =useRef(null)
 useEffect(()=>{
   if(data2.length===1){
     result3.current.focus()
   }
  },[data2.length])
//  console.log("====>",data2)


   const two = (e) => {
    setData2(e.target.value);
  };
  const [data3, setData3] = useState("");   //start//
  const result3=useRef(null)
  useEffect(()=>{
    if(data3.length===1){
      result4.current.focus()
    }
  },[data3.length])
//  console.log("====>",data3)

  const three = (e) => {
    setData3(e.target.value)
    };
  const [data4, setData4] = useState("");
  const result4=useRef(null)
  useEffect(()=>{
    if(data4.length===1){
      result4.current.focus()
    }
  },[data4.length])
  const end=(e)=>{
    setData4(e.target.value)
  }      
  return (
    <div>
      <input style={{ width: "20px", margin: "10px" }} value={data1} onChange={one} type="password" maxLength="1" ref={result} />
      <input style={{ width: "20px", margin: "10px" }} value={data2} onChange={two} type="password" maxLength="1" ref={result2} />
      <input style={{ width: "20px", margin: "10px" }} value={data3} onChange={three}  type="password" maxLength="1" ref={result3} />
      <input style={{ width: "20px", margin: "10px" }}value={data4} onChange={end} type="password" maxLength="1" ref={result4} />  <br />
      <button>Submit</button>
    </div>
  );
};

export default About;
