import { VerticalTimelineElement }  from 'react-vertical-timeline-component';

import LevellineIcon from './LevellineIcon'

export default function Levellistitem(props){
    return(
        <>
            {
                props.level_group.levelitems.map((levelitemdetail, i)=>(
                    <VerticalTimelineElement
                        className={((typeof levelitemdetail.subclass === "undefined") ? "vertical-timeline-element--class" : "vertical-timeline-element--subclass") + ((i == 0) ? " pt-[4em] md:pt-0" : "")}
                        contentStyle={{ background: '#e6ecf1'}}
                        contentArrowStyle={{ display: 'none' }}
                        iconStyle={{ background: '#e6ecf1', color: 'rgb(33, 150, 243)' }}
                        icon={<LevellineIcon leveltext={props.leveltext}/>}
                        iconClassName={(i != 0) ? 'icon-cacnel' : ''}
                        position='right'
                        textClassName="ml-0 md:ml-16"
                        id={"feature_"+levelitemdetail.fid}
                        key={levelitemdetail.fid}
                    >
                        <div className="vertical-timeline-element-content-arrow hidden md:block"></div>
                        <div className="vertical-timeline-element-title text-2xl font-bold">{levelitemdetail.title}</div>
                        <div className="vertical-timeline-element-subtitle">
                            {"等級 "+props.leveltext}
                            <span className="font-bold ml-4 text-lg">{((typeof levelitemdetail.subclass_title !== "undefined" && levelitemdetail.subclass_title !== '') ? '('+levelitemdetail.subclass_title+')' : '')}</span>
                        </div>
                        <div>
                            {
                                levelitemdetail.description && levelitemdetail.description.map((i,key) => {
                                    return <div key={key} className={"text-lg" + ((key !== (levelitemdetail.description.length - 1)) ? " mb-6" : '')}>{i}</div>;
                                })
                            }
                        </div>
                        {
                            (typeof levelitemdetail.replace_cfid !== 'undefined' && levelitemdetail.replace_cfid.length === 0 && typeof levelitemdetail.sublist !== 'undefined' && levelitemdetail.sublist.length > 0) ?

                            (
                                <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-6">
                                    <input type="checkbox" />
                                    <div className="collapse-title text-xl font-medium border-b-2 border-base-300">
                                        選項：
                                    </div>
                                    <div className="collapse-content">
                                        <ul className="levelline-item-sublist list-disc pl-6 mt-4">
                                            {
                                                levelitemdetail.sublist.map((sublistitem, si)=>(
                                                    <li key={'level'+i+'-sub'+si} className="py-2">
                                                        <div>
                                                            <div className="vertical-timeline-element-sublist-title text-xl font-bold">{sublistitem.subtitle}</div>
                                                            <div>
                                                                {
                                                                    sublistitem.subdesc && sublistitem.subdesc.map((i,key) => {
                                                                        return <div key={key} className="text-lg">{i}</div>;
                                                                    })
                                                                }
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            ) : ''
                        }
                    </VerticalTimelineElement>
                ))
            }
        </>
    )
}