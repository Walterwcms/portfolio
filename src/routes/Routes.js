import {Route, Router} from "react-router-dom";
import history from "../services/history";

import Header from "../components/Header/Header";
import Aboutme from "../components/Aboutme/Aboutme";
import MySkills from "../components/MySkills/MySkills";

export default function Routes(){
    return(
        <Router history={history}>
            <Route path="/">
                <Header/>
                <Aboutme/>
                <MySkills/>
            </Route>
        </Router>
    )
}

