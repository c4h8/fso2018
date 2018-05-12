import React, { Component } from 'react';

const Button = ({text, action}) => (
  <button onClick={() => action()}>
    {text}
  </button>
);

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0
    }
  }

  annaHyva = () => {
    this.setState((prevState) => ({
      hyva: prevState.hyva + 1
    }));
  }

  annaNeutraali= () => {
    this.setState((prevState) => ({
      neutraali: prevState.neutraali + 1
    }));
  }

  annaHuono = () => {
    this.setState((prevState) => ({
      huono: prevState.huono + 1
    }));
  }

  render() {
    return (
      <div className="App">
        <h2>anna palautetta</h2>
        <Button text={'hyva'} action={this.annaHyva} />
        <Button text={'neutraali'} action={this.annaNeutraali} />
        <Button text={'huono'} action={this.annaHuono} />
        <h2>statistiikka</h2>
        <p>hyva: {this.state.hyva}</p>
        <p>neutraali: {this.state.neutraali}</p>
        <p>huono: {this.state.huono}</p>
      </div>
    );
  }
}

export default App;
