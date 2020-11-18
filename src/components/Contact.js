import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email format').required('Required'),
        message: Yup.string().required('Required'),
    });

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    });

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
                            type={'text'}
                            id={'name'}
                            name={'name'}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.name && formik.errors.name ? (
                            <div className={'error'}>{formik.errors.name}</div>
                        ) : null}
                    </div>

                    <div className={'form-control'}>
                        <label htmlFor={'email'}>Email</label>
                        <input
                            type={'text'}
                            id={'email'}
                            name={'email'}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className={'error'}>{formik.errors.email}</div>
                        ) : null}
                    </div>

                    <div className={'form-control'}>
                        <label htmlFor={'message'}>Message</label>
                        <textarea
                            id={'message'}
                            name={'message'}
                            rows={'5'}
                            onBlur={formik.handleBlur}
                            value={formik.values.message} onChange={formik.handleChange}
                        />
                        {formik.touched.message && formik.errors.message ? (
                            <div className={'error'}>{formik.errors.message}</div>
                        ) : null}
                    </div>

                    <button className={'sendButton'} type={'submit'} value={'Send'}>Send</button>
                </form>
            </div>

        </div>
    )
}

export default Contact;
