import React from 'react';
import './Retreat.css';

const RetreatList = ({ retreats }) => (
    <div className="retreat-list">
        { retreats.map((retreat) => (
            <div key={ retreat.id } className="retreat-card">
                <img src={ retreat.image } alt={ retreat.title } />
                <h2>{ retreat.title }</h2>
                <p>{ retreat.description }</p>
                <p>Date: { retreat.date }</p>
                <p>Location: { retreat.location }</p>
                <p className='price'>Price: ${ retreat.price }</p>
                {/* if you want to show other details*/ }
                {/* <p>Type: { retreat.type }</p>
                <p>Condition: { retreat.condition }</p>
                <p>Duration: { retreat.duration } days</p>
                <p>Tags: { retreat.tag.join(', ') }</p> */}
            </div>
        )) }
    </div>
);

export default RetreatList;
