import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14

  const Otsikko = (props) => (
    <h1>{props.kurssi}</h1>
  );

  const Sisalto = (props) => {
    const {osa2, tehtavia2, osa3, tehtavia3} = props;
    return (
        <div>
            <p>{osa1} {tehtavia1}</p>
            <p>{osa2} {tehtavia2}</p>
            <p>{osa3} {tehtavia3}</p>
        </div>
    );
  };

  const Yhteensa = ({tehtavia1, tehtavia2, tehtavia3}) => (
    <p>yhteensä {tehtavia1 + tehtavia2 + tehtavia3} tehtävää</p>
  );

  return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto osa2={osa2} osa3={osa3} tehtavia2={tehtavia2} tehtavia3={tehtavia3}/>
      <Yhteensa {...{tehtavia1, tehtavia2, tehtavia3}} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
