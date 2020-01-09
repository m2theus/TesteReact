import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './pages/App';
import Detalhe from './pages/Detalhe';

ReactDOM.render((
    
    <BrowserRouter>
        <Switch>
        <Route  path="/detalhe/:id?" component={Detalhe} />
        <Route  path="*" component={App} />
           
        </Switch>
    </BrowserRouter>
    ),
    document.getElementById("root")
);