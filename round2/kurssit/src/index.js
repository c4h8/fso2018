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

const Yhteensa = ({osat}) => {
  const yht = (osat.length === 0) ? 0 : osat.map(o => o.tehtavia).reduce((a,b) => a + b)

  return (
    <p>yhteensä {yht} tehtävää</p>
  );
};

const Kurssi = ({kurssi}) => (
  <div>
    <Otsikko kurssi={kurssi.nimi} />
    <Sisalto osat={kurssi.osat} />
    <Yhteensa osat={kurssi.osat} />
  </div>
);

const App = () => {
  const kurssit = [
    {
      nimi: 'Half Stack -sovelluskehitys',
      id: 1,
      osat: [
        {
          nimi: 'Reactin perusteet',
          tehtavia: 10,
          id: 1
        },
        {
          nimi: 'Tiedonvälitys propseilla',
          tehtavia: 7,
          id: 2
        },
        {
          nimi: 'Komponenttien tila',
          tehtavia: 14,
          id: 3
        }
      ]
    },
    {
      nimi: 'Node.js',
      id: 2,
      osat: [
        {
          nimi: 'Routing',
          tehtavia: 3,
          id: 1
        },
        {
          nimi: 'Middlewaret',
          tehtavia: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      { kurssit.map((kurssi, i) => <Kurssi key={i} kurssi={kurssi}/>) }
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
