import React, { Component,useState } from 'react';
import Form from 'react-bootstrap/Form'
export default function Register() {
    const [user, setUser] = useState(null);
    function setUserDiv(){
      switch(user){
          case "first":
            return ;
          case "coder":
              return <div>
              <form className="register-form">
                <div className="form-group">
                  <label>User ID</label>
                  <input
                    type="id"
                    className="form-control"
                    placeholder="Enter User ID"
                  />
                </div>
                <div className="form-group ">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Your Email"
                  />
                </div>
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="firstname"
                    className="form-control"
                    placeholder="First Name"
                  />
                    <input
                    type="middlename"
                    className="form-control"
                    placeholder="Middle Name"
                  />
                    <input
                    type="lastname"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="phone"
                    className="form-control"
                    placeholder="Enter Your Phone Number"
                  />
                </div>
    
                <button type="submit" className="btn btn-dark btn-lg btn-block">
                  Register 
                </button>
              </form>
            </div>;
          case "company":
               return <div>
              <form className="register-form">
                <div className="form-group">
                  <label>User ID</label>
                  <input
                    type="id"
                    className="form-control"
                    placeholder="Enter User ID"
                  />
                </div>
                <div className="form-group ">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Your Email"
                  />
                </div>
                <div className="form-group">
                  <label>Company Name</label>
                  <input
                    type="name"
                    className="form-control"
                    placeholder="Enter Your Company Name"
                  />
                </div>
                <button type="submit" className="btn btn-dark btn-lg btn-block">
                  Register 
                </button>
              </form>
            </div>;
          case "editor":
            return <div >
            <form className="register-form">
              <div className="form-group">
                <label>User ID</label>
                <input
                  type="id"
                  className="form-control"
                  placeholder="Enter User ID"
                />
              </div>
              <div className="form-group ">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="form-group">
                <label>Editor Type</label>
                <input
                  type="name"
                  className="form-control"
                  placeholder="Editor Type"
                />
              </div>
              <button type="submit" className="btn btn-dark btn-lg btn-block">
                Register 
              </button>
            </form>
          </div>;
          default:
              return null;
      }
  }  
    return (
<div className="register-page">
<div class="form">
            <div className="form-group">
            <h3>Register Page </h3>
            
            <Form.Select size="lg"
                    onClick={(event) => {
                        setUser(event.target.value);
                    }}>
              <option value="first">Select user type</option>        
              <option value="coder">Coder</option>
              <option value="company">Company</option>
              <option value="editor">Editor</option>
             </Form.Select >
            </div>
                        {setUserDiv()}
            </div>

      </div>
    );

}


