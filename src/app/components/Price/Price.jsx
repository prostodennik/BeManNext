import { React, useState, useEffect } from 'react';
import Btn from '../Btn/Btn';

import './Price.scss';

export const mockData = {
    data: [
        { title: 'Стрижка мужская', price: '1400 Р', id: 0 },
        { title: 'Стрижка детская (от 3 до 10 лет)', price: '1000 Р', id: 0 },
        { title: 'Стрижка машинкой (одна насадка)', price: '600 Р', id: 0 },
        { title: 'Стрижка машинкой (несколько насадок)', price: '800 Р', id: 0 },
        { title: 'коррекция бороды', price: '1000 Р', id: 0 },
        { title: 'опасное бритье (лицо или голова)', price: '1000 Р', id: 0 },
        { title: 'Химическая завивка для мужчин', price: 'ОТ 4000 Р', id: 0 },
        { title: 'Окрашивание для мужчин', price: 'ОТ 2500 Р', id: 0 },

        { title: 'камуфляж бороды (полный)', price: '700 Р', id: 1 },
        { title: 'камуфляж головы', price: '1000 Р', id: 1 },
        { title: 'мытье и укладка', price: '400 Р', id: 1 },
        { title: 'окантовка с подбриванием', price: '300 Р', id: 1 },
        { title: 'депиляция воском', price: '400 / 1000 Р', id: 1 },
        { title: 'черная маска', price: '1000 Р', id: 1 },

        { title: 'друг + друг', price: '2400 Р', id: 2 },
        {
            title: 'папа + сын (стрижка мужская и детская от 3 до 10 лет)',
            price: '2000 Р',
            id: 2,
        },
        { title: 'сын + сын (от 3 до 10 лет)', price: '1800 Р', id: 2 },
        { title: 'Стрижка + коррекция бороды', price: '2000 Р', id: 2 },
    ],
    meta: {
        dataTypes: [
            { id: 0, text: 'Основное' },
            { id: 1, text: 'дополнительно' },
            { id: 2, text: 'комплекс' },
        ],
    },
};

const Price = () => {
    const [menuId, setMenuId] = useState(mockData.meta.dataTypes[0].id);
    const [data, setData] = useState(mockData.data.filter((a) => a.id === menuId));

    useEffect(() => {
        setData(mockData.data.filter((item) => item.id === menuId));
    }, [menuId]);

    return (
        <div className="price" id="Price">
            <h2 className="price__title">Услуги и цены</h2>
            <h3 className="price__subtitle">Добро пожаловать в Be man barbershop!</h3>
            <ul className="price__tab">
                {mockData &&
                    mockData.meta.dataTypes.map((item, index) => {
                        return (
                            <li
                                className={`price__tab-item ${item.id === menuId ? 'active' : ''}`}
                                onClick={() => setMenuId(item.id)}
                                key={index}
                            >
                                {item.text}
                            </li>
                        );
                    })}
            </ul>
            <ul className="price__services">
                {data.map((item, index) => {
                    return (
                        <li className="price__services-item" key={index}>
                            <div className="price__services-services">{item.title}</div>
                            <div className="price__services-price">{item.price}</div>
                        </li>
                    );
                })}
            </ul>
            <Btn />
        </div>
    );
};

export default Price;
