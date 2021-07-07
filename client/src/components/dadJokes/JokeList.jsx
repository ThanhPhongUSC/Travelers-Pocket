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
         console.log(data.data.joke);
         console.log(jokeList);
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
    <div>
      <h5> My Favorite Quotes</h5>
      <p>“Wake at dawn with winged heart. And give thanks for another day of loving!”.
       Kahlil Gibran</p>
      <h5>Enjoy your jokes of the day</h5>
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