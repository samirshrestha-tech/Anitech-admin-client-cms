import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import { ToastContainer, toast } from "react-toastify";
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";

const SignIn = () => {
  const [form, setForm] = useState({});
  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });

    console.log(form);
  };
  return (
    <div>
      <div className="text-center">
        <h1>AniTech Sign In</h1>
      </div>
      <Form className="d-grid m-3 ">
        <FormGroup className="mb-3">
          <FormLabel>Email Address</FormLabel>
          <FormControl
            type="email"
            placeholder="Enter your Email address"
            onChange={handleOnChange}
            name="email"
            required
          ></FormControl>
        </FormGroup>

        <FormGroup className="mb-3">
          <FormLabel>Password</FormLabel>
          <FormControl
            type="password"
            placeholder="********"
            onChange={handleOnChange}
            name="password"
            required
          ></FormControl>
        </FormGroup>

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default SignIn;
