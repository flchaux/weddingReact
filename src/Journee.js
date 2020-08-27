import React from 'react';
import { ArrowLink } from './ArrowLink'
import { pages, pageOrder } from './Data'

export const Journee = () => 
{ 
    return <div>
            <h1>19 septembre 2020</h1>
            <ArrowLink path={pages.eglise.path} />
        </div>; 
} 