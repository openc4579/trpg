import { VerticalTimelineElement }  from 'react-vertical-timeline-component';

import LevellineIcon from './LevellineIcon'

export default function Levellistitem(props){

    return(
        <>
            {
                props.level_group.levelitems.map((levelitemdetail, i)=>(
                    <VerticalTimelineElement
                        className={(typeof levelitemdetail.subclass === "undefined") ? "vertical-timeline-element--class" : "vertical-timeline-element--subclass"}
                        contentStyle={{ background: '#e6ecf1'}}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        iconStyle={{ background: '#e6ecf1', color: 'rgb(33, 150, 243)' }}
                        icon={<LevellineIcon leveltext={props.leveltext}/>}
                        iconClassName={(i != 0) ? 'icon-cacnel' : ''}
                        position='right'
                    >
                        <div className="vertical-timeline-element-title text-2xl font-bold">{levelitemdetail.title}</div>
                        <div className="vertical-timeline-element-subtitle">
                            {"等級 "+props.leveltext}
                            <span className="font-bold ml-4 text-lg">{((typeof levelitemdetail.subclass_title !== "undefined" && levelitemdetail.subclass_title !== '') ? '('+levelitemdetail.subclass_title+')' : '')}</span>
                        </div>
                        <div>
                            {levelitemdetail.description.split("\n\r").map((i,key) => {
                                return <div key={key} className="text-lg">{i}</div>;
                            })}
                        </div>
                        {
                            (typeof levelitemdetail.sublist !== 'undefined' && levelitemdetail.sublist.length > 0) ?

                            (
                                <ul className="levelline-item-sublist list-disc pl-6 mt-4">
                                    {levelitemdetail.sublist.map((sublistitem, si)=>(
                                        <li key={'level'+i+'-sub'+si} className="py-2">
                                            <div>
                                                <div className="vertical-timeline-element-sublist-title text-xl font-bold">{sublistitem.subtitle}</div>
                                                <div>
                                                    {sublistitem.subdesc.split("\n\r").map((i,key) => {
                                                        return <div key={key} className="text-lg">{i}</div>;
                                                    })}
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            ) : ''
                        }
                    </VerticalTimelineElement>
                ))
            }
        </>
    )
}