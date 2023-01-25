import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbarlist from './navbarlist/Navbarlist'

class Navbar extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="fixed w-full navbar bg-primary-content z-10 h-16">
                <div className="flex-none lg:hidden">
                    <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div>
                <div className="navbar-start">
                    <Link to="/" className="btn btn-ghost normal-case text-xl">月影暗湧</Link>
                </div>
                <div className="flex-none hidden lg:block">
                    <ul className="menu menu-horizontal bg-primary-content">
                        {
                            this.props.menuList.links.map((link_group, i) => (
                                <Navbarlist menuItem = {link_group} key={i}></Navbarlist>
                            ))
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>
        )
    }
}
export default Navbar