import React from 'react'

export function ClassBasicLevelsTable(props){
    const levels_key = Object.keys(props.levels)

    return(
        <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-6 shadow-md">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
                職業特性列表{' - '+props.className}
            </div>
            <div className="collapse-content">
                <div className="overflow-x-auto">
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
                                levels_key && levels_key.map((level)=>{
                                    const level_feature = []
                                    if(typeof props.levels[level]['levelitems'] !== 'undefined') {
                                        const levelitems = props.levels[level]['levelitems']
                                        if(levelitems.length > 0) {
                                            levelitems.map((levelitem)=>{
                                                level_feature.push(levelitem['title'])
                                            })
                                        }
                                    }
                                    return(
                                        <tr>
                                            <th>{level}</th>
                                            <td>
                                                {
                                                    (typeof props.profBonus[(level-1)] !== 'undefined') ? '+'+props.profBonus[(level-1)] : '-'
                                                }
                                            </td>
                                            <td>{level_feature.toString()}</td>
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