export function handlerSubmit(event) {
  event.preventDefault();
}

export function handleChange(event) {
  if (isNaN(event.target.value)) {
    alert('Input can only be a number between 1-5');

  } else if (event.target.value > 5) {
    alert('Rating can not be over 5 stars, please try again');

  } else {
    this.setState({starRate: event.target.value});
  }
}

