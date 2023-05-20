import React from "react";
import { useFormik } from "formik";

// Formik

function App() {
  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "First Name is Required";
    } else if (values.firstName.length > 15) {
      errors.firstName = "Must be 15 characters or less";
    }

    if (!values.lastName) {
      errors.lastName = "Last Name is Required";
    } else if (values.lastName.length > 20) {
      errors.lastName = "Must be 20 characters or less";
    }

    if (!values.email) {
      errors.email = "Email is Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Password is Required";
    } else if (values.password.length < 8) {
      errors.password = "Must be 8 characters or more";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert("Form Successfull submited");
    },
  });

  return (
    <div>
      <section className="showcase">
        <div className="overlay">
          <article>
            <h1> Learn to code by watching others</h1>
            <p>
              See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, but understanding how
              developers think is invaluable.{" "}
            </p>
          </article>

          <article>
            <p className="tag">
              {" "}
              <strong>Try it free 7 days </strong> then $20/mo. thereafter
            </p>

            <form className="form" onSubmit={formik.handleSubmit}>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
              {formik.errors.firstName ? (
                <div className="red">{formik.errors.firstName}</div>
              ) : null}
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                onChange={formik.handleChange}
                value={formik.values.lastname}
              />
              {formik.errors.lastName ? (
                <div className="red">{formik.errors.lastName}</div>
              ) : null}
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email ? <div className="red">{formik.errors.email}</div> : null}
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {formik.errors.password ? <div className="red">{formik.errors.password}</div> : null}
              <button type="sumbit">Claim your free trial </button>
              <small>
                By clicking the button, you are agreeing to our{" "}
                <span className="red">Terms and Services</span>
              </small>
            </form>
          </article>
        </div>
      </section>
    </div>
  );
}

export default App;
