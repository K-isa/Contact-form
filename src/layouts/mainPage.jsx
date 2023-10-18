import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const MainPage = () => {

    return <div className='m-5'>
        <h1 className='mt-3'>Карточка студента</h1>
        <h3 className='mt-3'>Нет данных</h3>
        <Link to="/form">
            <button type="button" className="btn btn-primary mt-3">Добавить</button>
        </Link>
    </div>;
}

export default MainPage;