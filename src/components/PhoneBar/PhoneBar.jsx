import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

const PhoneBar = () => {
    const [phone, setPhone] = useState([])
    useEffect( () => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const loadedData = data.data.data;
            const phonesData = loadedData.map(phone => {
                const parts = phone.slug.split('-');
                const price = parseInt(parts[1]);
                const phoneInfo = {
                    name: phone.phone_name,
                    price : price
                }
                return phoneInfo
            })
            setPhone(phonesData);
        })
    }
        ,[])
    return (
        <div>
            <BarChart width={1000} height={200} data={phone}>
                <XAxis dataKey='name'></XAxis>
                <YAxis/>
                <Bar dataKey='price' fill='#8884d8'/>
            </BarChart>
        </div>
    );
};

export default PhoneBar;