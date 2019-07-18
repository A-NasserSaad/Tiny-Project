import React , { Suspense } from 'react';
import './App.css';
import { BrowserRouter, Route , Switch } from "react-router-dom";
const SearchPage = React.lazy(() => import('./components/search/index'))
const MoviePage = React.lazy(() => import('./components/movie/index'))
const ErrorPage = React.lazy(() => import('./components/error/index'))


// import {connect} from 'react-redux'


function App({ neededData }) {
  return (
    <BrowserRouter>
      <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path = "/error" component = {ErrorPage}/>        
          <Route path = "/movie" component = {MoviePage}/>
          <Route exact path = "/" component = {SearchPage}/>        
        </Switch>        
        </Suspense>

      </div>
    </BrowserRouter>
  );
}


export default App;

