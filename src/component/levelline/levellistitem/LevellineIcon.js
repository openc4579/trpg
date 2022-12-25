import React, { Component } from 'react'

class LevellineIcon extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <span className="vertical-timeline-element-icon bounce-in">
                <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle">{this.props.leveltext}</text> 
                </svg>
            </span>
        )
    }
}
export default LevellineIcon