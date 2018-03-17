import React, { Component } from 'react';

const ratingNames = [
    'Not rated yet',
    'very poor',
    'poor',
    'avg',
    'good',
    'very good',
];

const getStats = data => data.reduce((prev, current) => {

});

class RatingItem extends Component {

    render() {
        const stats = getStats(this.props.data);
        return (
            <div>
                {ratingNames.map(item => (
                    <div key={item}>{item}: 0 </div>
                ))}
            </div>
        );
    }
}

export default RatingItem;