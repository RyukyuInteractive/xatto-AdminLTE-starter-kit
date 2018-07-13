import { x, atto } from 'xatto'

//import './style.styl'

import { Layout } from 'xatto-admin-lte'

import { RoutesComponent } from '../routes'
import { HeaderComponent } from '../header'
import { SidebarComponent } from '../sidebar'
import { ControlSidebarComponent } from '../control-sidebar'

import { RootView } from './view'

export function RootComponent(attrs, children) {
  attrs.deps = {
    RoutesComponent,
    HeaderComponent,
    SidebarComponent,
    ControlSidebarComponent,
    Layout
  }
  return RootView(attrs, children)
}
