import { useState, useEffect } from 'react'
import Gridlist from '../../component/gridlist/gridlist';
import {getClassesIndex} from '../../helper/controller';

export default function Classesindex(){
    const [classesList, setClassesList] = useState([])

    async function getClassesIndexData() {
        const classData = await getClassesIndex();

        if(classData.length > 0) setClassesList(classData)
    }

    useEffect(() => {
        getClassesIndexData()
    }, [])

    return(
        <>
            <div className="p-8">
                <div className="text-4xl">職業</div>
            </div>
            <Gridlist display_lists={classesList} category="class" />
        </>
    )
}