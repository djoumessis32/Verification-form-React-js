import React, { useEffect, useState } from "react";
import Validation from "./Validation";

const SingupForm = ({ submitForm }) => {
  const [values, setValue] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  const handleChange = (e) => {
    setValue({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(values));
    setDataIsCorrect(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      submitForm(true);
    }
  }, [errors]);
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className="title">Create Account</h2>
          <form action="" className="form-wrapper">
            <div className="name">
              <label className="label">Full name</label>
              <input
                type="text"
                className="input"
                name="fullname"
                value={values.fullname}
                onChange={handleChange}
              />
              {errors.fullname && <p className="error">{errors.fullname}</p>}
            </div>
            <div className="email">
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="password">
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div>
              <button className="submit" onClick={handleFormSubmit}>
                Sing Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingupForm;
