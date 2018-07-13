import { x } from 'xatto'

import { Layout } from 'xatto-admin-lte'

export function RootView(attrs, children) {
  const {
    ControlSidebarComponent,
    HeaderComponent,
    Layout,
    RoutesComponent,
    SidebarComponent,
  } = attrs.deps

  return (
    <Layout>
      <header class="main-header">
        <HeaderComponent />
      </header>

      <aside class="main-sidebar">
        <SidebarComponent />
      </aside>

      <div class="content-wrapper">
        <RoutesComponent />
      </div>

      <footer class="main-footer">
        <div class="pull-right hidden-xs">
          <b>Version</b> 0.0.0
        </div>
        <strong>
          Copyright &copy; 2010-2018{' '}
          <a href="https://www.ryukyu-i.co.jp">Ryukyu Interactive</a>.
        </strong>
        All rights reserved.
      </footer>

      <ControlSidebarComponent />
    </Layout>
  )
}
