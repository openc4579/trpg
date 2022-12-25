import React , { Component} from "react";
import MenuItem from "./MenuItem";

class MenuList extends Component {
    constructor(props) {
        super(props);
        // Any number of links can be added here
        this.state = {
            links: [{
                text: 'Author',
                link: 'https://github.com/Lakston',
                icon: 'fa-pencil-square-o',
                submenu: [{
                    text: 'Author-1',
                    link: 'https://github.com/Lakston',
                }, {
                    text: 'Author-2',
                    link: 'https://github.com/Lakston',
                }, {
                    text: 'Author-3',
                    link: 'https://github.com/Lakston',
                }]
            }, {
                text: 'Github page',
                link: 'https://github.com/Lakston',
                icon: 'fa-github'
            }, {
                text: 'Twitter',
                link: 'https://twitter.com/Fab_is_coding',
                icon: 'fa-twitter'
            }]
        }
    }
    render() {
        return (
            <div className={this.props.menuStatus} id='menu'>
                
                {this.state.links.map((link_group) => (
                    <MenuItem menuItem = {link_group}></MenuItem>
                ))}
            </div>
        )
    }
}

export default MenuList