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

  const Osa = (props) => (
    <p>{props.o} {props.t}</p>
  );

  const Sisalto = (props) => {
    return (
        <div>
            <Osa o={props.o1} t={props.t1} />
            <Osa o={props.o2} t={props.t2} />
            <Osa o={props.o3} t={props.t3} />
        </div>
    );
  };

  const Yhteensa = ({t1, t2, t3}) => (
    <p>yhteensä {t1 + t2 + t3} tehtävää</p>
  );

  return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto
        o1={osa1}
        o2={osa2}
        o3={osa3}
        t1={tehtavia1}
        t2={tehtavia2}
        t3={tehtavia3}
      />
      <Yhteensa {...{tehtavia1, tehtavia2, tehtavia3}} />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
