import { Component } from 'inferno';

import Drawer  from '../drawer/Drawer'

import './background.css'
import Header from "../header/Header";

export default class Background extends Component {
    constructor() {
        super();
        this.state = {
            drawerIsOpen: false
        }
    }

    /**
     * Function to toggle the drawer
     */
    toggleDrawer = () => {
        this.setState({
            drawerIsOpen: !this.state.drawerIsOpen
        })
    }

    render() {
        return (
            <div style={{height: "100%"}}>
                <Header click={this.toggleDrawer}/>
                <Drawer isOpen={this.state.drawerIsOpen} />
            </div>
        )
    }
}