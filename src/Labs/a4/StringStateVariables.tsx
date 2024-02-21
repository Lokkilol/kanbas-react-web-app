import React, { useState } from "react";
function StringStateVariables() {
  const [firstName, setFirstName] = useState("John");
  return (
    <div>
      <h2>String State Variables</h2>
      <p> Your name is : {firstName}</p>
      <input
        className="form-control"
        placeholder="John"
        //value={firstName}
        onChange={(e) => setFirstName(e.target.value)}/>
    </div>
  );
}
export default StringStateVariables;