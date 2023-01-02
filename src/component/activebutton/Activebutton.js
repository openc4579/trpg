import React, { useState } from 'react'

export default function Activebutton(props){
    const [active, setActive] = useState(props.active);

    function updateActiveSubclass(e){
        props.updateActiveSubclass(e.target.value)
        setActive(!active)
    }

    return(
        <>
            <button onClick={updateActiveSubclass} value={props.value} className={"m-2 px-4 py-2 font-semibold rounded-full shadow-md"+((active) ? " text-white bg-cyan-500 shadow-cyan-50" : "")}>{props.text}</button>
        </>
    )
}