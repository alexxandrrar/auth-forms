import React from "react";
import { useFormik } from "formik";
import "../index.css";
import * as Yup from "yup";

const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be under 15 symbols")
        .min(2, "Must be more than 2 symbols")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    }),
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  const { handleSubmit, handleChange, values, errors, touched } = formik;

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign up to</h1>
      <div className="form-item">
        <label className="item" htmlFor="name">
          Name
        </label>
        <input
          placeholder="Enter your name"
          className="input"
          id="name"
          name="name"
          type="text"
          onChange={handleChange}
          value={values.name}
        />
        {touched.name && errors.name ? (
          <div className="error">{errors.name}</div>
        ) : null}
      </div>
      <div className="form-item">
        <label className="item" htmlFor="email">
          Email
        </label>
        <input
          placeholder="Enter your email"
          className="input"
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          value={values.email}
        />
        {touched.email && errors.email ? (
          <div className="error">{errors.email}</div>
        ) : null}
      </div>
      <div className="form-item">
        <label className="item" htmlFor="password">
          Password
        </label>
        <input
          placeholder="Enter your password"
          className="input"
          id="password"
          name="password"
          type="password"
          onChange={handleChange}
          value={values.password}
        />
        {touched.password && errors.password ? (
          <div className="error">{errors.password}</div>
        ) : null}
      </div>
      <button className="sumbit-button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default RegisterForm;
