import React from 'react';
import './homepage.styles.scss';

const HomePage = () => (
    <div className="homepage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">PIZZA</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>

            <div className="menu-item">
                <div className="content">
                    <h1 className="title">CAKES</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>

            <div className="menu-item">
                <div className="content">
                    <h1 className="title">BURGER</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>

            <div className="menu-item">
                <div className="content">
                    <h1 className="title">SANDWICH</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>

            <div className="menu-item">
                <div className="content">
                    <h1 className="title">PASTA</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;