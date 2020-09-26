import React from 'react';
import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component'

class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections: [{
                title: 'pizza',
                imageUrl: '/img/pizza.jpg',
                id: 1
            },
            {
                title: 'cakes',
                imageUrl: '/img/cake.jpg',
                id: 2
            },
            {
                title: 'burger',
                imageUrl:'/img/burger.jpg',
                id: 3
            },
            {
                title: 'pasta',
                imageUrl:'/img/pasta.jpg',
                id:4,
                size: 'large',
            },
            {
                title: 'sandwich',
                imageUrl:'/img/sandwich.jpg',
                id: 5,
                size: 'large',
            }
           
        ]
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({title, imageUrl, id, size}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                    ))
                }
            </div>
        )
    };

};

export default Directory;