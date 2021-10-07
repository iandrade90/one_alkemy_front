import React from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialSlide = {
  titulo: "",
  slides: [
    {
      text: "",
      image: "",
    },
    {
      text: "",
      image: "",
    },
    {
      text: "",
      image: "",
    },
  ],
};

const slideSchema = Yup.object().shape({
  titulo: Yup.string()
    .required("Título requerido")
    .min(20, "Mínimo 20 caracteres"),
  slides: Yup.array().of(
    Yup.object().shape({
      text: Yup.string().required("Texto requerido"),
      image: Yup.mixed().required("Requiere una imagen"),
    })
  ),
});

function FormEditSlide() {
  const onSubmit = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(false);

    onSubmitProps.resetForm();
  };

  return (
    <>
      <div className="container">
        <Formik
          initialValues={initialSlide}
          validationSchema={slideSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form className="card  col-md-11 p-2 m-3 ">
                <div className="mb-3">
                  <label htmlFor="titulo" className="form-label fs-5">
                    Título del home
                  </label>
                  <Field id="titulo" name="titulo">
                    {(props) => {
                      const { field, meta } = props;
                      return (
                        <div>
                          <textarea
                            type="text"
                            className={
                              "form-control form-control-sm" +
                              (meta.error && meta.touched ? " is-invalid" : "")
                            }
                            id="titulo"
                            name="titulo"
                            rows={3}
                            {...field}
                          />
                          <ErrorMessage
                            name="titulo"
                            component="div"
                            className="text-danger fs-6 fw-lighter"
                          />
                        </div>
                      );
                    }}
                  </Field>
                </div>

                <FieldArray name="slides">
                  {(fieldArrayProps) =>
                    formik.values.slides.map((slide, i) => {
                      const slideErrors =
                        (formik.errors.slides?.length &&
                          formik.errors.slides[i]) ||
                        {};
                      const slideTouched =
                        (formik.touched.slides?.length &&
                          formik.touched.slides[i]) ||
                        {};

                      return (
                        <div key={i} className="list-group  ">
                          <div className="list-group-item">
                            <div className="card-title fs-5 mt-3">
                              Slide {i + 1}
                            </div>
                            <div className="form-row text-start ">
                              <div className="form-group ">
                                <label
                                  htmlFor="titulo"
                                  className="fw-lighter fs-5 pl-3ml-3"
                                >
                                  Texto de la imagen
                                </label>
                                <Field
                                  name={`slides.${i}.text`}
                                  type="text"
                                  className={
                                    "form-control form-control-sm" +
                                    (slideErrors.text && slideTouched.text
                                      ? " is-invalid"
                                      : "")
                                  }
                                />
                                <ErrorMessage
                                  name={`slides.${i}.text`}
                                  component="div"
                                  className="text-danger fs-6 fw-lighter"
                                />
                              </div>
                              <div className="form-group ">
                                <label className="fw-lighter fs-5 ml-3">
                                  Imagen
                                </label>
                                <Field
                                  name={`slides.${i}.image`}
                                  type="file"
                                  className={
                                    "form-control form-control-sm" +
                                    (slideErrors.image && slideTouched.image
                                      ? " is-invalid"
                                      : "")
                                  }
                                />
                                <ErrorMessage
                                  name={`slides.${i}.image`}
                                  component="div"
                                  className="text-danger fs-6 fw-lighter"
                                />
                              </div>
                              <div></div>
                            </div>
                          </div>

                          <div className="col-12 m-2">
                            {i > 2 && i === formik.values.slides.length - 1 && (
                              <button
                                type="button"
                                className="btn btn-primary col-1 m-2 btn-sm"
                                onClick={() => fieldArrayProps.remove(i)}
                              >
                                {" "}
                                -{" "}
                              </button>
                            )}
                            {i === formik.values.slides.length - 1 && (
                              <button
                                type="button"
                                className="btn btn-primary col-1 m-2 btn-sm"
                                onClick={() => fieldArrayProps.push("")}
                              >
                                {" "}
                                +{" "}
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })
                  }
                </FieldArray>

                <div className="col-12 m-2">
                  <button className="btn btn-primary m-2" type="reset">
                    Borrar
                  </button>
                  <button
                    className="btn btn-primary m-2"
                    disabled={!formik.isValid}
                    type="submit"
                  >
                    Cargar slide
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
}

export default FormEditSlide;
