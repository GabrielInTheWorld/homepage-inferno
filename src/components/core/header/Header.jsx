import { Component } from 'inferno'

import './header.css'

export default class Header extends Component {
    render() {
        return (
            <div className="gmt-header">
                Hello World
                <button onClick={this.props.click}>Click</button>
            </div>
        )
    }
}