import React from 'react';
import Drawer from 'rc-drawer';
import SideNavContent from './SideNavContent';

class SideNav extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = { navCollapsed: true }
    }

    onToggleCollapsedNav = () => {
        this.setState({ navCollapsed: !this.state.navCollapsed })
    }

    render() {
        return (
            <Drawer docked={true} className="app-sidebar d-flex"
                style={{ overflow: 'auto' }}
                touch={true}
                position='left'
                transitions={true}
                enableDragHandle={true}
                open={true}
                sidebar={<div className="side-nav">
                    <div className="sidebar-header d-flex align-items-center">
                        <img alt='...' src='http://via.placeholder.com/105x36' />

                    </div>
                    <SideNavContent />
                </div>}>
                <div />
            </Drawer>
        );
    }
}


export default SideNav
