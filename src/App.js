import React, { useState, useEffect } from 'react'
import Navbar from './common/navbar/Navbar'
import Sidemenu from './common/sidemenu/Sidemenu'
import AppRouter from './router/AppRouter'

import {getClasses} from './helper/controller';

const globalContent = React.createContext(null);

export default function App(){
    const [global, setGlobal] = useState({});

    function control_global(){
        
    }

    useEffect(()=>{
        return(
            setGlobal({})
        )
    }, [])

    // Any number of links can be added here
    const menulist = {
        links: [{
            text: '角色',
            link: 'https://github.com/Lakston',
            icon: 'fa-pencil-square-o',
            submenu: [{
                text: '種族',
                link: '/race',
            }, {
                text: '職業',
                link: '/class',
            }, {
                text: '背景',
                link: '/background',
            }, {
                text: '專長',
                link: '/feat',
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

    return(
    <globalContent.Provider value={global}>
        <div className="main">
            <div className="drawer bg-bg-base-300">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <Navbar menuList={menulist} />
                    <div className="content mt-16 overflow-x-auto">
                        <div className="container mx-auto p-4 max-w-5xl">
                            <AppRouter />
                        </div>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                </div>
            </div>
        </div>
    </globalContent.Provider>
    )
}