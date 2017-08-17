/**
 * React rating component accepts an integer as an input between 1-5
 * and draws stars according to the input number.
 */
import './styles/main.scss';

import ReactDOM from 'react-dom';
import React from 'react';

import {handlerSubmit} from './rating.utils'
import {handleChange} from './rating.utils'

class Rating extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      starRate: ''
    };
    this.handlerSubmit = this.handlerSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  howManyStars() {
    let str = [];

    for (let i = 0; i < this.state.starRate; i++) {
      str.push(<div className="star-five" key={i.toString()}/>)
    }
    return str;
  }

  render() {
    return <div><h1>Enter a number between 1-5</h1>
      <form onSubmit={handlerSubmit}>
        <label>
          My Rating:
          <input type="text" value={this.state.starRate} onChange={handleChange}/>
        </label>
      </form>
      <br/>
      <div>{this.howManyStars()}</div>
    </div>;
  }
}

ReactDOM.render(<Rating/>, document.querySelector('#root'));
