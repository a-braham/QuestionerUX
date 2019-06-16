import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './container/Home.jsx';
import Signup from './container/Signup.jsx';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/signup' component={Signup}/>
        </Switch>
    </main>
);

export default Main;