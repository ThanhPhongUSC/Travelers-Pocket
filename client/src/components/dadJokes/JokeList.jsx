import React from 'react';
import axios from 'axios';
import regeneratorRuntime from "regenerator-runtime";
import Joke from './Joke.jsx';

class JokeList extends React.Component {
  // static defaultProps = {
  //   numberOfJokes: 10
  // };
  constructor (props) {
    super(props);
    this.state = {
      jokeList: []
    };
  };
  componentDidMount() {
    if(this.state.jokeList.length === 0) {
      this.getJokes();
    }

  }

  async getJokes() {
    try{
      let jokeList = [];
      while (jokeList.length < this.props.numberOfJokes) {
        let data = await axios.get('/dadJokes');
        console.log('data', data);
         jokeList.push(data.data.joke)
      }
      this.setState({
        jokeList: jokeList
      })
    } catch (error) {
      console.log(error);
    }
  }

   // async getJokes() {
  //   try{
  //     let jokeList = [];
  //     while (jokeList.length < this.props.numberOfJokes) {
  //       let response = await axios.get('https://icanhazdadjoke.com/', {headers: {Accept: 'application/json'}});
  //        jokeList.push(response.data.joke)
  //        console.log(jokeList);
  //     }
  //     this.setState({
  //       jokeList: jokeList
  //     })
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

render() {
  return (
    <div className="jokeList">

      <h5>Enjoy your jokes of the day</h5>
      {/* <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' /> */}
      <button>Get more joke</button>
      <ul>
      {this.state.jokeList.map(joke => {
        return <Joke joke={joke}/>
      })}
      </ul>
      {/* <Joke jokeList={this.state.jokeList}/> */}
    </div>
  )
}
}

JokeList.defaultProps = {numberOfJokes: 10};

export default JokeList;