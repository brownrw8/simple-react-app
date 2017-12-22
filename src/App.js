import React, { Component, PropTypes } from 'react';


class Button extends Component {

  handleClick = () => {
  	this.props.incrementOperation(this.props.incrementValue);
  };
  
	render() {
		return (
  		<button onClick={this.handleClick}>
      	{this.props.incrementValue}
      </button>
    );
  }
}

Button.propTypes = {
  incrementOperation: PropTypes.func.isRequired,
  incrementValue: PropTypes.number,
};

Button.defaultProps = {
  incrementValue: 1,
};

class Result extends Component {
	render() {
		return (
    	<div>
        <span>
          Value is {this.props.value}
        </span>
      </div>
    );
  }
}

Result.propTypes = {
  value: PropTypes.number.isRequired,
};

export default class App extends Component {
   state = { counter: 2 };

  incrementOperation = (incrementValue) => {
  	this.setState((prevState) => ({
      	counter: prevState.counter + incrementValue
    }));
  };
  
	render() {
		return (
    	<div>
        <Button incrementOperation={this.incrementOperation} />

        <Button incrementOperation={this.incrementOperation} incrementValue={+1} />
        <Button incrementOperation={this.incrementOperation} incrementValue={+10} />
        <Button incrementOperation={this.incrementOperation} incrementValue={+100} />
        <Button incrementOperation={this.incrementOperation} incrementValue={-1} />
        <Button incrementOperation={this.incrementOperation} incrementValue={-10} />
        <Button incrementOperation={this.incrementOperation} incrementValue={-100} />
        <Result value={this.state.counter} />
      </div>
    );
  }
}
