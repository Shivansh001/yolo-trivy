import React, { useState } from "react";
import UserDetails from "./UserDetails";
import PaymentDetails from "./PaymentDetails";
import Confirmation from "./Confirmation";
import { Form } from "react-bootstrap";


const Register = () => {
  
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    email: "",
    phone_number: "",
    city: "",
    state: "",
  });

  

  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    } else if (step === 3) {
      console.log(values);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  console.log(values);
  return (
    <div className="bg-light vh-100">
      <div className="container border-0 d-flex justify-content-center align-items-center">
        <div className="card p-3 w-100 mt-5">
          {
            {
              1: <UserDetails handleChange={handleChange} />,
              2: <PaymentDetails handleChange={handleChange} />,
              3: <Confirmation handleChange={handleChange} />,
            }[step]
          }
          <div className="d-flex justify-content-around px-5 mt-5">
            {step > 1 ? (
              <button className="btn btn-secondary" onClick={prevStep} style={{marginTop: '-2rem'}}>
                Back
              </button>
            ) : null}
            <button className="btn btn-primary" onClick={nextStep} style={{marginTop: '-2rem'}}>
              {step === 3 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
