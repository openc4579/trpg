import React, { useState } from 'react'
import icon from '../classesicon/classesicon.js'
import {Link} from 'react-router-dom'

import './searchbox.scss'

export default function SearchBox(props) {
    const [isOpenSearchBox, setIsOpenSearchBox] = useState(false)

    function _checkSearchBoxOpen(e){
        let isChecked = e.target.checked;
        setIsOpenSearchBox(isChecked);
    }

    console.log(props)

    return(
        <div className="searchbox">
            <div className="collapse shadow-xl">
                <input type="checkbox" onChange={_checkSearchBoxOpen} checked={isOpenSearchBox}/>
                <div className="title collapse-title text-xl font-medium">
                    {props.search_title}
                </div>
                <div className="collapse-content">
                    {
                        props.display_lists && props.display_lists.map((list) => {
                            return(
                                <>
                                <div className="grid grid-cols-2 md:grid-cols-6 h-24">
                                    <div className="p-4 align-baseline">
                                        <Link to={props.path_root+"/"+list.key} className="text-xl">
                                            {
                                                (props.has_icon) ? (<img className="h-10 inline-block mr-4" src={icon[list.key]} alt={list.name}/>) : ''
                                            }
                                            <span>{list.name}</span>
                                        </Link>
                                    </div>
                                    <div className="p-4">
                                        {
                                            (props.has_icon) ? (<img className="h-10" src={icon[list.key]} alt={list.name}/>) : ''
                                        }
                                        <Link to={props.path_root+"/"+list.key} className="text-xl">{list.name}</Link>
                                    </div>
                                </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
            <div className='searchbox-arrow w-full'>
                <div className="searchbox-arrow-line left">
                </div>
                <label className="searchbox-arrow-icon swap border-2 border-base-100 bg-primary-focus shadow-xl">
                    <input type="checkbox" onChange={_checkSearchBoxOpen} checked={isOpenSearchBox}/>
                    <div className="swap-on translate-y-[2px]"><i className="arrow rotate-[225deg]"></i></div>
                    <div className="swap-off translate-y-[-4px]"><i className="arrow rotate-45"></i></div>
                </label>
                <div className="searchbox-arrow-line right">
                </div>
            </div>
        </div>
    )
}