import React, { useState } from "react";
import { Form } from "react-bootstrap";
import './register.css'
import validator from 'validator'

const UserDetails = ({ handleChange }) => {
  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value
  
    if (validator.isEmail(email)) {
      setEmailError('Valid Email :)')
    } else {
      setEmailError('Enter valid Email!')
    }
  }
    const [date, setDate] = useState(new Date());
  return (
    <div className="d-flex flex-column p-5" >
      <h5 className="align-self-center" style={{fontWeight:'600', fontSize:'16px'}}>THE YC MEMBERSHIP APPLICATION TAKES JUST A FEW MINUTES</h5>
      <p style={{paddingRight:'18%', paddingLeft:'18%', textAlign:'center'}}>All information will be treated with the strictest confidence and your contact details will never be shared with any third-parties.</p>
      
      <div className="form-container" style={{marginLeft:'15%'}}>
      <hr style={{borderColor : '#2a74e5', width:'81%', marginLeft:'0'}} />
      Personal Information * <br />
      <div class="d-flex flex-nowrap align-items-center ">
      <Form.Group className="" style={{width:'40%'}}>
        <Form.Control
          placeholder="First Name"
          onChange={handleChange("first_name")}
          name="first_name"
        />
      </Form.Group>
      <Form.Group className="ml-2" style={{width:'40%'}}>
        <Form.Control
          placeholder="Last Name"
          onChange={handleChange("last_name")}
          name="last_name"
        />
      </Form.Group>
      </div>
      <br />
      Email Address *
      <Form.Group style={{width:'81%'}}>
        <Form.Control
          placeholder="someone@example.com"
          onChange={handleChange("email")}
          name="email"
        />
      </Form.Group>
      <br />
      Phone Number
      <Form.Group style={{width:'81%'}}>
        <Form.Control
          placeholder="999-999-9999 (optional)"
          minLength={10}
          onChange={handleChange("phone")}
          name="phone"
        />
      </Form.Group>
      <br />
      <div class="d-flex flex-nowrap align-items-center ">
      <p style={{width:'40%'}}>LinkedIn Profile</p>
      <p className="ml-2" style={{width:'40%'}}>Date Of Birth *</p>
      </div>
      <div class="d-flex flex-nowrap align-items-center " style={{marginTop: '-1rem'}}>
      <Form.Group style={{width:'40%'}}>
        <Form.Control
          placeholder="(optional)"
          onChange={handleChange("linkedin")}
          name="linkedin"
        />
      </Form.Group>
      <Form.Group className="ml-2" style={{width:'40%'}}>
              <Form.Control
                type="date"
                name="birthday"
                placeholder="Birthday"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
        </Form.Group>
        
         </div>
         <br/>
         <hr style={{borderColor : '#2a74e5', width:'81%', marginLeft:'0'}}/>
         <br />
        <div class="d-flex flex-nowrap align-items-center " >
        <p style={{width:'40%'}}>Company Name *</p>
        <p className="ml-2" style={{width:'40%'}}>Professional Title *</p>
        </div>
            <div class="d-flex flex-nowrap align-items-center "style={{marginTop: '-1rem'}}>
        <Form.Group className="" style={{width:'40%'}}>
            <Form.Control
            onChange={handleChange("company_name")}
            name="company_name"
            />
        </Form.Group>
        <Form.Group className="ml-2" style={{width:'40%'}}>
            <Form.Control
            onChange={handleChange("professional_title")}
            name="professional_title"
            />
        </Form.Group>
        </div>
        </div>
    </div>
  );
};

export default UserDetails;
