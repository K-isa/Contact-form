import React from 'react';

const TextField = ({ name, value, onChange, label, error, type}) => {

    const getInputClass = () => {
        return 'form-control' + (error ? ' is-invalid' : '')
    }

    return <div className='form-group mb-3 w-50'>
        <label htmlFor={name}>{label}</label>
        <div className="input-group has-validation">
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className={getInputClass()}
            />
            {error && <div className='invalid-feedback '>{error}</div>}
        </div>
    </div>;
}

export default TextField;