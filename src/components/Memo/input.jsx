import React from 'react';

export const Input = React.memo(({ defaultValue, onChange }) => {
    console.log('Rendering Input component');

    const handleChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <input
            type="text"
            value={defaultValue}
            onChange={handleChange}
        />
    );
});

export default Input;