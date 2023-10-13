import React from 'react';

const TextField = ({ name, value, onChange, label }) => {

    return <div className='mb-3'>
        <label htmlFor={name}>{label}</label>
        <div className="input-group has-validation">
            <input
                type="text"
                class="form-control"
                id={name}
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    </div>;
}

export default TextField;