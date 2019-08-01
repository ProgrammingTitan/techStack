import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainPage from './MainPage';
import CategoryPage from './CategoryPage';
import '../App.css';
import {Provider} from 'react-redux';
import { loadUser } from './../actions/authActions';
import store from './../store';
import EmployeePage from './admin/EmployeePage';
import SearchResults from './SearchResults';
import ChanceToAd from './admin/ChanceToAd';

class Router extends React.Component{

    componentDidMount(){
        store.dispatch(loadUser());
    }

    render(){
        return(
    <Provider store = {store}>
    <BrowserRouter>
            <Switch>
            <Route path="/" component ={MainPage} exact></Route>
            <Route 
            path= '/Section/:id'
            render={ (match) => 
                <CategoryPage 
                match = {match}
                />
                }
            ></Route>
            <Route 
            path= '/Section/Feedback'
            render={ (props) => <CategoryPage 
                subreddit = {undefined}
                />}
            exact ></Route>
            <Route
            path='/EmployeePage'
            render = { () => <EmployeePage />}
            ></Route>
             <Route
            path='/Sponsors'
            render = { () => <ChanceToAd />}
            ></Route>
            <Route 
            path= '/Search/:id'
            render={ (match) => <SearchResults 
                match = {match}
            />}
            ></Route>
            </Switch>

    
    </BrowserRouter>
    </Provider>
        );
    }
}

export default Router; 