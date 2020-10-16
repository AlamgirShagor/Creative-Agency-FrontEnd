import React from 'react';
import Header from '../Header/Header';
import HomeContent from '../HomeCntent/HomeContent'
import './Display.css';
const Display = () => {
    return (
        <div className="display">
            <Header></Header>
            <HomeContent></HomeContent>
        </div>
    );
};

export default Display;