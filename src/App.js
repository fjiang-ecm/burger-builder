import React, { Component } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from "react-redux";

import Auth from "./containers/Auth/Auth";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Layout from './hoc/Layout/Layout';
import Logout from "./containers/Auth/Logout/Logout";
import * as actions from './store/actions/index';
import asyncComponent from "./hoc/asyncComponent/asyncComponent";


const asyncCheckout = asyncComponent(() => {
    return import("./containers/Checkout/Checkout");
});

const asyncOrders = asyncComponent(() => {
    return import("./containers/Orders/Orders");
});


class App extends Component {
    componentDidMount() {
        this.props.onTryAutoSignUp();
    }

    render() {
        let routes = (
            <Switch>
                <Route path="/auth" component={Auth} />
                <Route path="/" exact component={BurgerBuilder} />
                <Redirect to="/" />
            </Switch>
        );

        if (this.props.isAuthenticated) {
            routes = (
                <Switch>
                    <Route path="/checkout" component={asyncCheckout} />
                    <Route path="/orders" component={asyncOrders} />
                    <Route path="/auth" component={Auth} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/" exact component={BurgerBuilder} />
                    <Redirect to="/" />
                </Switch>
            );
        }
        return (
            <div>
                <Layout>
                    {routes}
                </Layout>
            </div>
        );
    }
}

const mapSateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignUp: () => dispatch(actions.authCheckState())
    }
};

export default withRouter(connect(mapSateToProps, mapDispatchToProps)(App));
