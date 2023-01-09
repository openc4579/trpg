import React from 'react'

export default function FeaturelistIcon(props){
    const textOnly = (typeof props.textOnly !== 'undefined') ? props.textOnly : false

    return(
        <>
            {
                (textOnly) ? (
                    <>
                        {props.leveltext}
                    </>
                ) : (
                    <span className="vertical-timeline-element-icon bounce-in">
                        <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                            <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle">{props.leveltext}</text>
                        </svg>
                    </span>
                )
            }
        </>
    )
}