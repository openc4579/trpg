import React, { useState, useEffect } from "react";
import Activebutton from "../../../component/activebutton/Activebutton";

import './subracelist.scss'

export default function Subracelist(props){
    const [currentSubclassDes, setCurrentSubclassDes] = useState("");

    function updateActiveSubclass(subclass){
        props.onClick(subclass)
    }

    function handleCurrentSubclassDec(e){
        setCurrentSubclassDes(e.target.value)
    }

    useEffect(() => {
        if(props.subclasses.length > 0)
        {
            setCurrentSubclassDes(props.subclasses[0].subclass)
        }
        return () => {
            setCurrentSubclassDes("")
        };
    }, [props]);

    return(
        <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-6 shadow-md">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium border-b-2 border-base-300">
                子職業列表 - 
            </div>
            <div className="collapse-content">
                
                { /* -- Start of subclasses description --  */}
                <div className="p-4 md:p-8">
                    <ul className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-y md:border-0 pl-0 mb-4">
                        {
                            props.subclasses && props.subclasses.map(function(subclass_group, i){
                                return(
                                    <li key={i} className="nav-item flex-auto text-center">
                                        <button aria-selected="true" onClick={handleCurrentSubclassDec} className={"nav-link w-full block font-medium text-base leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 md:my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent" + ((currentSubclassDes == subclass_group.subclass) ? " active" : "")} value={subclass_group.subclass}>{subclass_group.subclass_title}</button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="tab-content">
                        {
                            props.subclasses && props.subclasses.map(function(subclass_group, i){
                                return(
                                    <div key={i} className={"tab-pane fade" + ((currentSubclassDes == subclass_group.subclass) ? " show active" : "")}>
                                        <div className="text-2xl font-bold">
                                            {subclass_group.subclass_title}
                                        </div>
                                        <div className="text-lg text-slate-500 indent-8">
                                            {subclass_group.subclass_description}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                { /* -- End of subclasses description --  */}

            </div>
            <div className="text-center my-2">
                {
                    props.subclasses && props.subclasses.map(function(subclass_group, i){
                        const active = props.activeSubclass.includes(subclass_group.subclass)
                        return(
                            <Activebutton updateActiveSubclass={updateActiveSubclass} value={subclass_group.subclass} text={subclass_group.subclass_title} active={active} key={i}/>
                        )
                    })
                }
            </div>
        </div>
    )
}