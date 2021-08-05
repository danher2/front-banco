import { BrowserRouter, Route, Switch } from "react-router-dom";
import { LoginScreen } from './components/LoginScreen';

function App() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LoginScreen}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;