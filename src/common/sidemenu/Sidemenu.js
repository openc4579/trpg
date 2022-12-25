import React , { Component } from 'react'
import MenuList from './MenuList'
//import './menu.scss'

class Sidemenu extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <ul className="menu p-4 w-80 bg-primary-content">
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>
            </>
        )
    }
}

export default Sidemenu