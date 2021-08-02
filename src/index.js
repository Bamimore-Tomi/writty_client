import React from "react"
import ReactDOM from "react-dom"
import App from "./App";
import "./css/main.css";
import { subscribeUser } from "./doSub";
import * as serviceWorker from './serviceWorker';
import 'bulma/css/bulma.css';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)
serviceWorker.register();
subscribeUser();
