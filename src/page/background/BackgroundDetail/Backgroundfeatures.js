import React, { useState, useEffect } from 'react'
import Featureitem from '../../../component/feature/Featureitem';

export default function Backgroundfeatures(props){
    const [featureList, setFeatureList] = useState([]);

    useEffect(() => {
        if(typeof props.featureList !== 'undefined') setFeatureList(props.featureList)
    }, [props]);

    return(
        <div className="p-4 md:p-8">
            {
                featureList && featureList.map((featureList_group)=>(
                    featureList_group.featureitems.map((featureitem) => {
                        return <Featureitem featureitem={featureitem}/>
                    })
                ))
            }
        </div>
    )
}