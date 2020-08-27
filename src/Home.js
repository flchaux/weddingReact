import React from 'react';
import { ArrowLink } from './ArrowLink'
import { pages, pageOrder } from './Data'

export const Home = () => 
{ 
    return <div>
            <h1>Mathilde<br/>&amp;<br/>Florian</h1>
            <ArrowLink path="/journee" />
        </div>; 
} 