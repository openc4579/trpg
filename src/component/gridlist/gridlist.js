import React from 'react'
import Gridcard from './gridcard/gridcard.js'

export default function Gridlist(props) {

    const displayList = (typeof props.display_lists !== 'undefined') ? props.display_lists : []
    const category = (typeof props.category !== 'undefined') ? props.category : ''

    return(
        <div className="gridlist">
            {/* -- start of grid result -- */}
            <div className="my-4 grid gap-4 md:grid-cols-2">
                {
                    displayList && displayList.map((list) => {
                        return(
                            <Gridcard key={list.key} category={category} item={list.key} title={list.name} text={list.intro}/>
                        )
                    })
                }
            </div>
            {/* -- end of grid result -- */}
        </div>
    )
}