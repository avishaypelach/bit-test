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

  whichStar(){
    console.info(this.refs.one);
  }

  render() {
    return (
      <div>
        <i className="fa fa-star-o" ref="one" aria-hidden="true"/>
        <i className="fa fa-star-o" ref="two" aria-hidden="true" onClick={() => {this.whichStar()}}/>
        <i className="fa fa-star-o" ref="three" aria-hidden="true"/>
        <i className="fa fa-star-o" ref="four" aria-hidden="true"/>
        <i className="fa fa-star-o" ref="five" aria-hidden="true"/>
      </div>
    );
  }
}

