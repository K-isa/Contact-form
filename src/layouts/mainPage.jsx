import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const MainPage = () => {
    let today = new Date();
    const localData = JSON.parse(localStorage.getItem('data'))
    const history = useHistory()

    const handleClick = () => {
        history.push('/form')
    }

    return <div className='w-75 mt-5 mx-auto'>
        <h1 className='mt-3'>Карточка студента</h1>
        {localData
            ?
            <div className='mt-3'>
                <h5 className='mt-3'><b>Имя:</b> {localData.name}</h5>
                <h5 className='mt-3'><b>Фамилия:</b> {localData.surname}</h5>
                <h5 className='mt-3'><b>Год рождения:</b> {localData.birth} ({today.getFullYear() - localData.birth})</h5>
                <h5 className='mt-3'><b>Портфолио: </b><a target="_blank" href={localData.portfolio}>{localData.portfolio}</a> </h5>
            </div>
            : <div>
                <h3 className='mt-3'>Нет данных</h3>
            </div>
        };
        <button type="button" className="btn btn-primary mt-3" onClick={handleClick}>{localData ? 'Редактировать' : 'Добавить'}</button>
    </div>
}

export default MainPage;