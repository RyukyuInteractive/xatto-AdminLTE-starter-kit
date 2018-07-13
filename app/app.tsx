import { x, atto } from 'xatto'

import { setPopstateHandle } from 'xatto-route'

import { RootComponent } from './components/root'

const view = () => {
  return (
    <div xa={{ extra: { location } }}>
      <RootComponent />
    </div>
  )
}

const mutate = atto(view, document.getElementById('app'))

const removePopstateHandle = setPopstateHandle(mutate)

mutate({})
