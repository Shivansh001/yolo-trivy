import React, { useState } from "react";
import { Form } from "react-bootstrap";
import './../../register/register.css'
import './login.css'
import {Link} from 'react-router-dom'

const UserDetails = () => {
  const [data,setData] = useState({
    email:"",
    password:""
  })
  
  const {email,password} = data;
  
  const changeHandler = e => {
    setData({...data,[e.target.name]:[e.target.value]});
  }
  
  const submitHandler = e => {
    e.preventDefault();
    console.log(data);
  }
  return (
    
          <div className="d-flex flex-column p-5" style={ {marginTop: '5%'}}>
            <h3 className="align-self-center" style={{fontWeight:'600'}}>Welcome!</h3>
            <p style={{paddingRight:'18%', paddingLeft:'18%', textAlign:'center'}}>Sign in to access your membership.</p>
            
            <div className="form-container" style={{marginLeft:'33%'}}>
            
            <Form.Group className="w-50" >
              <Form.Control
                placeholder="Email"
                name="email"
                value={email} onChange={changeHandler}
              />
            </Form.Group>
            <Form.Group className="w-50 mt-2" >
              <Form.Control
                placeholder="Password"
                type="password"
                name="password"
                value={password} onChange={changeHandler}
              />
            </Form.Group>
            <div class="d-flex flex-nowrap align-items-center mt1">
              <Form.Group className="ml-3" style={{width:'34%', fontSize:'14px'}}>
                    <Form.Check
                    /> Remember Me
                    </Form.Group>
              <Link to="/" style={{textDecoration:'none', fontSize:'14px'}}>
                Forgot Password?
              </Link>
            </div>
            <div className="align-self-center mt-3">
        
                    <button className="btn btn-primary" style={{alignSelf: 'center', marginLeft:'10%'}} onClick={submitHandler}>
                      Sign In
                    </button>
                  
                </div>
                <div className="mt2 align-items-center" style={{textAlign: 'center', marginLeft: '-25%', marginTop: '2%'}}>
                <p className="">Trouble logging into your account?</p>
                <p className="">Contact us at hello@trivy.co</p>
                <p className="">or +91-7011733860</p>
                </div>
      
        </div>
        </div>
  
  );
};

export default UserDetails;
