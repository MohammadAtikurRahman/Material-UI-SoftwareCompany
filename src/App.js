import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'

function App() {
  return (
    <Router>
      <Switch>

        //home route
        <Route exact path="/">
          <Notes /> 
        </Route>

        //create route 
        <Route path="/create">
          <Create /> 
        </Route>



      </Switch>
    </Router>
  );
}

export default App;
