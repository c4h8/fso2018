import React from 'react'

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

export default Kurssi
