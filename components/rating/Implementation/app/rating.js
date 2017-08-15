import 'normalize.css/normalize.css';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import './styles/main.scss';
import './styles/main.scss';

import ReactDOM from 'react-dom';
import React from 'react';
import { handlerSubmit } from './rating.utils'
import { handleChange} from './rating.utils'
import { howManyStars} from './rating.utils'

class Rating extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      starRate: ''
    };
    this.handlerSubmit = this.handlerSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return <div><h1>Rating:</h1>
      <form onSubmit={handlerSubmit}>
        <label>
          My Rating:
          <input type="text" value={this.state.starRate} onChange={handleChange}/>
        </label>
      </form>
      <br/>
      <div>{howManyStars()}</div>
    </div>;
  }
}

ReactDOM.render(<Rating/>, document.querySelector('#root'));
