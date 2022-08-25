import React from "react";
import { useFormik } from "formik";
import "../index.css";

const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  const { handleSubmit, handleChange, values } = formik;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-item">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={handleChange}
          value={values.name}
        />
      </div>
      <div className="form-item">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          value={values.email}
        />
      </div>
      <div className="form-item">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={handleChange}
          value={values.password}
        />
      </div>
      <button className="sumbit-button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default RegisterForm;
