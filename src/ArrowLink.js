
import React from 'react';
import arrowImage from './img/arrow.png'
import { Link } from 'react-router-dom';

export const ArrowLink = (props) => {
    return <Link to={props.path}><img src={arrowImage} className="nextArrow" alt="Suivant" /></Link>
}