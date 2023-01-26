import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import SerachBox from '../../component/searchbox/SearchBox'
import BackgroundDetail from './BackgroundDetail/BackgroundDetail';

import {getRacesList} from '../../helper/controller';
export default function Background(){
    const param_race = useParams()

    const [currentBackground, setCurrentBackground] = useState('')
    const [raceList, setRaceList] = useState([])

    async function getRacesListData() {
        const raceData = await getRacesList();

        if(raceData.length > 0) setRaceList(raceData)
    }

    useEffect(() => {
        if(typeof param_race.background !== 'undefined') setCurrentBackground(param_race.background)
    }, [raceList, param_race])

    useEffect(() => {
        getRacesListData()
    }, [])

    return(
        <>
            <div className="p-8">
                <div className="text-4xl">背景</div>
            </div>
            <SerachBox search_title="背景範例列表" display_lists={raceList} has_icon={false} path_root="/race" detail={(currentBackground != '') ? false : true} fixed_display_grid={true}/>
            {
                (currentBackground != '') ?
                (
                    <BackgroundDetail current_background={currentBackground} />
                ) : null
            }
        </>
    )
}