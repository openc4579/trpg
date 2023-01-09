import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import Featurelistitem from './levellistitem/Featurelistitem';

import FeaturelistIcon from './levellistitem/FeaturelistIcon'

import './featurelist.scss';
import { useEffect, useState } from 'react';

export default function Featurelist(props){
    const [listtype, setListtype] = useState('')

    useEffect(()=>{
        if(typeof props.listtype !== 'undefined'){
            setListtype(props.listtype)
        }
    }, [props])

    return(
        <div id="verticalLevelLine" className="md:p-4 mt-2 mb-4 md:mx-8">
            <div className="levellist-container">
                <VerticalTimeline className="vertical-timeline-custom-line" layout="1-column-left">
                    {
                        (listtype == 'level') ?
                        (
                            <VerticalTimelineElement
                                iconStyle={{ backgroundColor: 'hsla(var(--b1) / var(--tw-bg-opacity, 1))', borderRadius: '0', boxShadow: 'inherit', fontWeight: 'bold', fontSize: '20px', paddingTop: '10px', borderBottom: '2px solid rgb(33, 150, 243)' }}
                                icon={<FeaturelistIcon leveltext='等級' textOnly={true}/>}
                                //icon='等級'
                                position='right'
                            />
                        ) : null
                    }
                    {
                        Object.keys(props.featureList).map((level, i) => (
                            <Featurelistitem level_group={props.featureList[level]} leveltext={level} key={i} listtype={listtype}/>
                        ))
                    }
                </VerticalTimeline>
            </div>
        </div>
    )
}