import React from 'react';
import { MenuItem } from './MenuItem';

export let Menu = (props) => {
    return <ul className="Menu">
        {props.items.map((item) => <MenuItem key={item.path} item={item} />)}
    </ul>;
}