
import React from 'react';
import { DecorationImage } from './DecorationImage';
import { DecorationParagraph } from './DecorationParagraph';

export const ContentRow = (props)=>{
    return <div className="wrap">
            {(props.content.map((decoration, index)=>{
                return ((decoration.image !== undefined) ? 
                    <DecorationImage key="{index}" image={decoration.image} alt={decoration.alt} /> : 
                    <DecorationParagraph key="{index}" text={decoration.text} />)
                }
            ))}
        </div>;
}