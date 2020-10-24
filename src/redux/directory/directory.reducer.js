const INITIAL_STATE = {
    sections: [{
        title: 'pizza',
        imageUrl: '/img/pizza.jpg',
        id: 1,
        linkUrl: 'shop/pizza'
    },
    {
        title: 'cakes',
        imageUrl: '/img/cake.jpg',
        id: 2,
        linkUrl:'shop/cakes'
    },
    {
        title: 'burger',
        imageUrl:'/img/burger.jpg',
        id: 3,
        linkUrl:'shop/burger'
    },
    {
        title: 'pasta',
        imageUrl:'/img/pasta.jpg',
        id:4,
        size: 'large',
        linkUrl:'shop/pasta'
    },
    {
        title: 'sandwich',
        imageUrl:'/img/sandwich.jpg',
        id: 5,
        size: 'large',
        linkUrl:'shop/sandwich'
    }
   
]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default: 
            return state;
    }
};

export default directoryReducer;
