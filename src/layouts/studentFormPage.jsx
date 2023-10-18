import React, { useEffect, useState } from 'react';
import TextField from '../components/textField';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { parceYupError } from '../utils/parceYupError';

const StudentFormPage = () => {
    const [data, setData] = useState({ name: '', surname: '', birth: '', portfolio: '' })
    const [errors, setErrors] = useState({})

    const handleChange = ({ target }) => {
        setData((prevstate) => ({ ...prevstate, [target.name]: target.value }))
    }

    const validationSchema = yup.object().shape({
        name: yup.string()
            .required("Имя обязательно для заполнения"),
        surname: yup.string().required("Фамилия обязательна для заполнения"),
        birth: yup.string()
            .required("Год рождения обязателен для заполнения").test({
                name: 'is-sku',
                skipAbsent: true,
                test(value, ctx) {
                    if ( value < 1910) {
                        return ctx.createError({ message: 'Год рождения введен некорректно' })
                    }
                    if ( value > 2017) {
                        return ctx.createError({ message: 'Год рождения введен некорректно' })
                    }
                    return true
                }
            }),
        portfolio: yup.string().required("Необходимо прикрепить ссылку на портфолио").url("Некорректный адрес ссылки")
    });

    const validate = () => {
        validationSchema.validate(data, { abortEarly: false }).then(() => setErrors({})).catch((yupError) => {
            const errors = parceYupError(yupError)
            setErrors(errors)
        })
        return Object.keys(errors).length === 0
    }

    useEffect(() => {
        validate();
    }, [data])

    const isValid = Object.keys(errors).length === 0

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate()
        if (!isValid) return;
        console.log(data)
    }

    return <form onSubmit={handleSubmit}>

        <div className='w-75 mt-5 mx-auto'>
            <h1>Создать</h1>
            <div className='mt-2'>
                <TextField name={"name"} type={'text'} value={data.name} onChange={handleChange} label={"Имя"} error={errors.name}></TextField>
                <TextField name={"surname"} type={'text'} value={data.surname} onChange={handleChange} label={"Фамилия"} error={errors.surname}></TextField>
                <TextField name={"birth"} type={"number"} value={data.birth} onChange={handleChange} label={"День рождения"} error={errors.birth}></TextField>
                <TextField name={"portfolio"} type={'text'} value={data.portfolio} onChange={handleChange} label={"Портфолио"} error={errors.portfolio}></TextField>
            </div>
            <Link to="/studentCard">
                <button type="button" className="btn btn-primary mt-3">Создать</button>
            </Link>
        </div>
    </form>

}

export default StudentFormPage;