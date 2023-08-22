import React from 'react'
import { Link } from 'react-router-dom';

function Login(props) {
  const{name, password,handleLoginUser,setPassword,setName}=props;

  console.log("name", name);
  console.log("password", password)
  return (
     <div className="bg-image">
    <div className=" p-4 m-auto col-3 ">
    <h2 className=" form-heading fw-bold mb-5 ">Login Now</h2>
      <div className="mb-3">
        <label
          // for="exampleDropdownFormEmail2"
          className="form-label text-white "
        >
          Name
        </label>
        <input
          type="name"
          className="form-control"
          id="exampleDropdownFormEmail2"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label
          // for="exampleDropdownFormPassword2"
          className="form-label text-white"
        >
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleDropdownFormPassword2"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
     <div className='btn-div'>
     <button
        type="submit"
        className="btn btn-light"
        onClick={() => handleLoginUser()}
      >
        Login
      </button>
      <Link to="/Register" ><button className="btn btn-light register-btn">Go To Register</button></Link>
     </div>
    </div>
  </div>
  )
}

export default Login;
