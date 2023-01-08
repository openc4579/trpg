import React from 'react'

export function ClassBasicLevelsTable(props){
    const features_key = Object.keys(props.features)

    function handleClickScroll(e){
        props.onClick(e.target.dataset.target)
    }

    return(
        <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-6 shadow-md">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium border-b-2 border-base-300">
                職業特性列表{' - '+props.className}
            </div>
            <div className="collapse-content">
                <div className="overflow-x-auto my-4">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th className="bg-neutral-content text-lg font-bold">等级</th>
                                <th className="bg-neutral-content text-lg font-bold">熟练加值</th>
                                <th className="bg-neutral-content text-lg font-bold">職業特性</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                features_key && features_key.map((feature, i)=>{
                                    const featureitems = props.features[feature]['featureitems']
                                    return(
                                        <tr key={i}>
                                            <th>{feature}</th>
                                            <td>
                                                {
                                                    (typeof props.profBonus[(feature-1)] !== 'undefined') ? '+'+props.profBonus[(feature-1)] : '-'
                                                }
                                            </td>
                                            <td>
                                                {
                                                    featureitems && featureitems.map((featureitem)=>{
                                                        return(
                                                            <span className="link link-hover mx-4" onClick={handleClickScroll} data-target={'feature_'+featureitem.fid} key={featureitem.fid}>
                                                                {featureitem['title']}
                                                            </span>
                                                        )
                                                    })
                                                }
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}