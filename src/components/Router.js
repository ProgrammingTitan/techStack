import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainPage from './MainPage';
import CategoryPage from './CategoryPage';
import '../App.css';
import {Provider} from 'react-redux';
import { loadUser } from './../actions/authActions';
import store from './../store';
import EmployeePage from './admin/EmployeePage';

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
            path= '/Section/US'
            render={ (props) => 
                <div>
                <CategoryPage 
                subreddit = ''
                />
                </div>}
            exact ></Route>
            
            <Route 
            path= '/Section/Entertainment'
            render={ (props) => 
                <div>
                <p></p>
                <CategoryPage 
                subreddit = 'entertainment'
                />
                </div>
                }
            exact ></Route>
            <Route 
            path= '/Section/Health'
            render={ (props) => 
                <div>
                <p></p>
                <p></p>
                <CategoryPage 
                subreddit = 'health'
                />
                </div>
                }
            exact ></Route>
            <Route 
            path= '/Section/Business'
            render={ (props) => 
                <div>
                <p></p>
                <p></p>
                <p></p>
                <CategoryPage 
                subreddit = 'business'
                />
                </div>
                }
            exact ></Route>
            
            <Route 
            path= '/Section/Technology'
            render={ (props) => 
                <div>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <CategoryPage 
                subreddit = 'technology'
                />
                </div>
                }
            exact >
            </Route>
                        
            <Route 
            path= '/Section/Sports'
            render={ (props) => 
                <div>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <CategoryPage 
                subreddit = 'sports'
                />
                </div>
                }
            ></Route>
                        <Route 
            path= '/Section/Gaming'
            render={ (props) => 
                <div>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <CategoryPage 
                subreddit = 'gamernews'
                />
                </div>
                }
            exact ></Route>
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
            </Switch>

    
    </BrowserRouter>
    </Provider>
        );
    }
}

export default Router; 