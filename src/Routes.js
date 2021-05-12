import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/LandingPage/Index";
import Nav from "./components/Nav/Index";
import MenuItems from "./components/MenuItems";
export default ({history}) => {
    console.log(history)
    return (
        <>
            {/* <Nav /> */}
            <Switch>
                <Route path="/" exact component={Home} />
                {MenuItems.map((x,i)=>(
                    <Route path={x.link} key={i} exact component={x.component}/>
                ))}
            </Switch>
        </>
    );
};
