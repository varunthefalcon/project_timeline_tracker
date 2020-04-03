import React from 'react'
import { NavLink } from 'reactstrap'

function SideNavContent() {
    return (
        <div className="scrollbar" style={{height: 'calc(100vh - 70px)'}}>
        <ul className="nav-menu">
            <li className="nav-header">Profile </li>

            <li className="menu no-arrow">
                <NavLink to="/app/profile/personal">
                    <i className="zmdi zmdi-widgets zmdi-hc-fw" />
                    <span className="nav-text">Personal </span>
                </NavLink>
            </li>

            <li className="menu no-arrow">
                <NavLink to="/app/profile/education">
                    <i className="zmdi zmdi-widgets zmdi-hc-fw" />
                    <span className="nav-text">Education </span>
                </NavLink>
            </li>

            <li className="menu no-arrow">
                <NavLink to="/app/profile/experience">
                    <i className="zmdi zmdi-widgets zmdi-hc-fw" />
                    <span className="nav-text">Experience </span>
                </NavLink>
            </li>
        </ul>
        </div>
    )
}

export default SideNavContent
