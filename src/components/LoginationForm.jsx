import React from "react";
import { useFormik } from "formik";
import "../index.css";
import * as Yup from "yup";

const LoginationForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
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
      <h1>Login</h1>
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
      <h4>Forgot your passport?</h4>
    </form>
  );
};

export default LoginationForm;
