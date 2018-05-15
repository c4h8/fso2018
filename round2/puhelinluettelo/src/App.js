import React from 'react';

const Person = ({name}) => (
  <p>{name}</p>
);

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas' }
      ],
      newName: ''
    }
  }

  addData = (e) => {
    e.preventDefault();
    if(!this.state.persons.map(p => p.name.toLowerCase()).includes(this.state.newName.toLowerCase())) {
      this.setState({
        persons: this.state.persons.concat({name: this.state.newName}),
        newName: ''
      });
    }
  }

  handleNameChange = (e) => {
    e.preventDefault();
    this.setState({newName: e.target.value});
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
              onChange={this.handleNameChange}
            />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        {this.state.persons.map((p, i) => <Person {...p} key={i}/> )}
      </div>
    )
  }
}

export default App;
