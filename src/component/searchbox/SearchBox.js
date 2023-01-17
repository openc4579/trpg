import React, { useState } from 'react'
import icons from '../icons/classIcons.js'
import {Link} from 'react-router-dom'

import './searchbox.scss'

export default function SearchBox(props) {
    const [isOpenSearchBox, setIsOpenSearchBox] = useState(false)
    const isDetail = (typeof props.detail !== 'undefined') ? props.detail : false
    const isDisplayGrid = (typeof props.fixed_display_grid !== 'undefined') ? props.fixed_display_grid : false

    const [filterlist, setFilterlist] = useState([])

    function _checkSearchBoxOpen(e){
        let isChecked = e.target.checked;
        setIsOpenSearchBox(isChecked);
    }

    function selectRace(e){
        let html = e.target.getAttribute('data-html');
        console.log('We need to get the details for ' + html);
    }

    return(
        <div className="searchbox">
            <div className={(isDetail) ? "" : "collapse shadow-xl"}>
                {
                    (isDetail) ?
                    null : (
                        <input type="checkbox" onChange={_checkSearchBoxOpen} checked={isOpenSearchBox}/>
                    )
                }
                <div className="title collapse-title text-xl font-medium">
                    {props.search_title}
                </div>
                <div className={(isDetail) ? "" : "collapse-content"}>
                    {
                        (!isDetail && !isDisplayGrid) ? (
                            <>
                                {/* -- start of search bar -- */}
                                <form className="flex items-center">   
                                    <label htmlFor="simple-search" className="sr-only">Search</label>
                                    <div className="relative w-full">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                        </div>
                                        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                                    </div>
                                    <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                        <span className="sr-only">Search</span>
                                    </button>
                                </form>
                                {/* -- end of search bar -- */}
                                {/* -- start of filter list bar -- */}
                                <div className="my-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    選項：
                                    {
                                       filterlist && filterlist.map((filter_item, i)=>(
                                            <span key={i} className="text-sm font-semibold inline-block py-1 px-2 my-2 uppercase rounded-full text-pink-600 bg-pink-200 uppercase last:mr-0 mr-1">
                                                {filter_item}
                                            </span>
                                       )) 
                                    }
                                </div>
                                {/* -- end of filter list bar -- */}
                                {/* -- start of result list -- */}
                                <div className="flex flex-col">
                                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                            <div className="overflow-hidden">
                                                <table className="min-w-full">
                                                    <thead className="bg-white border-b">
                                                        <tr>
                                                            <th scope="col" className="text-sm font-bold text-gray-900 px-6 py-4 text-left bg-blue-100">
                                                                種族
                                                            </th>
                                                            <th scope="col" className="text-sm font-bold text-gray-900 px-6 py-4 text-left bg-blue-100">
                                                                亞種
                                                            </th>
                                                            <th scope="col" className="text-sm font-bold text-gray-900 px-6 py-4 text-left bg-blue-100">
                                                                速度
                                                            </th>
                                                            <th scope="col" className="text-sm font-bold text-gray-900 px-6 py-4 text-left bg-blue-100">
                                                                黑暗視覺
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 cursor-pointer" onClick={selectRace}>
                                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap" data-html="something">
                                                                Mark
                                                            </td>
                                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap" data-html="something">
                                                                Mark
                                                            </td>
                                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap" data-html="something">
                                                                Otto
                                                            </td>
                                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap" data-html="something">
                                                                @mdo
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* -- end of result list -- */}
                            </>
                        ) : (
                            <>
                                {/* -- start of grid result -- */}
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
                                {/* -- end of grid result -- */}
                            </>
                        )
                    }
                </div>
            </div>
            {
                (isDetail) ?
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