import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

const find = (id) => users.find(p => p.id == id)

const users = [
  { id: 0, name: 'Nitin', friends: [ 1, 2, 3 ] },
  { id: 1, name: 'Sachin', friends: [ 0, 3 ] },
  { id: 2, name: 'Pravin', friends: [ 0, 1, 3 ], },
  { id: 3, name: 'Uma', friends: [ 1, 2 ] }
]

const Person = ({ match }) => {
  const person = find(match.params.id)

  return (
    <div className="App">
      <h3>{person.name}’s Friends</h3>
      <ul>
        {person.friends.map((id) => (
          <li key={id}>
            <Link to={`${match.url}/${id}`}>
              {find(id).name}
            </Link>
          </li>
        ))}
      </ul>
      <Route path={`${match.url}/:id`} component={Person}/>
    </div>
  )
}

class App extends React.Component {
  render() {
    return (
      <Router >
        <Person match={{ params: { id: 0 }, url: '' }}/>
      </Router>
    )
  }
}

export default App