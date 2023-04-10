import React from 'react';

const PriceCard = ({item}) => {
    return (
        <div className='bg-blue-100 text-center rounded mt-3 p-4 '>
            <h2 className='text-blue-800 font-extrabold text-2xl'>{item.price}</h2>
            <h4 className='font-bold'>{item.type}</h4>
            <ul>
                {
                    item.features.map(feature => <li>{feature}</li>)
                }
            </ul>
            <button className='w-100 bg-green-500 px-10 py-2 border border-gray-600'>Buy now</button>
        </div>
    );
};

export default PriceCard;