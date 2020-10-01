import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import * as serviceWorker from './serviceWorker';
import axios from "axios";

const App = () => {

}

let apiUrl;

if (process.env.NODE_ENV === "production" {
  apiUrl = 'https://api.github.com/user/repos';
}
else
{
  apiUrl = "http://localhost:3000/api/v3";
}
axios.defaults.baseURL = apiUrl;

ReactDOM.render(<App />, document.getElementById( "root")
);