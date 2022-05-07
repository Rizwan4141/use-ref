import React, { useRef, useState } from "react";

const Home = () => {
  const goodName = useRef(null);
  const [show, setShow] = useState(false);

  const submitForm = (e) => {
    // console.log("===>", goodName);
    e.preventDefault();
    const name = goodName.current.value;
    name === "" ? alert("plz Fill the data") : setShow(true);
  };
  return (
    <div>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="goodName"> Enter your Good Name</label>
          <input type="text" id="goodName" ref={goodName} />
        </div>
        <br />
        <button>Submit</button>
      </form>
      <p> {show ? `You Good Name is ${goodName.current.value}` : ""}</p>
    </div>
  );
};

export default Home;
