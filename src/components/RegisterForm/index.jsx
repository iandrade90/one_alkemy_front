import React from "react";
import { Formik, Form } from "formik";
import { formSchema } from "./validations";
import { postService } from "../../services";
import InputRegisterForm from "./InputForm";
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
          firstName: values.name,
          lastName: values.lastName,
          email: values.email,
          password: values.password,
        };
        postService("auth/register", userData).then((response) => {});
      }}
    >
      {({ errors }) => (
        //Formulario de registro
        <div className="h-screen d-flex align-items-center justify-content-center flex-column registerContainer">
          <div className="">
            <div className="d-flex flex-column align-items-center top-form px-5 text-center ">
              <img src="./assets/logo.png" alt="" className="regLogo" />
              <h2>Registráte con tu Email</h2>
            </div>
            <Form className="row bg-white widthRegisterForm g-3 border rounded p-3 mt-3 m-auto shadow">
              <InputRegisterForm
                name="name"
                type="text"
                id="name"
                placeholder="Nombre"
                errorsName={errors.name}
                style="col-12 col-md-6"
              />

              <InputRegisterForm
                name="lastName"
                type="text"
                id="lastName"
                placeholder="Apellido"
                errorsName={errors.lastName}
                style="col-12 col-md-6"
              />

              <InputRegisterForm
                name="email"
                type="email"
                id="email"
                placeholder="Email"
                errorsName={errors.email}
                style="col-12"
              />

              <InputRegisterForm
                name="password"
                type="password"
                id="password"
                placeholder="Contraseña"
                errorsName={errors.password}
                style="col-12"
              />

              <div className="col-12">
                <button type="submit" className="btn btn-register w-100">
                  Registrarse
                </button>
              </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default RegisterForm;
