import React from 'react';
import { useForm, Controller } from 'react-hook-form';

export const MyForm = () => {
    const { handleSubmit, control, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>First Name</label>
                <Controller
                    name="firstName"
                    control={control}
                    rules={{ required: 'First Name is required' }}
                    render={({ field }) => <input {...field} />}
                />
                {errors.firstName && <p>{errors.firstName.message}</p>}
            </div>

            <div>
                <label>Last Name</label>
                <Controller
                    name="lastName"
                    control={control}
                    rules={{ required: 'Last Name is required' }}
                    render={({ field }) => <input {...field} />}
                />
                {errors.lastName && <p>{errors.lastName.message}</p>}
            </div>

            <div>
                <label>City</label>
                <Controller
                    name="city"
                    control={control}
                    rules={{ required: 'City is required' }}
                    render={({ field }) => <input {...field} />}
                />
                {errors.city && <p>{errors.city.message}</p>}
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default MyForm;