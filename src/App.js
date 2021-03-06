import TextEditor from "./TextEditor"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import login from "./pages/login"
import UserContextProvider from "./contexts/userContext"
import dash from "./pages/dash"
import Register from "./pages/register"

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={login} />
          <Route path="/register" exact component={Register} />
          <Route path="/document/:id" component={TextEditor} />
          <Route path="/dash" component={dash} />
        </Switch>
      </Router>
    </UserContextProvider>

  )
}

export default App
