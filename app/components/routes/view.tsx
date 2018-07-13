import { x } from 'xatto'

import { Route } from 'xatto-route'
import { Some } from 'xatto-some'

import { HomePage } from '../../pages/home'

export function RoutesView(attrs, children) {
  return (
    <Some>
      <Route pattern="^/$">
        <HomePage />
      </Route>

      <div>
        <b>Not Found!!</b>
      </div>
    </Some>
  )
}
