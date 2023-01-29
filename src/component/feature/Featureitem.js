import React from "react"

import './featureitem.scss';

export default function Featureitem(props){
    return(
        <div className="race-feature-item px-2 py-4 md:p-4 bg-gray-100">
            <div className="text-xl font-bold mb-2 inline-block align-middle">
                {
                    (typeof props.featureitem.subrace_title === "undefined" || props.featureitem.subrace_title === '') ? (
                        <span className="race-title flex items-center">
                            {props.featureitem.title}
                        </span>
                    ) : (
                        <span className="subrace-title flex items-center">
                            {props.featureitem.title}
                            {
                                (typeof props.featureitem.subrace_title !== "undefined" && props.featureitem.subrace_title !== '') ?
                                (
                                    <span className="opacity-70 font-bold ml-4 text-lg">{'('+props.featureitem.subrace_title+')'}</span>
                                ) : null
                            }
                        </span>
                    )
                }
            </div>

            <div>
                {
                    props.featureitem.description && props.featureitem.description.map((i,key) => {
                        return <div key={key} className={"text-lg" + ((key !== (props.featureitem.description.length - 1)) ? " mb-6" : '')}>{i}</div>;
                    })
                }
            </div>
            {
                (typeof props.featureitem.replace_fid !== 'undefined' && props.featureitem.replace_fid.length === 0 && typeof props.featureitem.sublist !== 'undefined' && props.featureitem.sublist.length > 0) ?

                (
                    <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-6">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium border-b-2 border-base-300">
                            選項：
                        </div>
                        <div className="collapse-content">
                            <ul className="featurelist-item-sublist list-disc pl-6 mt-4">
                                {
                                    props.featureitem.sublist.map((sublistitem, si)=>(
                                        <li key={si} className="py-2">
                                            <div>
                                                <div className="vertical-timeline-element-sublist-title text-xl font-bold">{sublistitem.subtitle}</div>
                                                <div>
                                                    {
                                                        sublistitem.subdesc && sublistitem.subdesc.map((i,key) => {
                                                            return <div key={key} className="text-lg">{i}</div>;
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                ) : ''
            }
        </div>
    )
}