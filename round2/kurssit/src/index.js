import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => (
  <h1>{props.kurssi}</h1>
);

const Osa = (props) => (
  <p>{props.o} {props.t}</p>
);

const Sisalto = (props) => (
  <div>
    { props.osat.map((o, i) => <Osa key={i} o={o.nimi} t={o.tehtavia} />) }
  </div>
);

const Yhteensa = (props) => {
  const yht = props.osat.map(o => o.tehtavia).reduce((a,b) => a + b)

  return (
    <p>yhteensä {yht} tehtävää</p>
  );
};

const Kurssi = ({kurssi}) => (
  <div>
    <Otsikko kurssi={kurssi.nimi} />
    <Sisalto osat={kurssi.osat} />
    {/* <Yhteensa osat={kurssi.osat} /> */}
  </div>
);

const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14
      }
    ]
  }

  return (
    <div>
      <Kurssi kurssi={kurssi} />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
