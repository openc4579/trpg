import React, { useEffect } from 'react'
import Navbar from './common/navbar/Navbar'
import Sidemenu from './common/sidemenu/Sidemenu'
import AppRouter from './router/AppRouter'

import {getClasses} from './helper/controller';

export default function App(props){
    // Any number of links can be added here
    const menulist = {
        links: [{
            text: '角色',
            link: 'https://github.com/Lakston',
            icon: 'fa-pencil-square-o',
            submenu: [{
                text: '職業',
                link: '/Classes',
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

    useEffect(() => {
        async function getClassFromAPI() {
            console.log(await getClasses('fighter'));
        }
        getClassFromAPI();
    }, []);

    return(
    <div className="main">
        <div className="drawer bg-bg-base-300">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <Navbar menuList={menulist} />
                <div className="content mt-16 overflow-x-auto">
                    <div className="container mx-auto md:px-8 px-4">
                        <AppRouter />
                    </div>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
            </div>
        </div>
    </div>
    )
}