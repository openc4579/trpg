import React from "react";
import Activebutton from "../../../component/activebutton/Activebutton";

export default function Subclasslist(props){

    function updateActiveSubclass(subclass){
        props.onClick(subclass)
    }

    return(
        <div className="text-center my-8">
            {
                props.subclasses && props.subclasses.map(function(subclass_group){
                    const active = props.activeSubclass.includes(subclass_group.subclass)
                    return(
                        <Activebutton updateActiveSubclass={updateActiveSubclass} value={subclass_group.subclass} text={subclass_group.subclass_title} active={active}/>
                    )
                })
            }
        </div>
    )
}