import React, { useState } from 'react';
import TextField from '../components/textField';
import { Link } from 'react-router-dom';

const StudentFormPage = () => {
    const [data, setData] = useState({ name: '', surname: '', birth: '', portfolio: '' })

    const handleChange = ({ target }) => {
        setData((prevstate) => ({ ...prevstate, [target.name]: target.value }))
    }
    return <div className='m-3'>
        <h1>Создать</h1>
        <div className='row'>
            <TextField name={"name"} value={data.name} onChange={handleChange} label={"Имя"}></TextField>
            <TextField name={"surname"} value={data.surname} onChange={handleChange} label={"Фамилия"}></TextField>
            <TextField name={"birth"} value={data.birth} onChange={handleChange} label={"День рождения"}></TextField>
            <TextField name={"portfolio"} value={data.portfolio} onChange={handleChange} label={"Портфолио"}></TextField>
        </div>
        <Link to="/studentCard">
            <button type="button" className="btn btn-primary mt-3">Создать</button>
        </Link>
    </div>;
}

export default StudentFormPage;