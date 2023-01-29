
import React from 'react';
import * as Yup from 'yup';
import { withFormik, FormikProps, FormikErrors, Form, Field, ErrorMessage } from 'formik';
import NavBar from "../../components/NavBar/NavBar"
import emailjs from "@emailjs/browser"
import ButtonBar from '../../components/ButtonBar/ButtonBar';
import "./Contact.css"
import phone from "./imagenes/phone.png"
import gmail from "./imagenes/gmail.png"
import { IconBase } from 'react-icons/lib';
import IonIcon from '@reacticons/ionicons';

// Shape of form values
interface FormValues {
    name: string;
    email: string;
    message: string;
}

interface OtherProps {
    message: string;
}

// Aside: You may see InjectedFormikProps<OtherProps, FormValues> instead of what comes below in older code.. InjectedFormikProps was artifact of when Formik only exported a HoC. It is also less flexible as it MUST wrap all props (it passes them through).
const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
    const { touched, errors, isSubmitting, message } = props;

    function submitForm(e: any) {

        e.preventDefault()
        console.log(e.target, "addPersona")
        emailjs.sendForm('service_vfvnhsc', 'template_mihhwsa', e.target, '6wRJW_4Y-H_LANUgQ')
            .then(response => console.log(response))
            .catch(error => console.log(error))

    }

    return (
        <>
            <NavBar />
            <div className="containerForm">
                <div className="containerTitForm">
                    <h5>Formulario de Contacto</h5>
                </div>
                <Form className="Form" onSubmit={(e: any) => submitForm(e)}>
                    <h1>{message}</h1>
                    <label className="labelForm" htmlFor="email">E-mail</label>
                    <Field type="email" name="email" className="Field" />
                    {touched.email && errors.email &&
                        <ErrorMessage
                            name="email"
                            component={() => <div className="error">{errors.email}</div>}
                        ></ErrorMessage>
                    }

                    <label className="labelForm" htmlFor="name">Nombre</label>
                    <Field type="name" name="name" className="Field" />
                    {touched.name && errors.name &&
                        <ErrorMessage
                            name="name"
                            component={() => <div className="error">{errors.name}</div>}
                        ></ErrorMessage>
                    }

                    <label className="labelForm" htmlFor="name">Mensaje</label>
                    <Field type="message" name="message" className="Field" />
                    {touched.message && errors.message &&
                        <ErrorMessage
                            name="message"
                            component={() => <div className="error">{errors.message}</div>}
                        ></ErrorMessage>
                    }

                    <button type="submit" disabled={isSubmitting} className="buttonForm">
                        Submit
                    </button>
                </Form>
            </div>
            <div className="titGlobal">
                <h3>OTROS MEDIOS DE CONTACTO</h3>
            </div>
            <div className="mediosContact">
                <div>
                    <img className="iconoContact" src={phone} alt="phoneContact" />
                    <p>Venta teléfonica Atención al cliente</p>
                    <p className="textContact">3876153799</p>
                    <p>Lunes a Sábados de 9:00 a 21:00hs</p>
                </div>
                <div>
                    <img className="iconoContact" src={gmail} alt="gmailContact" />
                    <p>Atención al cliente Correo Electronico</p>
                    <p className="textContact">Email: pymestiendavirtual@gmail.com</p>
                    <p>Lunes a Sábados de 9:00 a 21:00hs</p>
                </div>
            </div>

            <div className="mediosContact">
                <h3>PREGUNTAS FRECUENTES</h3>

                <h5>Que incluye la Pagina</h5>
            </div>

            <ButtonBar />
        </>
    );
};

// The type of props MyForm receives
interface MyFormProps {

    initialEmail?: string;
    message: string; // if this passed all the way through you might do this or make a union type
}

// Wrap our form with the withFormik HoC
const MyForm = withFormik<MyFormProps, FormValues>({
    // Transform outer props into form values
    mapPropsToValues: props => {
        return {
            name: '',
            email: props.initialEmail || '',
            message: ''
        };
    },

    // Add a custom validation function (this can be async too!)
    validate: (values: FormValues) => {
        let errors: FormikErrors<FormValues> = {};
        if (!values.name) {
            errors.name = (" * por favor ingresa nombre");
            console.log(values)
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
            errors.name = (" * el nombre con solo letras y espacios")
        }

        if (!values.email) {
            errors.email = 'Required';
        } else {
            if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = " * correo invalido";
            }
        }

        if (!values.message) {
            errors.message = ("* por favor ingrese mensaje");
            console.log(values)
        } else if (!/^[a-zA-Z0-9\_\-\s]{4,100}$/.test(values.message)) {
            errors.message = (" * el mensaje con solo letras y espacios")
        }
        return errors;
    },

    handleSubmit: (e, { resetForm }) => {

        console.log(e)
        resetForm()
    },
})(InnerForm);

// Use <MyForm /> wherevs
const Basic = () => (
    <div>
        <MyForm message="Complete el Formulario" />
    </div>
);

export default Basic;