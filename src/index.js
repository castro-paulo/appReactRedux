import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PackageList, PackageDetails } from './views'
import moment from 'moment'
import 'moment/locale/fr-fr'

moment.locale(navigator.language)

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/:packageId' component={PackageDetails} />
          <Route path='/' component={PackageList} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))
