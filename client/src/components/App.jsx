import React from 'react';
import axios from 'axios';
import {Route, Switch, NavLink} from 'react-router-dom';
import JokeList from './dadJokes/JokeList.jsx';
import Translate from './translate/Translate.jsx';
import WhereToGo from './whereToGo/WhereToGo.jsx';
import WhatToDo from './whatToDo/WhatToDo.jsx';
import Weather from './weather/Weather.jsx';
import Welcome from './Welcome.jsx'
// import Route from './Route.jsx'
import Header from './Header.jsx'

const App = () => {

  return(
    <div className='App'>
      <nav className='App-nav'>
        <NavLink exact activeClassName='active-link' to='/'>Welcome</NavLink>
        <NavLink exact activeClassName='active-link' to='/jokes'>DadJokes</NavLink>
        <NavLink exact activeClassName='active-link' to='/translation'>Translate</NavLink>
        <NavLink exact activeClassName='active-link' to='/whereToGo'>Where to Go</NavLink>
        <NavLink exact activeClassName='active-link' to='/whatToDo'>What to Do</NavLink>
        <NavLink exact activeClassName='active-link' to='/weather'>Local Weather</NavLink>
      </nav>
      <Switch>
      <Route exact path='/' component={Welcome}/>
      <Route exact path='/jokes' component={JokeList}/>
      <Route exact path='/translation' component={Translate}/>
      <Route exact path='/whereToGo' component={WhereToGo}/>
      <Route exact path='/whatToDo' component={WhatToDo}/>
      <Route exact path='/weather' component={Weather}/>
      </Switch>
      {/* <Header/>
      <Route path="/">
        <JokeList/>
      </Route>
      <Route path="/translate"> */}
        {/* <Translate/> */}
      {/* </Route> */}
{/* <JokeList/> */}

    </div>
  );
  };


export default App;