import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './pages/App';
import Detalhes from './pages/Detalhes';

ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            {/* <Route path="/detalhes/:id" component={Detalhes} /> */}
        </Switch>
    </BrowserRouter>
    ),
    document.getElementById("root")
);