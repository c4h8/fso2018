import React, { Component } from 'react';
import axios from 'axios';

const CountryDetails = ({country}) => (
  <div>
    <h2>{country.name} {country.nativeName}</h2>
    <p>capital: {country.capital}</p>
    <p>population: {country.population}</p>
    <img 
      src={country.flag}
      style={{height: '200px'}}
      alt={`flag of ${country.name}`}
    />
  </div>
)

const CountryListing = ({country}) => (
  <div>
    {country.name}
  </div>
)

const CountryList = ({countries, filter}) => {
  const regex = RegExp(`^${filter}`, 'i');
  const countiresFiltered = countries.filter(c => regex.test(c.name));

  if(countiresFiltered.length > 10)
    return(<div>too many matches, specify another filter</div>);

  if(countiresFiltered.length === 1)
    return(<CountryDetails country={countiresFiltered[0]}/>);

  return (
    <div>
      {countiresFiltered.map((c, i) => <CountryListing country={c} key={i} />)}
    </div>);
}

const CountryFilter = ({that}) => (
  <div>
    find countries:
    <input
      value={that.state.filter}
      onChange={that.handleChange('filter')}
    />
  </div>
)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: ''
    }
  }

  componentDidMount() {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(res => this.setState({countries: res.data}));
  }

  handleChange = (target) => (e) => {
    e.preventDefault();
    this.setState({[target]: e.target.value});
  }

  render() {
    if(!this.state.countries)
      return(<div>no data</div>)

    return (
      <div>
        <CountryFilter that={this} />
        <CountryList countries={this.state.countries} filter={this.state.filter} />
      </div>)
  }
}

export default App;
