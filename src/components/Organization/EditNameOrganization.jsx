import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const initialSlide = {
    name: "",
    logo:""
}

const orgSchema = Yup.object().shape({
    name: Yup.string().required('Se requiere nombre de la organización'),
    logo: Yup.mixed().required('La organización requiere un logo')
});

const EditNameOrganization = () => {
    const onSubmit = async (values, onSubmitProps) => {

        console.log('SUBMIT values', values)

        onSubmitProps.setSubmitting(false)

        // onSubmitProps.resetForm()
    }

    return (
        <>
            <div className="container">
                <Formik initialValues={initialSlide}
                    validationSchema={orgSchema}
                    onSubmit={onSubmit}
                >
                    {
                        (formik) => {
                            return (
                                <Form className="card  col-md-11 p-2 m-3 ">
                                    <div className="mb-3">
                                        <label htmlFor="titulo" className="form-label fs-3">Nombre de la organización</label>
                                        <Field id="name" name="name"  className="mb-3">
                                            {
                                                props => {
                                                    const { field, meta } = props
                                                    return (
                                                        <div>
                                                            <textarea type="text" className={'form-control form-control-sm' + (meta.error && meta.touched ? ' is-invalid' : '')} id='titulo' name="name" rows={3} {...field} />
                                                            <ErrorMessage name="name" component="div" className="text-danger fs-5 fw-lighter" />
                                                        </div>
                                                    )
                                                }
                                            }
                                        </Field>
                                        </div>
                                        <div className="mb-3">
                                        <label htmlFor="titulo" className="form-label fs-3">Logo</label>
                                        <Field id="logo" name="logo"  >
                                            {
                                                props => {
                                                    const { field, meta } = props
                                                    return (
                                                        <div>
                                                            <Field type="file" className={'form-control form-control-sm' + (meta.error && meta.touched ? ' is-invalid' : '')} id='logo' name="logo"  {...field} />
                                                            <ErrorMessage name="logo" component="div" className="text-danger fs-5 fw-lighter" />
                                                        </div>
                                                    )
                                                }
                                            }
                                        </Field>
                                    </div>
                                    <div className="col-12 m-2">
                                        <button className="btn btn-primary m-2" type="reset">Borrar</button>

                                        <button className="btn btn-primary m-2"
                                            disabled={!formik.isValid}
                                            type="submit" >Cargar Datos</button>

                                    </div>
                                </Form>

                            )
                        }
                    }
                </Formik>
            </div>
        </>
    )
}

export default EditNameOrganization
