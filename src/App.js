import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route,
  useLocation,
 } from 'react-router-dom'
 import { Home } from './Home'  
 import { Menu } from './Menu'  
 import { Page } from './Page.js'
 import { pages } from './Data'
 import { Journee } from './Journee'

import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";


function AnimationApp(){ 
  let location = useLocation();
  let pageNames = Object.keys(pages);
  console.log();
  return <TransitionGroup component={null}>
  <CSSTransition
      key={location.key}
      classNames={{
        enter: 'enter',
        exit: 'exit',
      }}
      timeout={500} 
    > 
    <div className="page">
      <Switch location={location}>
          {pageNames.map((pageName, i) => {
            let page = pages[pageName];
            return <Route exact path={page.path} key={page.path}>
              <Page title={page.title} content={page.content} nextUrl={i !== pageNames.length-1 ? pages[pageNames[i+1]].path : null} />
            </Route> 
          })}
      </Switch>
    </div>
  </CSSTransition>
</TransitionGroup>; 
}

function App() {
  let menu = [
    {'label': 'La journée', 'path': '/journee'},
    {'label': 'Les adresses', 'path': '/adresses'},
    {'label': 'Se loger', 'path': '/dormir'},
    {'label': 'Votre présence', 'path': '/contact'},
  ]
  return (
    <BrowserRouter>
      <div className="menuHeader">
      
      En attendant le grand jour, vous trouverez toutes les informations essentielles pour le déroulement de la journée et une rubrique pour confirmer votre venue.
      </div>
      <Menu items={menu} /> 
      <div className="App">
        <div className="content">
          <Switch>
          <Route  exact path="*">
            <AnimationApp />
          </Route>
       </Switch>
        </div>
      </div> 
    </BrowserRouter>
  );
}

export default App;
