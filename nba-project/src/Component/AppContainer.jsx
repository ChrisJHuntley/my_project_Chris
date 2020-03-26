import React, { Component } from "react";
import TeamSelection from "./TeamSelection";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

class AppContainer extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div>
                <h1>Welcome NBA Fan</h1>
                <img src="https://content.sportslogos.net/news/2017/07/New-NBA-Logo-1.png" alt="nba-logo"/>
                <h2>Click Below To view Available Teams For Your Fan Page!!!!</h2>
                {/* ToDo - go back and make link go to seperate page */}
                <Router>
                    <Link to ='/'>NBA Available Teams</Link>
                    <Route>
                        <TeamSelection/>
                    </Route>
                </Router>
            </div>
        )
    }
}
export default AppContainer