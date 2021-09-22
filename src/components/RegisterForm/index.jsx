import React from "react";
import { Formik, Form } from "formik";
import { formSchema } from "./validations";
import { postService } from "../../services";
import InputRegisterForm from "./InputForm";
import { useHistory } from "react-router";
import { Alert } from "..";
import "./style.css";


const RegisterForm = () => {
  const history = useHistory();
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
      onSubmit={async (values, { resetForm }) => {
        
        //Almacenado de los datos del usuario en espera del servicio de peticiones HTTP
        const userData = {
          firstName: values.name,
          lastName: values.lastName,
          email: values.email,
          password: values.password,
        };
        try {
          const response = await postService("auth/register", userData);
          resetForm();
          await Alert({
            icon: 'success',
            title: `Bienvenido ${response?.data?.firstName || ""}` ,
            text: "Registro exitoso, iniciá sesión para continuar",
            showConfirmButton: false,
            timer: 1900
          }).then(()=>history.push('/login'));
        } catch (error) {
          await Alert({
              icon: 'error',
              title: `${error.response.data?.msg || "Ops..."}`,
              text: error.response.data?.details?.map(d =>(d.msg)),
            })
        }
        
      }}
    >
      {({ errors }) => (
        //Formulario de registro
        <div className="h-screen d-flex align-items-center justify-content-center flex-column registerContainer">
          <div className="">
            <div className="d-flex flex-column align-items-center top-form px-5 text-center ">
              <img src="./assets/logo.png" alt="" className="logo" />
              <h2>Inicia sesión con tu cuenta</h2>
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