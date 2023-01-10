import React from 'react'

export default function Racefeature(props){
    console.log(props)
    return(
        <div calssName="p-2">
            <div className="text-2xl font-bold">{props.featureitem.title}</div>
            {
                (typeof props.featureitem.subcrace_title !== "undefined" && props.featureitem.subcrace_title !== '') ? 
                (
                    <div className="vertical-timeline-element-subtitle">
                        <span className="font-bold ml-4 text-lg">{'('+props.featureitem.subcrace_title+')'}</span>
                    </div>
                ) : null
            }
            
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