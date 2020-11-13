import React, { useEffect } from 'react';
import { useFormik } from 'formik';

const Contact = () => {

    useEffect(() => {
        document.title = 'Contact - Avraam Nikolaou'
    });

    const initialValues = {
        name: '',
        email: '',
        message: ''
    }

    const onSubmit = (values) => {
        console.log('Form data: ', values)
    }

    const validate = (values) => {
        let errors = {

        }

        if (!values.name) {
            errors.name = 'Required'
        }

        if (!values.email) {
            errors.email = 'Required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid  email format'
        }

        if (!values.message) {
            errors.message = 'Required'
        }

        return errors
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    });

    console.log('Formik errors: ', formik.errors)

    return (
        <div className={'contact-container'}>
            <div className={'title'}>
                <h1>Contact</h1>

                <p>Feel free to contact me!</p>
            </div>

            <div className={'form'}>
                <form className={'submission-form'} onSubmit={formik.handleSubmit}>
                    <div className={'form-control'}>
                        <label htmlFor={'name'}>Name</label>
                        <input
                            type="text"
                            id={'name'}
                            name={'name'}
                            value={formik.values.name}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.name ? <div className={'error'}>{formik.errors.name}</div> : null}
                    </div>

                    <div className={'form-control'}>
                        <label htmlFor={'email'}>Email</label>
                        <input
                            type={'text'}
                            id={'email'}
                            name={'email'}
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.email ? <div className={'error'}>{formik.errors.email}</div> : null}
                    </div>

                    <div className={'form-control'}>
                        <label htmlFor={'message'}>Message</label>
                        <textarea
                            id={'message'}
                            name={'message'}
                            rows='5'
                            value={formik.values.message} onChange={formik.handleChange}
                        />
                        {formik.errors.message ? <div className={'error'}>{formik.errors.message}</div> : null}
                    </div>

                    <button className={'sendButton'} type={'submit'} value={'Send'}>Send</button>
                </form>
            </div>

        </div>
    )
}

export default Contact;
