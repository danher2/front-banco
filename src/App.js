import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthRouter from './routers/AuthRouter';
import Home from './paginas/home';

function App() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/front-banco" component={AuthRouter}></Route>
                <Route exact path="/home" component={Home}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;