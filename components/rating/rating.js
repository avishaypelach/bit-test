import 'font-awesome/css/font-awesome.css'
import React from 'react';
import ReactDOM from 'react-dom';

export default class Rating extends React.Component {

  constructor() {
    super();

    this.state = {
      rating: 1
    };
  };

  whichStar() {
    switch (this.refs) {
      case 'one':
        return this.setState({rating: 1});
      case 'two':
        return this.setState({rating: 2});
      case 'three':
        return this.setState({rating: 3});
      case 'four':
        return this.setState({rating: 4});
      case 'five':
        return this.setState({rating: 5});
    }
  }

  render() {
    console.info(this.refs);
    return (
      <div>
        <i className="fa fa-star-o" ref="one" aria-hidden="true" onClick={() => {
          this.whichStar()
        }}/>
        <i className="fa fa-star-o" ref="two" aria-hidden="true" onClick={() => {
          this.whichStar()
        }}/>
        <i className="fa fa-star-o" ref="three" aria-hidden="true" onClick={() => {
          this.whichStar()
        }}/>
        <i className="fa fa-star-o" ref="four" aria-hidden="true" onClick={() => {
          this.whichStar()
        }}/>
        <i className="fa fa-star-o" ref="five" aria-hidden="true" onClick={() => {
          this.whichStar()
        }}/>
      </div>
    );
  }
}

ReactDOM.render(
  <Rating />,
  document.getElementById('app')
);