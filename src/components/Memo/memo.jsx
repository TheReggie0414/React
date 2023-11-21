import React, { useState } from 'react';
import Input from './input';

export const Memo = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (value) => {
        setInputValue(value);
    };

    return (
        <div>
            <h1>Домашка по Мемо</h1>
            <Input defaultValue={inputValue} onChange={handleInputChange} />
            <p>Значення введення: {inputValue}</p>
        </div>
    );
};

export default Memo;