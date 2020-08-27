
import React from 'react';

export const Column = (props)=>{
    return <div style={{display: "flex", flexDirection: "column",  ...props.style}}>
        {props.children}
    </div> 
}
export const Row = (props)=>{
    return <div style={{display: "flex", flexDirection: "row", ...props.style}}>
        {props.children}
    </div>
}
export const Helper = () =>{}