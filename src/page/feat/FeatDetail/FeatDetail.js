import { useState, useEffect } from 'react'
import Featbaisc from './Featbaisc.js';
import Text from '../../../component/text/Text'

import {getFeat} from '../../../helper/controller';


export default function FeatDetail(props){
    const [currentFeat, setCurrentFeat] = useState('');

    const [featName, setFeatName] = useState('');
    const [desc, setDesc] = useState([]);

    const [prerequisite, setPrerequisite] = useState('');
    const [abilityname, setAbilityName] = useState('');

    function setBackgroundBasic(){
        let temp_basic = {}

        temp_basic.prerequisite = prerequisite

        return temp_basic
    }

    async function getFeatData(current_feat) {
        const featData = await getFeat(current_feat);

        if(typeof featData.name !== 'undefined') setFeatName(featData.name)
        if(typeof featData.description !== 'undefined') setDesc(featData.description)
        if(typeof featData.prerequisite !== 'undefined') setPrerequisite(featData.prerequisite)
        if(typeof featData.ability_name !== 'undefined') setAbilityName(featData.ability_name)
    }

    useEffect(() => {
        getFeatData(currentFeat)
    }, [currentFeat])

    useEffect(() => {
        setCurrentFeat(props.current_feat)
    }, [props])

    return(
        <>
            <div className="p-8">
                <div className="text-3xl">{featName}</div>
            </div>
            <div className="class-detail">
                <div className="p-4">
                    <div className="text-2xl">專長特性</div>
                </div>
                <div className="card border bg-base-100 shadow-xl">
                    <Featbaisc basic={setBackgroundBasic()} />
                    {/* -- 分隔線 -- */}
                    <div className="px-4 md:px-8">
                        <div className="border-y border-y-gray"></div>
                    </div>
                    <div className="px-4 md:px-8">
                        <div className="p-4 md:p-8">
                        {
                            desc && desc.map((i,key) => (
                                <Text key={key} text={'<p className="mt-2 text-lg">'+i+'</p>'}/>
                            ))
                        }
                        {
                            (abilityname != '') ? (
                                <Text text={'<p className="mt-2 text-lg">'+"．"+abilityname+'</p>'}/>
                            ) : null
                        }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}