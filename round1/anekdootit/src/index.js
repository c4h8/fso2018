import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      votes: this.props.anecdotes.map(a => 0)
    }
  }

  switchAnecdote = () => {
    this.setState({
      selected: Math.floor((Math.random() * 0.9999999 * (this.props.anecdotes.length)))
    });
  }

  vote = (index) => () => {
    const newVotes = [...this.state.votes]
    newVotes[this.state.selected] = newVotes[this.state.selected] + 1

    this.setState({
      votes: newVotes
    });
  }

  render() {
    let highestIndex = 0
    this.state.votes.forEach((e, i) => { if(e > this.state.votes[highestIndex]) highestIndex = i })

    return (
      <div>
        <p>{this.props.anecdotes[this.state.selected]}</p>
        <p>has {this.state.votes[this.state.selected]} votes</p>
        <button onClick={this.vote(this.state.selected)}>vote</button>
        <button onClick={this.switchAnecdote}>next anecdote</button>
        <h2>anecdote with most votes</h2>
        <p>{this.props.anecdotes[highestIndex]}</p>
        <p>has {this.state.votes[highestIndex]} votes</p>
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes}/>, document.getElementById('root'));
registerServiceWorker();
