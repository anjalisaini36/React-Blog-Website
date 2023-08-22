import React, { useEffect, useState } from "react";
import Register from "../../component/Register";
import { registerUser } from "../../helper";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function Registerpage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const[cookies,setCookie]=useCookies(['name'])
  const navigate = useNavigate();
  //
  const handleRegiseter = async (e) => {
    e.preventDefault();
    const payload = {
      email: email,
      name:name,
      contact:contact,
      password: password,
    };
    console.log("payload", payload);
    if (
      name !== null &&
      name !== "" &&
      password !== "" &&
      password !== null &&
      email !== "" &&
      email !== null &&
      contact !== "" &&
      contact !== null&&
      password.includes("@")&&
      email.includes("@gmail.com")
    ) {
      try {
        const result = await registerUser(payload);
        console.log("resulttttt", result);
        setCookie('name',name,{path:'/'})

        navigate("/newblog");
      } catch (error) {
        console.log("handleRegister", error);
      }
    } else {
      alert("All fields are must be filled");
      console.log("All fields are must be filled");
    }
  };
  // useEffect(() => {}, []);
  return (
    <div>
      <Register
        register={handleRegiseter}
        name={name}
        setName={setName}
        setPassword={setPassword}
        email={email}
        setEmail={setEmail}
        contact={contact}
        setContact={setContact}
        password={password}
      />
    </div>
  );
}

export default Registerpage;
