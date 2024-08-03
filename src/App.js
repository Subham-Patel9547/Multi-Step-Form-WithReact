import React, { useState } from "react";
import FirstStep from "./Component/FirstStep";
import ThirdStep from "./Component/ThirdStep";
import SecondStep from "./Component/SecondStep";
import Final from "./Component/Final";
import "./CSS/Common.css";

function App() {
  const data = [
    {
      id: "name",
      label: "Name",
      type: "text",
      value: "name",
      placeholder: "Enter Name",
    },
    {
      id: "email",
      label: "Email",
      type: "Email",
      value: "email",
      placeholder: "Enter Email",
    },
    {
      id: "phone",
      label: "Phone No.",
      type: "number",
      value: "phone",
      placeholder: "Enter Phone",
    },
  ];

  const secondStepdata = [
    {
      id: "address",
      label: "Address",
      type: "text",
      value: "address",
      placeholder: "Enter full Address",
    },
    {
      id: "city",
      label: "City",
      type: "text",
      value: "city",
      placeholder: "Enter City",
    },
    {
      id: "state",
      label: "State",
      type: "text",
      value: "State",
      placeholder: "Enter State",
    },
    {
      id: "zipCode",
      label: "Zip-Code",
      type: "text",
      value: "zipCode",
      placeholder: "Enter Zip-Code",
    },
  ];

  const button = [
    {
      buttonName: "Next",
    },
    {
      buttonName: "Back",
    },
    {
      buttonName: "Next",
    },
    {
      buttonName: "Submit",
    },
  ];

  const [forms, setForms] = useState(data);
  const [index, setIndex] = useState(0);
  const [fromData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (index < forms.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(index + 1);
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    setIndex((idx) => idx - 1);
  };

  const handleInputChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    const copyformData = { ...fromData };
    copyformData[id] = value;
    setFormData(copyformData);
  };

  console.log("FormData=>", fromData);

  return (
    <div className="main-Div">
      <>
        {index === 0 && (
          <FirstStep
            forms={forms}
            index={index}
            button={button}
            fromData={fromData}
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
          />
        )}
        {index === 1 && (
          <SecondStep
            secondStepdata={secondStepdata}
            index={index}
            button={button}
            fromData={fromData}
            handleBack={handleBack}
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
          />
        )}
        {index === 2 && (
          <ThirdStep
            forms={forms}
            index={index}
            button={button}
            handleBack={handleBack}
            handleSubmit={handleSubmit}
            fromData={fromData}
            secondStepdata={secondStepdata}
          />
        )}
        {index === 3 && <Final />}
      </>
    </div>
  );
}

export default App;
