import 'normalize.css/normalize.css';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import './styles/main.scss';

import ReactDOM from 'react-dom';
import React from 'react';

import './styles/main.scss';

class Rating extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      starRate: ''
    };
    this.handlerSubmit = this.handlerSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handlerSubmit(event) {
    event.preventDefault();
  }

  handleChange(event) {
    if (isNaN(event.target.value)) {
      event.preventDefault();
      alert('input can only be a number');

    } else if (event.target.value > 5) {
      event.preventDefault();
      alert('Rating can not be over 5 stars, please try again');

    } else {
      this.setState({starRate: event.target.value});
    }
  }

  howManyStars() {
    let str = [];

    for (let i = 0; i < this.state.starRate; i++) {
      str.push(<div className="star-five" key={i.toString()}/>)
    }
    return str;

  }

  render() {
    return <div><h1>Rating:</h1>
      <form onSubmit={this.handlerSubmit}>
        <label>
          My Rating:
          <input type="text" value={this.state.starRate} onChange={this.handleChange}/>
        </label>
      </form>
      <br/>
      <div>{this.howManyStars()}</div>
    </div>;
  }
}

ReactDOM.render(<Rating/>, document.querySelector('#root'));
