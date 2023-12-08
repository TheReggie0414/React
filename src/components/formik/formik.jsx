import React from 'react';
import { useFormik } from 'formik';

export const MyForm = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            city: '',
        },
        validate: (values) => {
            const errors = {};
            if (!values.firstName) {
                errors.firstName = 'Required';
            }
            if (!values.lastName) {
                errors.lastName = 'Required';
            }
            if (!values.city) {
                errors.city = 'Required';
            }
            return errors;
        },
        onSubmit: (values) => {
            console.log('Form submitted:', values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                />
                {formik.touched.firstName && formik.errors.firstName && (
                    <div style={{ color: 'red' }}>{formik.errors.firstName}</div>
                )}
            </div>

            <div>
                <label htmlFor="lastName">Last Name:</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                />
                {formik.touched.lastName && formik.errors.lastName && (
                    <div style={{ color: 'red' }}>{formik.errors.lastName}</div>
                )}
            </div>

            <div>
                <label htmlFor="city">City:</label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.city}
                />
                {formik.touched.city && formik.errors.city && (
                    <div style={{ color: 'red' }}>{formik.errors.city}</div>
                )}
            </div>

            <div>
                <button type="submit">Вiдправити</button>
            </div>
        </form>
    );
};

export default MyForm;