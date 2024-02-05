import React, { useRef, useState } from "react";
import CustomInput from "../components/CustomInput";
import { ToastContainer, toast } from "react-toastify";
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import { signInUser } from "../helpers/axiosHelper";

const SignIn = () => {
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });

    console.log(value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const data = await signInUser(form);

    console.log(data);
  };

  const inputs = [
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email address",
      required: true,
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your Password",
      required: true,
    },
  ];

  return (
    <div>
      <div className="text-center">
        <h1>AniTech Sign In</h1>
      </div>
      <Form className="d-grid m-3 " onSubmit={handleOnSubmit}>
        {inputs.map((item, i) => {
          return <CustomInput key={i} {...item} onChange={handleOnChange} />;
        })}

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default SignIn;
