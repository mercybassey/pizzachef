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
                id: 1,
                linkUrl: 'pizza'
            },
            {
                title: 'cakes',
                imageUrl: '/img/cake.jpg',
                id: 2,
                linkUrl:''
            },
            {
                title: 'burger',
                imageUrl:'/img/burger.jpg',
                id: 3,
                linkUrl:''
            },
            {
                title: 'pasta',
                imageUrl:'/img/pasta.jpg',
                id:4,
                size: 'large',
                linkUrl:''
            },
            {
                title: 'sandwich',
                imageUrl:'/img/sandwich.jpg',
                id: 5,
                size: 'large',
                linkUrl:''
            }
           
        ]
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    };

};

export default Directory;