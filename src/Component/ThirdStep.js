import React from "react";

function ThirdStep(props) {
  const { fromData, handleBack, handleSubmit, button, index } = props;
  return (
    <>
      <div className="form-div">
        <h1>Confirmation(Review all entered data)</h1>
        <form onSubmit={handleSubmit} style={{ color: "wheat" }}>
          <div>
            <strong>Name:= </strong>
            {fromData.name}
          </div>
          <div>
            <strong>Email:= </strong>
            {fromData.email}
          </div>
          <div>
            <strong>Phone:= </strong>
            {fromData.phone}
          </div>
          <div>
            <strong>Address:= </strong>
            {fromData.address}
          </div>
          <div>
            <strong>City:= </strong>
            {fromData.city}
          </div>
          <div>
            <strong>State:= </strong>
            {fromData.state}
          </div>
          <div>
            <strong>Zip-Code:= </strong>
            {fromData.zipCode}
          </div>
          <div>
            <button onClick={handleBack} className="back">
              {button[index - 1].buttonName}
            </button>
            <button className="next" style={{ width: "120px" }}>
              {button[index + 1].buttonName}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ThirdStep;
