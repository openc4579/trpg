import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import SerachBox from '../../component/searchbox/SearchBox'

import {getRacesList} from '../../helper/controller';
export default function Races(){
    const param_race = useParams()

    const [currentRace, setCurrentRace] = useState('')
    const [raceList, setRaceList] = useState([])

    async function getRacesListData() {
        const raceData = await getRacesList();

        if(raceData.length > 0) setRaceList(raceData)
    }

    useEffect(() => {
        if(typeof param_race.race !== 'undefined') setCurrentRace(param_race.race)
    }, [raceList, param_race])

    useEffect(() => {
        getRacesListData()
    }, [])

    return(
        <>
            <div className="p-8">
                <div className="text-4xl">種族</div>
            </div>
            <SerachBox search_title="種族列表" display_lists={raceList} has_icon={false} path_root="/race" extend={(currentRace != '') ? false : true}/>
            {
                (currentRace != '') ?
                (
                    <></>
                ) : null
            }
        </>
    )
}