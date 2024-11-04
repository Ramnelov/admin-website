import { Router } from '@solidjs/router'
import { render } from 'solid-js/web'
import App from '~/App'

import '~/index.css'
import { Routes } from '~/routes'

const root = document.getElementById('root')

render(
  () => (
    <Router root={App}>
      <Routes />
    </Router>
  ),
  root!
)
