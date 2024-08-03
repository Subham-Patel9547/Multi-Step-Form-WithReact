import React from "react";

function FirstStep(props) {
  const { forms, index, button, fromData, handleSubmit, handleInputChange } =
    props;

  return (
    <>
      <div>
        <div className="form-div">
          <form onSubmit={handleSubmit}>
            <div>
              {forms.map((id, index) => (
                <div key={index} style={{ margin: "10px" }}>
                  <span>
                    <label>{forms[index].label}</label>
                  </span>
                  <div>
                    <input
                      required
                      value={fromData[forms[index].id]}
                      id={forms[index].id}
                      onChange={handleInputChange}
                      type={forms[index].type}
                      placeholder={forms[index].placeholder}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div>
              <button className="next">{button[index].buttonName}</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default FirstStep;
