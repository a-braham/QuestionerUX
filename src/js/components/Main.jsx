import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './container/Home.jsx';
import Login from './container/Login.jsx';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
        </Switch>
    </main>
);

export default Main;