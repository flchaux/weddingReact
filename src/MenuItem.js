import React from 'react';
import { Link } from 'react-router-dom';

export let MenuItem = (props) => {
    let item = props.item;
    return <li><Link to={item.path}>{item.label}</Link></li>
}

