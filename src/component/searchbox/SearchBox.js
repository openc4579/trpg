import React, { useState } from 'react'
import icons from '../icons/classIcons.js'
import {Link} from 'react-router-dom'

import './searchbox.scss'

export default function SearchBox(props) {
    const [isOpenSearchBox, setIsOpenSearchBox] = useState(false)
    const isExtend = (typeof props.extend !== 'undefined') ? props.extend : false

    function _checkSearchBoxOpen(e){
        let isChecked = e.target.checked;
        setIsOpenSearchBox(isChecked);
    }

    return(
        <div className="searchbox">
            <div className={(isExtend) ? "" : "collapse shadow-xl"}>
                {
                    (isExtend) ?
                    null : (
                        <input type="checkbox" onChange={_checkSearchBoxOpen} checked={isOpenSearchBox}/>
                    )
                }
                <div className="title collapse-title text-xl font-medium">
                    {props.search_title}
                </div>
                <div className={(isExtend) ? "" : "collapse-content"}>
                    <div className="my-4 grid gap-4 grid-cols-2 md:grid-cols-6">
                        {
                            props.display_lists && props.display_lists.map((list) => {
                                return(
                                    <div key={list.key} className="grid">
                                        <Link to={props.path_root+"/"+list.key} className="text-2xl w-full">
                                            <div className="alert shadow-lg">
                                                    {
                                                        (props.has_icon) ? (<img fill="none" className="stroke-current flex-shrink-0 w-6 h-6" src={icons[list.key+'Icon']} alt={list.name}/>) : ''
                                                    }
                                                    <span className="mx-auto">{list.name}</span>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            {
                (isExtend) ?
                null : (
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
                )
            }
        </div>
    )
}