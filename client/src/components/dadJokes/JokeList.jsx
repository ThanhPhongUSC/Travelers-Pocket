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
      // jokeList: JSON.parse(window.localStorage.getItem("jokes") || '[]')
      jokeList: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.getJokes = this.getJokes.bind(this);
  };
  componentDidMount() {
    // if(this.state.jokeList.length === 0) {
    //   this.getJokes();
    // }
this.getJokes();
  }
  getJokes() {
    axios.get('/jokeList')
    .then(response => {
      console.log('data from getjoke',response)
      this.setState({jokeList: response.data})
    })
  }
  // async getJokes() {
  //   try{
  //     let jokeList = [];
  //     while (jokeList.length < this.props.numberOfJokes) {
  //       let data = await axios.get('/dadJokes');
  //       console.log('data', data);
  //        jokeList.push(data.data.joke)
  //     }
  //     this.setState({
  //       jokeList: jokeList
  //     })
  //     window.localStorage.setItem("jokes", JSON.stringify(this.state.jokeList));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }


handleClick(e) {
  e.preventDefault();
  this.getJokes();

}
render() {
  return (
    <div className="jokeList">

      <h3>Enjoy your jokes of the day</h3>
      <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' />
      <button className="jokeBtn" onClick={this.handleClick}>Get more jokes</button>
      <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' />
      <ul>
      {this.state.jokeList.map(item => {
        return <Joke joke={item.joke}/>
      })}
      </ul>
    </div>
  )
}
}

JokeList.defaultProps = {numberOfJokes: 10};

export default JokeList;