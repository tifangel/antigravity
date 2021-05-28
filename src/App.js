import React from "react"
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css'

import Header from './components/header'
import DealerPage from './pages/dealerpage'
import OutletPage from "./pages/outletpage"
import X7Page from "./pages/x7page"

function App() {
    return (
        <React.Fragment>
            <Header/>
            <BrowserRouter>
                <Switch>
                    <Route exact={true} path="/" component={DealerPage}/>
                    <Route exact path="/outlet" component={OutletPage}/>
                    <Route exact path="/x7" component={X7Page}/>
                </Switch>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
