import React, { Fragment, useState } from 'react';
import './styles/bootstrap.scss'
import "./styles/app.scss";
import SideNav from './components/sideNav';
import { Route, Switch } from 'react-router-dom';
import LeftAligned from './components/leftAligned';
import { Dropdown, DropdownToggle, DropdownMenu, CardHeader } from 'reactstrap';
import PageTransition from './components/pageTransition';

function App() {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Fragment>
      <div className="app-container fixed-drawer" >
        {/* <Fragment>
          < SideNav />
        </Fragment>
        <Fragment>
          <div className="app-main-container">
            <div className="app-header">
              <div className="app-main-header" >
                <div className="d-flex app-toolbar align-items-center">

                  <ul className="header-notifications list-inline ml-auto">
                    <li className="list-inline-item app-tour">
                      <Dropdown className="quick-menu" isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle
                          data-toggle="dropdown"
                          className="d-inline-block" tag="span">
                          <div className="d-flex align-items-center pointer">
                            <i className="zmdi zmdi-notifications-active zmdi-hc-lg icon-alert" />
                          </div>
                        </DropdownToggle>
                        <DropdownMenu right>
                          <CardHeader
                            styleName="align-items-center"
                            heading="ttitle"
                          />
                          <div className="messages-list scrollbar" style={{ height: 280 }}>

                            <ul className="list-unstyled">

                              <li className="media">
                                <img
                                  alt="img"
                                  src=""
                                  className="avatar-sm rounded-circle mr-2 rounded-circle"
                                />
                                <div className="media-body align-self-center">
                                  <p className="sub-heading mb-0">sabdsjcod</p>
                                  <i class="zmdi zmdi-thumb-up text-blue zmdi-hc-fw"></i>
                                  <span class="meta-date"><small>4:10 PM</small></span>
                                </div>
                              </li>

                            </ul>
                          </div>
                        </DropdownMenu>
                      </Dropdown>
                    </li>
                    <li className="list-inline-item mail-tour">
                      <Dropdown
                        className="quick-menu"
                        isOpen={dropdownOpen} toggle={toggle}
                      >
                        <DropdownToggle
                          className="d-inline-block"
                          tag="span"
                          data-toggle="dropdown"
                        >
                          <span className="icon-btn size-20 font-size-16">
                            <i className="zmdi zmdi-comment-alt-text icon-alert zmdi-hc-lg" />
                          </span>
                        </DropdownToggle>
                        <DropdownMenu right>
                          <CardHeader
                            styleName="align-items-center"
                            heading="title"
                          />
                          <div className="messages-list scrollbar" style={{ height: 280 }}>
                            <ul className="list-unstyled">
                              <li className="media">
                                <div className="user-thumb mr-3">
                                  <img className="rounded-circle avatar-sm"
                                    alt=""
                                    src=""
                                  />
                                  <span className="badge badge-danger rounded-circle">badge</span>
                                </div>
                                <div className="media-body">
                                  <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="text-capitalize user-name mb-0"><a href="javascript:void(0)">Name</a></h5>
                                    <span className="meta-date"><small>23.00</small></span>
                                  </div>
                                  <p className="sub-heading">message</p>
                                  <span className="jr-btn jr-btn-xs text-muted"><i
                                    className="zmdi zmdi-mail-reply" /><span>Reply</span></span>
                                  <span className="jr-btn jr-btn-xs text-muted"><i className="zmdi zmdi-eye" /><span>Read</span></span>
                                </div>
                              </li>
                            </ul>
                          </div>

                        </DropdownMenu>
                      </Dropdown>
                    </li>
                    <li className="list-inline-item user-nav">
                      <Dropdown
                        className="quick-menu"
                        isOpen={dropdownOpen} toggle={toggle}
                      >
                        <DropdownToggle
                          className="d-inline-block"
                          tag="span"
                          data-toggle="dropdown"
                        >
                          <img
                            alt="..."
                            src="http://via.placeholder.com/150x150"
                            className="pointer user-avatar size-30"
                          />
                        </DropdownToggle>

                        <DropdownMenu right>
                          <div>
                            <div className="user-profile">
                              <img
                                className="user-avatar border-0 size-40"
                                src="http://via.placeholder.com/150x150"
                                // src={user.picture}
                                alt="User"
                              />
                              <div className="user-detail ml-2">
                                <h4 className="user-name mb-0">User Name</h4>
                                <small>email</small>
                              </div>
                            </div>
                            <a className="dropdown-item text-muted" href="javascript:void(0)">
                              <i className="zmdi zmdi-face zmdi-hc-fw mr-1" />
                              <IntlMessages id="popup.profile" />
                            </a>
      <a className="dropdown-item text-muted" href="javascript:void(0)">
        <i className="zmdi zmdi-settings zmdi-hc-fw mr-1" />
         <IntlMessages id="popup.setting" />
      </a>
      <a
        className="dropdown-item text-muted"
        href="javascript:void(0)"
      >
        <i className="zmdi zmdi-sign-in zmdi-hc-fw mr-1" />
         <IntlMessages id="popup.logout" />
      </a>
                          </div>
                        </DropdownMenu >
                      </Dropdown >
                    </li >
                  </ul >
                </div >
              </div >
            </div >  */}
        < main className="app-main-content-wrapper" >
          <div className="app-main-content app-wrapper">
            <Switch>
              <PageTransition path={'/'}
                component={LeftAligned} />
            </Switch>
          </div>
        </main >
        {/* </div >
        </Fragment >*/}
      </div >
    </Fragment >
  );
}

export default App;
