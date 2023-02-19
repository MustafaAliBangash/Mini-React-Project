import React, { useEffect, useState } from "react";

function Form() {
  let data = { name: "", email: "", password: "" };
  let [input, setInput] = useState(data);
  let [flag, setFlag] = useState(false);

  useEffect(() => {
    console.log("Registered!");
  }, [flag]);

  function handleChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!input.name || !input.email || !input.password) {
      alert("All field are mandatory to fill!!");
    } else {
      setFlag(true);
    }
  }
  return (
    <>
      <pre style={{ textAlign: "center" }}>
        {flag ? <h1>Hello {input.name}, You Are Registered!</h1> : ""}
      </pre>
      <form className="App" onSubmit={handleSubmit}>
        <div className="App-header">REGISTRATION FORM</div>
        <div className="fname">
          <label>Name:</label>
        </div>
        <div>
          <input
            type="text"
            name="name"
            value={input.name}
            placeholder="Enter your name"
            onChange={handleChange}
          />
          <br />
          <div className="fname">
            <label>Email:</label>
          </div>
          <input
            type="text"
            name="email"
            value={input.email}
            placeholder="Enter your email"
            onChange={handleChange}
          />
          <br />
          <div>
            <label className="pass"> Password:</label>
          </div>
          <input
            type="text"
            name="password"
            value={input.password}
            placeholder="Enter your password"
            onChange={handleChange}
          />
        </div>
        <button className="button">Submit</button>
      </form>
    </>
  );
}

export default Form;
