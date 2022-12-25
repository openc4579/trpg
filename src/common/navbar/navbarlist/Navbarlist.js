import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Navbarlist extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        const hasSubmenu = (typeof this.props.menuItem.submenu !== 'undefined')
        return(
            <>
                {
                    (hasSubmenu) ? (
                        <li>
                            <span>
                                角色
                                <svg className="fill-current" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                            </span>
                            <ul className="bg-primary-content">
                            {this.props.menuItem.submenu.map((submenu, i) => (
                                <li key={i}>
                                    <Link to={submenu.link}>{submenu.text}</Link>
                                </li>
                            ))}
                            </ul>
                        </li>
                    ) :
                    (
                        <li>
                            <Link to={this.props.menuItem.link}>{this.props.menuItem.text}</Link>
                        </li>
                    )
                }
            </>
        )
    }
}
export default Navbarlist