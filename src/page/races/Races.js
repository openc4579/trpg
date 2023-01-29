import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import SerachBox from '../../component/searchbox/SearchBox'
import RaceDetail from './RaceDetail/RaceDetail'

import {getRacesList} from '../../helper/controller';
export default function Races(){
    const param_race = useParams()

    const [currentRace, setCurrentRace] = useState('')
    const [currentSubrace, setCurrentSubrace] = useState('')
    const [raceList, setRaceList] = useState([])

    const default_search_column = {'name': '種族', 'subrace_name': '亞種', 'size_type': '體型', 'darkvision': '黑暗視覺'}

    async function getRacesListData() {
        const raceData = await getRacesList();

        if(raceData.length > 0) setRaceList(raceData)
    }

    useEffect(() => {
        if(typeof param_race.race !== 'undefined') setCurrentRace(param_race.race)
        if(typeof param_race.subrace !== 'undefined') setCurrentSubrace(param_race.subrace)
    }, [raceList, param_race])

    useEffect(() => {
        getRacesListData()
    }, [])

    return(
        <>
            <div className="p-8">
                <div className="text-4xl">種族</div>
            </div>
            <SerachBox search_title="種族列表" display_lists={raceList} has_icon={false} path_root="/race" detail={(currentRace != '') ? false : true} default_search_column={default_search_column}/>
            {
                (currentRace != '') ?
                (
                    <RaceDetail current_race={currentRace} current_subrace={currentSubrace} />
                ) : null
            }
        </>
    )
}