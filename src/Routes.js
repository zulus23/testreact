import React, {Component} from 'react';
import {BrowserRouter,Route ,Switch} from 'react-router-dom';

import App from './components/app/App'
import Movies from './components/movies/Movies'
import Movie from './components/movie/Movie'

class Routers extends Component {
    render() {
        return (
            <BrowserRouter>
            <Switch>
                  <Route  exact path="/" component={App}/>
                  <Route path="movies" component={Movies}>
                      <Route path=":id" component={Movie}/>
                  </Route>
            </Switch>
            </BrowserRouter>
        );
    }
}

export default Routers;