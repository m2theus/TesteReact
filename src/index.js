import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './pages/App';

import Detalhes from './pages/Detalhe';


ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} />
            <Route path="/detalhes/:id" component={Detalhes} />
        </Switch>
    </BrowserRouter>
    ),
    document.getElementById("root")
);