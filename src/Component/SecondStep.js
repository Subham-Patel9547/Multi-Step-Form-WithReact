import React from "react";

function SecondStep(props) {
  const {
    secondStepdata,
    index,
    button,
    fromData,
    handleBack,
    handleSubmit,
    handleInputChange,
  } = props;

  return (
    <>
      <div>
        <div className="form-div">
          <form onSubmit={handleSubmit}>
            <div>
              {secondStepdata.map((id, index) => (
                <div key={index} style={{ margin: "10px" }}>
                  <span>
                    <label>{secondStepdata[index].label}</label>
                  </span>
                  <div>
                    <input
                      required
                      value={fromData[secondStepdata[index].id]}
                      id={secondStepdata[index].id}
                      onChange={handleInputChange}
                      type={secondStepdata[index].type}
                      placeholder={secondStepdata[index].placeholder}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div>
              <button onClick={handleBack} className="back">
                {button[index].buttonName}
              </button>
              <button className="next">{button[index + 1].buttonName}</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SecondStep;
