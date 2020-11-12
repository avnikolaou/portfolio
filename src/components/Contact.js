import React, { useEffect } from 'react';
import { useFormik } from 'formik';

const Contact = () => {

    useEffect(() => {
        document.title = 'Contact - Avraam Nikolaou'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        }
    });

    return (
        <div className={'contact-container'}>
            <div className={'title'}>
                <h1>Contact</h1>

                <p>Feel free to contact me!</p>
            </div>

            <div className={'form'}>
                <form className={'submission-form'}>
                    <label htmlFor={'name'}>Name</label>
                    <input
                        type="text"
                        id={'name'}
                        name={'name'}
                        value={formik.values.name}
                        onChange={formik.handleChange}
                    />

                    <label htmlFor={'email'}>Email</label>
                    <input
                        type={'email'}
                        id={'email'}
                        name={'email'}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />

                    <label htmlFor={'message'}>Message</label>
                    <textarea
                        id={'message'}
                        name={'message'}
                        rows="5"
                        value={formik.values.message} onChange={formik.handleChange}
                    />

                    <input className={'sendButton'} type={'submit'} value={'Send'} onClick={handleSubmit}/>
                </form>
            </div>

        </div>
    )
}

export default Contact;
