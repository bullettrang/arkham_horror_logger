import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from '../App'
import ScenarioMenu from './Scenarios/ScenarioMenu';
import {Form} from './Forms/Form';
const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" exact component={App} />
      <Route path="/scenarios"  component={ScenarioMenu} />
      <Route path="/choices"  component={Form} />
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root