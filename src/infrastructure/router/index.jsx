import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import React from 'react'

import Login from '../../modules/auth/login'
import Register from '../../modules/auth/register'
import Home from '../../modules/home'
import NotFound from '../../modules/notFound'


export function ApplicationRouter() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/login' exact component={Login} />
                <Route path='/register' exact component={Register} />
                <Route path='/home' exact component={Home} />
                <Route path='/' exact >
                    <Redirect to='/home' />
                </Route>
                <Route component={NotFound} status={404} />
            </Switch>
        </BrowserRouter>
    );
}