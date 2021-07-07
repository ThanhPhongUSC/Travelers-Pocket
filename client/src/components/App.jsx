import React from 'react';
import axios from 'axios';
import JokeList from './dadJokes/JokeList.jsx';
import Translate from './translate/Translate.jsx'
import Route from './Route.jsx'
import Header from './Header.jsx'

const App = () => {

  return(
    <div>
      {/* <Header/>
      <Route path="/">
        <JokeList/>
      </Route>
      <Route path="/translate"> */}
        <Translate/>
      {/* </Route> */}
{/* <JokeList/> */}

    </div>
  );
  };


export default App;