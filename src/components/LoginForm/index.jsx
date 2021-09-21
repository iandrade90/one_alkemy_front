import React, { useState } from "react";
import "./style.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { HiExclamationCircle as DangerIcon } from "../../icons";

const LoginForm = () => {
  const [data, setData] = useState({});
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Direccion de email invalido")
        .required("Requerido"),
      password: Yup.string()
        .min(6, "Debe tener al menos 6 caracteres")
        .required("Requerido"),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      setData(values);
    },
  });

  return (
    <div className='h-screen d-flex align-items-center justify-content-center flex-column '>
      <div className=''>
        {/* TOP */}
        <div className='d-flex flex-column align-items-center top-form px-5 text-center '>
          <img src='./assets/logo.png' alt='' className='logo' />
          <h2>Inicia sesión con tu cuenta</h2>
        </div>
        {/* BOTTOM */}
        <div className='bottom-form px-5 mt-1 mt-md-3 shadow rounded'>
          <form onSubmit={formik.handleSubmit}>
            <div className='form-group form-g'>
              <label htmlFor='email'>Email</label>
              <input
                type='text'
                placeholder=' '
                className={`form-control ${
                  formik.touched.email
                    ? formik.errors.email
                      ? "input-error"
                      : ""
                    : ""
                }`}
                id='email'
                {...formik.getFieldProps("email")}
              />
              {formik.errors.email && formik.touched.email ? (
                <div className='error-message'>
                  <DangerIcon />
                  <span>{formik.errors.email}</span>
                </div>
              ) : null}
            </div>
            <div className='form-group form-g mt-4'>
              <label for='password'>Contraseña</label>
              <input
                placeholder=' '
                type='password'
                className={`form-control ${
                  formik.touched.password
                    ? formik.errors.password
                      ? "input-error"
                      : ""
                    : ""
                }`}
                id='password'
                {...formik.getFieldProps("password")}
              />
              {formik.errors.password && formik.touched.password ? (
                <div className='error-message'>
                  <DangerIcon />
                  <span>{formik.errors.password}</span>
                </div>
              ) : null}
            </div>

            <div className='mt-4 d-flex justify-content-between'>
              <div className='custom-control custom-checkb d-flex align-items-center'>
                <input
                  type='checkbox'
                  className='custom-control-input'
                  id='customCheck1'
                />
                <label className='custom-control-label ms-2' for='customCheck1'>
                  Recordarme
                </label>
              </div>
              <div className='forgot-password'>
                <a>Olvidaste tu contraseña?</a>
              </div>
            </div>

            <div className='d-grid mt-4'>
              <button className='btn login' type='submit'>
                Inciar sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
