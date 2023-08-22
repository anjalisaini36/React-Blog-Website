import React from "react";

function Register(props) {
  const { register, name, password,email,contact, setName, setPassword,setEmail,setContact } = props;
  return (
    <div className="bg-image">
      <div className=" p-4 m-auto col-3 ">
        <h2 className=" form-heading fw-bold mb-5 ">Register Now</h2>
        <div className="mb-3">
          <label
            // for="exampleDropdownFormEmail2"
            className="form-label text-white"
          >
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleDropdownFormEmail2"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label
            // for="exampleDropdownFormEmail2"
            className="form-label text-white"
          >
            Username
          </label>
          <input
            type="text"
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
            // for="exampleDropdownFormEmail2"
            className="form-label text-white"
          >
            Contact
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleDropdownFormEmail2"
            placeholder="Contact"
            value={contact}
            onChange={(e) => {
              setContact(e.target.value);
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
        <button
          // type="submit"
          onClick={register}
          className="btn btn-light btn-register"
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;
