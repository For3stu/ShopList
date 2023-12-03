import React from 'react';

const Card = ({name, price, shopname, id}) => {
    return (
        <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='products' src={`https://robohash.org/${id}test?200x200` }/>
            <div>
                <h2>{name}</h2>
                <p>{price}</p>
                <p>{shopname}</p>
            </div>
        </div>
    );
}

export default Card;