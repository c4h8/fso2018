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

  if(hyva + neutraali + huono === 0) return (
    <p>ei yhtäkään palautetta annettu</p>
  );

  return (
    <div>
      <h2>statistiikka</h2>
      <Statistic identifier="hyva" value={hyva} />
      <Statistic identifier="neutraali" value={neutraali} />
      <Statistic identifier="huono" value={huono} />
      <Statistic identifier="keskiarvo" value={avg} />
      <Statistic identifier="positiivisia" value={positivePerc} />
    </div>
  );
};

class App extends Component {
  constructor() {
    super()
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0
    }
  }

  giveVote = (identifier) => () => {
    this.setState((prevState) => ({
      [identifier]: prevState[identifier] + 1
    }));
  }

  render() {
    return (
      <div className="App">
        <h2>anna palautetta</h2>
        <Button text={'hyva'} action={this.giveVote('hyva')} />
        <Button text={'neutraali'} action={this.giveVote('neutraali')} />
        <Button text={'huono'} action={this.giveVote('huono')} />
        <Statistics {...this.state} />
      </div>
    );
  }
}

export default App;
