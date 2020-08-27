
import React from 'react';

export const DecorationImage = (props)=>{
    return <img src={props.image} style={{maxHeight: "15vmin", maxWidth: '15vmin'}} alt={props.alt} />
}