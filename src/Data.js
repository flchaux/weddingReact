
import React from 'react';
import chateauImage from './img/chateau.png'
import egliseImage from './img/eglise.png'
import photoImage from './img/photo.png'
import nousImage from './img/nous.png'
import {ContactForm} from './ContactForm' 
import { DecorationImage } from './DecorationImage';

export let pages = {
    home: {
        path: '/',
        title: ['Mathilde', <br/>, '&', <br/>, 'Florian']
    }, 
    journee: {
        path: '/journee',
        title: ['19', <br/>, 'septembre', <br/>, '2020']
    },
    eglise: {
        path: "/eglise",
        title: "Église Saint-Martin",
        content: [
            {image: egliseImage, alt:"eglise"}, 
            {text: [<b>15h</b>, ' - Nous célébrerons notre union au sein de l\'Église de Lézigneux.']}
        ]
    },
    photo: {
        path: "/photo",
        title: "Photos de groupe",
        content: [
            {text: [<b>16h</b>, ' - Nous ferons une pause photo sur le parvent de l\'Église puis au château.']},
            {image: photoImage, alt:"photo de groupe"}, 
        ]
    },
    chateau: {
        path: "/chateau",
        title: "Château de Magneux-Haute-Rive",
        content: [
            {image: chateauImage, alt:"château"}, 
            {text: [<b>A partir de 17h30</b>, ' - Nous vous attendrons au château pour débuter les festivités.']},
        ]
    },
    adresses: {
        path: "/adresses",
        title: "Adresses",
        content: [
            {image: egliseImage, alt:"eglise"},
             {text: <a target="_blank" href="https://goo.gl/maps/Wf7CL5nHqvW3bfAM8" rel="noopener noreferrer">Église Saint Martin, 42600 Lézigneux</a>}, 
            {image: chateauImage, alt:"chateau"}, 
            {text: <a target="_blank" href="https://g.page/chateaudemagneux?share" rel="noopener noreferrer">Le château, 425 Route de Chalain, 42600 Magneux-Haute-Rive</a>} ]
    },
    dormir: {
        path: "/dormir",
        title: "Où se loger ?",
        content: [
            {text: ["Le château de Magneux-Haute-Rive propose des hébergements : ", <ul><li><b>Chambre double :</b> 59€ - 69€</li><li><b>Dortoir</b> : 24€ par personne</li></ul>, 'Le petit déjeuner compris sera servi le dimanche matin dans l\'aile droite du château.']},  
            {image: chateauImage, alt:"chateau"}, 
        ]
    },
    contact: {
        path: "/contact",
        title: "Votre présence",
        content: [
            {image: egliseImage, alt:"contact"}, 
            {text: <ContactForm />}, 
        ]
    },
    merci: {
        path: "/merci",
        title: "Merci !",
        content: [
            {text: ["Nous avons hâte de partager avec vous le plus beau jour de notre vie. Nous comptons sur vous pour être les témoins de notre engagement.", <br/>, <br/>, <br/>,  <DecorationImage image={nousImage} alt="nous"  />]},
            {}
        ]
    },
}
export let pageOrder = Object.keys(pages);