import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import Featurelistitem from './featurelistitem/Featurelistitem';

import FeaturelistIcon from './featurelistitem/FeaturelistIcon'

import './featurelist.scss';

export default function Featurelist(props){

    return(
        <div id="verticalFeaturelist" className="md:p-4 mt-2 mb-4 md:mx-8">
            <div className="levellist-container">
                <VerticalTimeline className="vertical-timeline-custom-line" layout="1-column-left">
                    <VerticalTimelineElement
                        iconStyle={{ backgroundColor: 'hsla(var(--b1) / var(--tw-bg-opacity, 1))', borderRadius: '0', boxShadow: 'inherit', fontWeight: 'bold', fontSize: '20px', paddingTop: '10px', borderBottom: '2px solid rgb(33, 150, 243)' }}
                        icon={<FeaturelistIcon leveltext='等級' textOnly={true}/>}
                        //icon='等級'
                        position='right'
                    />
                    {
                        Object.keys(props.featureList).map((level, i) => (
                            <Featurelistitem level_group={props.featureList[level]} leveltext={level} key={i}/>
                        ))
                    }
                </VerticalTimeline>
            </div>
        </div>
    )
}