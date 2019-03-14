import { Component } from 'inferno'

import './drawer.css'

export default class Drawer extends Component {
    render() {
        const marginLeft = this.props.isOpen ? "0px" : "-240px";
        console.log('drawer:', this.props, marginLeft);
        return (
            <div
                className="gmt-drawer"
                style={{
                    marginLeft: marginLeft
                }}>

            </div>
        )
    }
}
