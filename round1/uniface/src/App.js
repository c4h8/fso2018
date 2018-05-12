import React, { Component } from 'react';

const Button = ({text, action}) => (
  <button onClick={() => action()}>
    {text}
  </button>
);

const Statistic = ({identifier, value}) => (
  <p>{identifier} {value}</p>
)

const Statistics = (props) => {
  const {hyva, neutraali, huono} = props
  const avg = ((hyva - huono) / (hyva + neutraali + huono)).toFixed(1)
  const positivePerc = `${((100 * hyva) / (hyva + neutraali + huono)).toFixed(1)} %`

  return (
  <div>
    <h2>statistiikka</h2>
    <Statistic identifier="hyva" value={hyva} />
    <Statistic identifier="neutraali" value={neutraali} />
    <Statistic identifier="huono" value={huono} />
    <Statistic identifier="keskiarvo" value={avg} />
    <Statistic identifier="positiivisia" value={positivePerc} />
  </div>);
};

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
    // const stats = Object.keys(this.state).map(key)
    // console.log('entires: ', stats);

    return (
      <div className="App">
        <h2>anna palautetta</h2>
        <Button text={'hyva'} action={this.annaHyva} />
        <Button text={'neutraali'} action={this.annaNeutraali} />
        <Button text={'huono'} action={this.annaHuono} />
        <Statistics {...this.state} />
      </div>
    );
  }
}

export default App;
