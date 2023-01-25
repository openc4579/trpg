import { useState, useEffect } from 'react'
import Gridlist from '../../component/gridlist/gridlist';
import {getRacesIndex} from '../../helper/controller';

export default function Racesindex(){
    const [raceslist, setRaceslist] = useState([])

    async function getRacesIndexData() {
        const raceData = await getRacesIndex();

        if(raceData.length > 0) setRaceslist(raceData)
    }

    useEffect(() => {
        getRacesIndexData()
    }, [])

    return(
        <>
            <div className="p-8">
                <div className="text-4xl">職業</div>
            </div>
            <Gridlist display_lists={raceslist} category="race" />
        </>
    )
}