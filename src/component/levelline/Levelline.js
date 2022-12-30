import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import Levellistitem from './levellistitem/Levellistitem';

import './levelline.scss';

export default function Levellist(props){
    console.log(props)
    return(
        <div id="verticalLevelLine" className="p-4 mt-8 md:mx-8">
            <div className="levellist-container">
                <VerticalTimeline className="vertical-timeline-custom-line" layout="1-column-left">
                    <VerticalTimelineElement
                        iconStyle={{ backgroundColor: 'hsla(var(--b1) / var(--tw-bg-opacity, 1))', borderRadius: '0', boxShadow: 'inherit', fontWeight: 'bold', fontSize: '20px', paddingTop: '10px', borderBottom: '2px solid rgb(33, 150, 243)' }}
                        icon='等級'
                        position='right'
                    />
                    {
                        Object.keys(props.levellist).map((level) => (
                            <>
                                <Levellistitem level_group={props.levellist[level]} leveltext={level}/>
                            </>
                        ))
                    }
                </VerticalTimeline>
            </div>
        </div>
    )
}