import { x } from 'xatto'

import { RouteLink } from 'xatto-route'

import * as images from '../../assets/images/admin-lte'

export function HeaderView(attrs, children) {
  return (
    <div>
      <RouteLink href="/" class="logo">
        <span class="logo-mini">
          <b>A</b>LT
        </span>
        <span class="logo-lg">
          <b>Admin</b>LTE
        </span>
      </RouteLink>

      <nav class="navbar navbar-static-top">
        <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
          <span class="sr-only">Toggle navigation</span>
        </a>

        <div class="navbar-custom-menu">
          <ul class="nav navbar-nav">
            <li class="dropdown messages-menu">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <i class="fa fa-envelope-o" />
                <span class="label label-success">4</span>
              </a>

              <ul class="dropdown-menu">
                <li class="header">You have 4 messages</li>
                <li>
                  <ul class="menu">
                    <li>
                      <a href="#">
                        <div class="pull-left">
                          <img src={images.user2_160x160} class="img-circle" alt="User Image" />
                        </div>
                        <h4>
                          Support Team
                          <small>
                            <i class="fa fa-clock-o" /> 5 mins
                          </small>
                        </h4>
                        <p>Why not buy a new awesome theme?</p>
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <div class="pull-left">
                          <img src={images.user3_128x128} class="img-circle" alt="User Image" />
                        </div>
                        <h4>
                          AdminLTE Design Team
                          <small>
                            <i class="fa fa-clock-o" /> 2 hours
                          </small>
                        </h4>
                        <p>Why not buy a new awesome theme?</p>
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <div class="pull-left">
                          <img src={images.user4_128x128} class="img-circle" alt="User Image" />
                        </div>
                        <h4>
                          Developers
                          <small>
                            <i class="fa fa-clock-o" /> Today
                          </small>
                        </h4>
                        <p>Why not buy a new awesome theme?</p>
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <div class="pull-left">
                          <img src={images.user3_128x128} class="img-circle" alt="User Image" />
                        </div>
                        <h4>
                          Sales Department
                          <small>
                            <i class="fa fa-clock-o" /> Yesterday
                          </small>
                        </h4>
                        <p>Why not buy a new awesome theme?</p>
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <div class="pull-left">
                          <img src={images.user4_128x128} class="img-circle" alt="User Image" />
                        </div>
                        <h4>
                          Reviewers
                          <small>
                            <i class="fa fa-clock-o" /> 2 days
                          </small>
                        </h4>
                        <p>Why not buy a new awesome theme?</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="footer">
                  <a href="#">See All Messages</a>
                </li>
              </ul>
            </li>

            <li class="dropdown notifications-menu">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <i class="fa fa-bell-o" />
                <span class="label label-warning">10</span>
              </a>
              <ul class="dropdown-menu">
                <li class="header">You have 10 notifications</li>
                <li>
                  <ul class="menu">
                    <li>
                      <a href="#">
                        <i class="fa fa-users text-aqua" /> 5 new members joined today
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-warning text-yellow" /> Very long description here that may
                        not fit into the page and may cause design problems
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-users text-red" /> 5 new members joined
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-shopping-cart text-green" /> 25 sales made
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-user text-red" /> You changed your username
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="footer">
                  <a href="#">View all</a>
                </li>
              </ul>
            </li>

            <li class="dropdown tasks-menu">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <i class="fa fa-flag-o" />
                <span class="label label-danger">9</span>
              </a>
              <ul class="dropdown-menu">
                <li class="header">You have 9 tasks</li>
                <li>
                  <ul class="menu">
                    <li>
                      <a href="#">
                        <h3>
                          Design some buttons
                          <small class="pull-right">20%</small>
                        </h3>
                        <div class="progress xs">
                          <div
                            class="progress-bar progress-bar-aqua"
                            style="width: 20%"
                            role="progressbar"
                            aria-valuenow="20"
                            aria-valuemin="0"
                            aria-valuemax="100">
                            <span class="sr-only">20% Complete</span>
                          </div>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <h3>
                          Create a nice theme
                          <small class="pull-right">40%</small>
                        </h3>
                        <div class="progress xs">
                          <div
                            class="progress-bar progress-bar-green"
                            style="width: 40%"
                            role="progressbar"
                            aria-valuenow="20"
                            aria-valuemin="0"
                            aria-valuemax="100">
                            <span class="sr-only">40% Complete</span>
                          </div>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <h3>
                          Some task I need to do
                          <small class="pull-right">60%</small>
                        </h3>
                        <div class="progress xs">
                          <div
                            class="progress-bar progress-bar-red"
                            style="width: 60%"
                            role="progressbar"
                            aria-valuenow="20"
                            aria-valuemin="0"
                            aria-valuemax="100">
                            <span class="sr-only">60% Complete</span>
                          </div>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <h3>
                          Make beautiful transitions
                          <small class="pull-right">80%</small>
                        </h3>
                        <div class="progress xs">
                          <div
                            class="progress-bar progress-bar-yellow"
                            style="width: 80%"
                            role="progressbar"
                            aria-valuenow="20"
                            aria-valuemin="0"
                            aria-valuemax="100">
                            <span class="sr-only">80% Complete</span>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="footer">
                  <a href="#">View all tasks</a>
                </li>
              </ul>
            </li>

            <li class="dropdown user user-menu">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <img src={images.user2_160x160} class="user-image" alt="User Image" />
                <span class="hidden-xs">Alexander Pierce</span>
              </a>
              <ul class="dropdown-menu">
                <li class="user-header">
                  <img src={images.user2_160x160} class="img-circle" alt="User Image" />

                  <p>
                    Alexander Pierce - Web Developer
                    <small>Member since Nov. 2012</small>
                  </p>
                </li>

                <li class="user-body">
                  <div class="row">
                    <div class="col-xs-4 text-center">
                      <a href="#">Followers</a>
                    </div>
                    <div class="col-xs-4 text-center">
                      <a href="#">Sales</a>
                    </div>
                    <div class="col-xs-4 text-center">
                      <a href="#">Friends</a>
                    </div>
                  </div>
                </li>

                <li class="user-footer">
                  <div class="pull-left">
                    <a href="#" class="btn btn-default btn-flat">
                      Profile
                    </a>
                  </div>
                  <div class="pull-right">
                    <a href="#" class="btn btn-default btn-flat">
                      Sign out
                    </a>
                  </div>
                </li>
              </ul>
            </li>

            <li>
              <a href="#" data-toggle="control-sidebar">
                <i class="fa fa-gears" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
