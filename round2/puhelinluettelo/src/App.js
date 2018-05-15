import React from 'react';

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


const PersonContainer = ({persons, filter}) => {
  const personsFiltered = persons.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <h2>Numerot</h2>
      <table>
        <tbody>
          {personsFiltered.map((p, i) => <Person {...p} key={i} />)}
        </tbody>
      </table>
    </div>
  );
};


const Person = ({name, number}) => (
  <tr>
    <td>{name}</td>
    <td>{number}</td>
  </tr>
);


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Martti Tienari', number: '040-123456' },
        { name: 'Arto Järvinen', number: '040-123456' },
        { name: 'Lea Kutvonen', number: '040-123456' }
      ],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }

  addData = (e) => {
    e.preventDefault();
    if(!this.state.persons.map(p => p.name.toLowerCase()).includes(this.state.newName.toLowerCase())) {
      this.setState({
        persons: this.state.persons.concat({
          name: this.state.newName,
          number: this.state.newNumber
        }),
        newName: '',
        newNumber: ''
      });
    }
  }

  handleChange = (target) => (e) => {
    e.preventDefault();
    this.setState({[target]: e.target.value});
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <SetFilter that={this} />
        <AddPersonForm that={this} />
        <PersonContainer {...this.state} />
      </div>
    )
  }
}

export default App;
