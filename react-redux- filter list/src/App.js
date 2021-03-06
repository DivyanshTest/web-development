import React from 'react';
import logo from './logo.svg';
// import './App.css'
import List from './component/List'
import Timer from './component/Timer'
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import Container from './component/Container'
import FilterList from './component/filterList'

function App() {
  console.log("List is working");
  return (

    <BrowserRouter>
    <div className="App">
      <Switch>
       <Route exact path='/' component={Container}/>
       <Route  path='/state/:state' component={FilterList}/>
     </Switch>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
