import React from 'react';
import axios from 'axios';
import {Route, Switch, NavLink} from 'react-router-dom';
import JokeList from './dadJokes/JokeList.jsx';
import Translate from './translate/Translate.jsx';
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
      </nav>
      <Switch>
      <Route exact path='/' component={Welcome}/>
      <Route exact path='/jokes' component={JokeList}/>
      <Route exact path='/translation' component={Translate}/>
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