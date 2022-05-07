import React, { useState, useRef, useEffect } from "react";
// OTP PASSWORD 4 INPUT
const  Try=()=> {
  const [otp, setOtp] = useState("");
  // Method 1: useEffect & ref
  const result = useRef(null);
  useEffect(() => {
    result.current && result.current.focus();
  },[]);

  useEffect(() => {
    if (otp.length === 1) {
      result2.current.focus();
    }
  }, [otp.length]);
  const onChangeNumber = (e) => {
    setOtp(e.target.value);
  };

  const [expiry, setExpiry] = useState("");
  const result2 = useRef(null);
  useEffect(() => {
    if (expiry.length === 1) {
      result3.current.focus();
    }
  }, [expiry.length]);
  const onChangeExpiry = (e) => {
    setExpiry(e.target.value);
  };
  const [last, setLast] = useState("");
  const result3 = useRef(null);
  useEffect(() => {
    if (last.length === 1) {
      result3.current.focus();
    }
  }, [setLast.length]);
  const end = (e) => {
    setExpiry(e.target.value);
  };

  const [cvv, setCvv] = useState("");
  const result4 = useRef(null);
  const onChangeCvv = (e) => {
    setCvv(e.target.value);
  };

  return (
    <div>
        <input style={{ width: "20px", margin: "10px" }} type="text"
         maxLength={1} value={otp} onChange={onChangeNumber} ref={result}/>
        
        <input style={{ width: "20px", margin: "10px" }}type="text"
         maxLength={1} value={expiry} onChange={onChangeExpiry} ref={result2}/>
      
        <input style={{ width: "20px", margin: "10px" }} type="text"
         maxLength={1} value={cvv} onChange={onChangeCvv} ref={result3}/>

        <input style={{ width: "20px", margin: "10px" }} type="text"
         maxLength={1} value={end} onChange={end} ref={result4}/>
    </div>
  );
}
export default Try
