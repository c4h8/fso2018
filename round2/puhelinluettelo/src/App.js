import React from 'react';


const PersonContainer = ({persons}) => (
  <table>
    <tbody>
      {persons.map((p, i) => <Person {...p} key={i} />)}
    </tbody>
  </table>
);

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
        <form onSubmit={this.addData}>
          <div>
            nimi:
            <input
              value={this.state.newName}
              onChange={this.handleChange('newName')}
            />
          </div>
          <div>
            numero:
            <input
              value={this.state.newNumber}
              onChange={this.handleChange('newNumber')}
            />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <PersonContainer persons={this.state.persons} />
      </div>
    )
  }
}

export default App;
