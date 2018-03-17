import React, { Component } from 'react';
import RatingItem from './RatingItem'

class ListItem extends Component {

    render() {
        const { title, image, rating } = this.props;
        return(
            <div>
                <div>
                    {image ? <img src={image}/> :
                        <span>No image</span>
                    }
                </div>
                <h3>{title}</h3>
                <RatingItem rating={rating}/>
            </div>
        );
    }
}

export default ListItem;