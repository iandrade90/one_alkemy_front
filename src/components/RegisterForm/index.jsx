import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { formSchema } from "./validations";
import "./style.css";

const RegisterForm = () => {
  return (
    <Formik
      //Valores iniciales de los inputs
      initialValues={{
        name: "",
        lastName: "",
        email: "",
        password: "",
      }}
      //Validaciones importadas de validations.js
      validationSchema={formSchema}
      onSubmit={(values, { resetForm }) => {
        resetForm();

        //Almacenado de los datos del usuario en espera del servicio de peticiones HTTP
        const userData = {
          name: values.name,
          lastName: values.lastName,
          email: values.email,
          password: values.password,
        };
      }}
    >
      {({ errors }) => (
        //Formulario de registro
        <Form className="row widthRegisterForm g-3 border rounded p-3 mt-3 m-auto shadow">
          <div className="col-12 col-md-6">
            <Field
              type="text"
              className="form-control border rounded"
              id="name"
              name="name"
              placeholder="Nombre"
            />

            <ErrorMessage
              name="name"
              component={() => (
                <div className="float-start text-danger font-error fw-lighter">
                  {errors.name}
                </div>
              )}
            />
          </div>

          <div className="col-12 col-md-6">
            <Field
              type="text"
              className="form-control border rounded"
              id="lastName"
              name="lastName"
              placeholder="Apellido"
            />

            <ErrorMessage
              name="lastName"
              component={() => (
                <div className="float-start text-danger font-error fw-lighter">
                  {errors.lastName}
                </div>
              )}
            />
          </div>

          <div className="col-12">
            <Field
              type="email"
              className="form-control border rounded"
              id="email"
              name="email"
              placeholder="Email"
            />

            <ErrorMessage
              name="email"
              component={() => (
                <div className="float-start text-danger font-error fw-lighter">
                  {errors.email}
                </div>
              )}
            />
          </div>

          <div className="col-12">
            <Field
              type="password"
              className="form-control border rounded"
              id="password"
              name="password"
              placeholder="Contraseña"
            />

            <ErrorMessage
              name="password"
              component={() => (
                <div className="float-start text-danger font-error fw-lighter">
                  {errors.password}
                </div>
              )}
            />
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <button type="submit" className="btn btn-primary float-start w-100">
              Registrarse
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
