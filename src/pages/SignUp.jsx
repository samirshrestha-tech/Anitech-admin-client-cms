import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import CustomInput from "../components/CustomInput";
import { toast } from "react-toastify";

const SignUp = () => {
  const [form, setForm] = useState({});
  const [passwordValidationError, setPasswordValidationError] = useState("");
  const handleOnChange = (e) => {
    // password rules/regex
    //

    const { name, value } = e.target;

    setPasswordValidationError("");

    if (name === "password") {
      // 1. must be longer than 6 char
      value.length < 6 &&
        setPasswordValidationError("must be longer than 6 char");

      // 2. include upper case

      !/[A-Z]/.test(value) &&
        setPasswordValidationError(" must include upper case");

      // 3. must include lower case
      !/[a-z]/.test(value) &&
        setPasswordValidationError(" must include lower case ");

      // 4. must include number

      !/[0-9]/.test(value) &&
        setPasswordValidationError(" must include number ");
    }

    if (name === "confirmPassword") {
      form.password !== value &&
        setPasswordValidationError("Passwords do not match");
    }
    setForm({
      ...form,
      [name]: value,
    });
    console.log(form);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const { confirmPassword, ...rest } = form;

    if (confirmPassword !== rest.password) {
      toast.error("Passwords do not match ");
    }
  };

  const inputs = [
    {
      label: "First Name",
      name: "Name",
      required: true,
      placeholder: "Sam",
    },

    {
      label: "Last Name",
      name: " Last Name",
      required: true,
      placeholder: "Smith",
    },
    {
      label: "Email ",
      name: "Email",
      required: true,
      placeholder: "Sam@email.com",
    },

    {
      label: "Phone",
      name: "Phone",
      required: true,
      placeholder: "5434335",
    },

    {
      label: "Password",
      name: "password",
      required: true,
      type: "password",
      placeholder: "xxxxxx",
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      required: true,
      type: "password",
      placeholder: "xxxxx",
    },
  ];
  return (
    <div>
      <div className="text-center">AniTech</div>

      <hr />

      <Form className="w-50 m-auto border rounded shadow-lg p-3 mt-5">
        <h3>Admin signup only</h3>
        {inputs.map((item, i) => (
          <CustomInput key={i} {...item} onChange={handleOnChange} />
        ))}

        <div>
          {passwordValidationError && (
            <div className="text-danger fw-bold p-3">
              {passwordValidationError}
            </div>
          )}
        </div>

        <div className="d-grid ">
          <Button
            type="submit"
            disabled={passwordValidationError}
            onSubmit={handleOnSubmit}
          >
            Sign Up
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SignUp;