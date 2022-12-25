import React , { Component} from "react";
import { Link } from "react-router-dom";

class MenuItem extends Component {
    constructor(props) {
        super(props);
        // Any number of links can be added here
    }

    render() {
        const hasSubmenu = (typeof this.props.menuItem.submenu !== 'undefined')
        return (
            <div className="side-nav-item">
                <div className="side-nav-item-title">
                    <Link to={this.props.menuItem.link}>{this.props.menuItem.text}</Link>
                    {
                        (hasSubmenu) ? (<i className="rotate-icon"></i>) : ''
                    }
                </div>
                {
                    (hasSubmenu) ? (
                        <ul>
                        {this.props.menuItem.submenu.map((submenu, i) => (
                            <li>
                                <Link to={submenu.link}>{submenu.text}</Link>
                            </li>
                        ))}
                        </ul>
                    ) : ''
                }
            </div>
        )
    }
}

export default MenuItem