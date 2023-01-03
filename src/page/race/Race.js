import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import SerachBox from '../../component/searchbox/SearchBox'

//import {getRaceList} from '../../helper/controller';
export default function Race(){
    const param_race = useParams()

    const [currentRace, setCurrentRace] = useState('')
    const [raceList, setRaceList] = useState([])

    /*
    async function getRaceListData() {
        const raceData = await getRaceList();

        if(raceData.length > 0) setClassesList(raceData)
    }
    */

    useEffect(() => {
        if(typeof param_race.race !== 'undefined') setCurrentRace(param_race.race)
    }, [raceList, param_race])

    useEffect(() => {
        //getRaceListData()
    }, [])

    return(
        <>
            <div className="p-8">
                <div className="text-4xl">種族</div>
            </div>
            <SerachBox search_title="種族列表" display_lists={raceList} has_icon={true} path_root="/class" extend={(currentRace != '') ? false : true}/>
            {
                (currentRace != '') ? 
                (
                    <></>
                ) : null
            }
        </>
    )
}