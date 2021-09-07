import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import CursiveButton from './CursiveButton.js'
import Button from './Button.js'

const Header = () => {
    return (
        <div className="header">
            <div class="left">
                <Button text="Stat 198" link="/"/>
            </div>
            <div class="right">
                <Button text="Grading" link="/grading"/>
                <Button text="Resources" link="/resources"/>
            </div>
        </div>
    );
}

export default Header;
