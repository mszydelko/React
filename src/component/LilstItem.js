import React, { Component } from 'react';

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
                <div>{rating}</div>
            </div>
        );
    }
}

export default ListItem;