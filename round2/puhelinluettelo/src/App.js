import React from 'react';
import service from './service.js'

const SetFilter = ({that}) => (
  <div>
    rajaa näytettäviä:
    <input
      value={that.state.filter}
      onChange={that.handleChange('filter')}
    />
  </div>
);


const AddPersonForm = ({that}) => (
  <form onSubmit={that.addData}>
    <h2>Lisää uusi</h2>
    <div>
      nimi:
      <input
        value={that.state.newName}
        onChange={that.handleChange('newName')}
      />
    </div>
    <div>
      numero:
      <input
        value={that.state.newNumber}
        onChange={that.handleChange('newNumber')}
      />
    </div>
    <div>
      <button type="submit">lisää</button>
    </div>
  </form>
);


const PersonContainer = ({persons, filter, that}) => {
  const personsFiltered = persons.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <h2>Numerot</h2>
      <table>
        <tbody>
          {personsFiltered.map((p, i) => <Person {...p} key={i} that={that} />)}
        </tbody>
      </table>
    </div>
  );
};


const Person = ({id, name, number, that}) => (
  <tr>
    <td>{name}</td>
    <td>{number}</td>
    <td>
      <button onClick={that.deletePerson(id)}>delete</button>
    </td>
  </tr>
);


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newName: '',
      newNumber: '',
      filter: ''
    }
  }

  componentDidMount() {
    service.getPersons()
    .then(res => {
      this.setState({persons: res.data});
    })
  }

  addData = (e) => {
    e.preventDefault();

    const newPerson = {
      name: this.state.newName,
      number: this.state.newNumber
    };

    const existingPerson = this.state.persons
      .find(p => p.name.toLowerCase() === this.state.newName.toLowerCase())

    if(!existingPerson) {
      service.postPerson(newPerson)
      .then(res => {
        this.setState({
          persons: this.state.persons.concat(res.data),
          newName: '',
          newNumber: ''
        });
      });
    } else {
      const confirm = window.confirm('Henkilö on jo luettelossa. Päivitetäänkö tiedot?');
      if(confirm) {
        service.modifyPerson(existingPerson.id, {...existingPerson, ...newPerson})
        .then(res => {
          this.setState({
            persons: this.state.persons.filter(p => p.id !== existingPerson.id).concat(res.data),
            newName: '',
            newNumber: ''
          });
        })
      }
    }
  }

  deletePerson = (id) => () => {
    service.deletePerson(id)
    .then(res => {
      this.setState({
        persons: this.state.persons.filter(p => p.id !== id)
      });
    })
  }

  handleChange = (target) => (e) => {
    e.preventDefault();
    this.setState({[target]: e.target.value});
  }

  render() {
    if(!this.state.persons) return (<div>no data</div>);

    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <SetFilter that={this} />
        <AddPersonForm that={this} />
        <PersonContainer {...this.state} that={this}/>
      </div>
    )
  }
}

export default App;
