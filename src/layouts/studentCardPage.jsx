import React from 'react';
import { Link } from 'react-router-dom';

const StudentCardPage = () => {
    let today = new Date();
    const localData = JSON.parse(localStorage.getItem('data'))

    return <div className='w-75 mt-5 mx-auto'>
        {console.log(localData)}
        <h1 className='mt-3'>Карточка студента</h1>
        <div className='mt-3'>
            <h5 className='mt-3'><b>Имя:</b> {localData.name}</h5>
            <h5 className='mt-3'><b>Фамилия:</b> {localData.surname}</h5>
            <h5 className='mt-3'><b>Год рождения:</b> {localData.birth} ({today.getFullYear() - localData.birth})</h5>
            <h5 className='mt-3'><b>Портфолио:</b><a href={localData.portfolio}>{localData.portfolio}</a> </h5>
        </div>
        <Link to="/form">
            <button type="button" className="btn btn-primary mt-3">Редактировать</button>
        </Link>
    </div>;
}

export default StudentCardPage;