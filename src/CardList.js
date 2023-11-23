import React from 'react';
import Card from './Card';

const CardList = ({food}) => {
    const cardComponent = food.map((user, i) => {
        return (
        <Card 
            key={i} 
            id={food[i].id} 
            name={food[i].name} 
            price={food[i].price} 
            shopname={food[i].shopname}
        />
        );
    })
    return (
        <div>
            {cardComponent}
        </div>
    );
}

export default CardList;