import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import history from "./history";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Login" component={LoginPage} />
                    <Route path="/Register" component={RegisterPage} />
                </Switch>
            </Router>
        )
    }
}