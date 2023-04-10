import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [items, setItems] = useState([])
    useEffect( () => {
        fetch('prices.json')
            .then(res => res.json())
            .then(data => setItems(data))

    }
        ,[])
    return (
        <div>
            <h1 className='bg-blue-200 text-5xl text-center font-bold p-4'>My Awesome affordable price</h1>
            <div className='grid grid-cols-3 gap-4'>
                {
                    items.map(item => <PriceCard key={item.id} item={item}></PriceCard>)
                    
                }
            </div>
        </div>
    );
};

export default PriceList;