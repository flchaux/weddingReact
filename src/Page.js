
import React from 'react';
import { ContentRow } from './ContentRow';
import {ArrowLink} from './ArrowLink'

export const Page = (props)=>{
    if(props.content === undefined){
        return <div>
            <h1>{props.title}</h1>
            {props.nextUrl != null ?(<ArrowLink path={props.nextUrl} />) : <></> }
        </div>
    }
    else{
        return <div style={{padding: "5vmin", width: '100%', boxSizing: 'border-box' }}>
            <h2>{props.title}</h2>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <ContentRow content={[props.content[0], props.content[1]]} />
                {props.content.length > 2 ? <ContentRow content={[props.content[2], props.content[3     ]]} /> : <div/>}
            </div>
            {props.nextUrl != null ?(<ArrowLink path={props.nextUrl} />) : <div/> }
        </div>
    }
}