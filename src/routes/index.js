import { BrowserRouter, Switch } from 'react-router-dom'
import Route from "./Route";
import login from '../pages/login'

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={login} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes