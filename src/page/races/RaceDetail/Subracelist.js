import React, { useState, useEffect } from "react";
import Activebutton from "../../../component/activebutton/Activebutton";

import './subracelist.scss'

export default function Subracelist(props){
    const [currentSubrace, setCurrentSubrace] = useState("");

    function updateActiveSubrace(e){
        props.onClick(e.target.value)
        handleCurrentSubrace(e.target.value)
    }

    function handleCurrentSubrace(subrace){
        setCurrentSubrace(subrace)
    }

    useEffect(() => {
        if(props.subcraces.length > 0)
        {
            if(props.activeSubrace !== '') {
                setCurrentSubrace(props.activeSubrace)
            }
            else {
                setCurrentSubrace(props.subcraces[0].subrace)
            }
        }
        return () => {
            setCurrentSubrace("")
        };
    }, [props]);

    return(
        <>
            { /* -- Start of subcraces description --  */}
            <div className="p-4 md:p-8">
                <ul className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-y md:border-0 pl-0 mb-4">
                    {
                        props.subcraces && props.subcraces.map(function(subrace_group, i){
                            return(
                                <li key={i} className="nav-item flex-auto text-center">
                                    <button aria-selected="true" onClick={updateActiveSubrace} className={"nav-link w-full block font-bold text-base leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 md:my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent" + ((currentSubrace == subrace_group.subrace) ? " active" : "")} value={subrace_group.subrace}>{subrace_group.subrace_title}</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="tab-content">
                    {
                        props.subcraces && props.subcraces.map(function(subrace_group, i){
                            return(
                                <div key={i} className={"tab-pane fade" + ((currentSubrace == subrace_group.subrace) ? " show active" : "")}>
                                    <div className="text-2xl font-bold">
                                        {subrace_group.subrace_title}
                                    </div>
                                    <div className="text-lg text-slate-500 indent-8">
                                        {subrace_group.subrace_description}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            { /* -- End of subcraces description --  */}
        </>
    )
}