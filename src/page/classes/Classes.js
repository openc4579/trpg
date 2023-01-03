import { useState, useEffect } from 'react'
import SerachBox from '../../component/searchbox/SearchBox'
import ClassDetail from './ClassDetail/ClassDetail'

import {getClassesList} from '../../helper/controller';

export default function Classes(){
    const [currentClass, setCurrentClass] = useState('fighter')
    const [classesList, setClassesList] = useState([])

    console.log(classesList)

    async function getClassesListData() {
        const classData = await getClassesList();

        if(classData.length > 0) setClassesList(classData)
    }

    useEffect(() => {
        getClassesListData()
    }, [])

    return(
        <>
            <div className="p-8">
                <div className="text-4xl">職業</div>
            </div>
            <SerachBox current_class={currentClass} search_title="職業列表" display_lists={classesList} has_icon={true} path_root="/class"/>
            <ClassDetail current_class={currentClass}/>
        </>
    )
}