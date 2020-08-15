import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Header from "./components/Header";

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/saved/" component={Saved} />
                <Route path="*" component={Search} />
            </Switch>
        </Router>
    );
}


export default App;
