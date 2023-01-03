import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import SerachBox from '../../component/searchbox/SearchBox'
import ClassDetail from './ClassDetail/ClassDetail'

import {getClassesList} from '../../helper/controller';
export default function Classes(){
    const param_class = useParams()

    const [currentClass, setCurrentClass] = useState('')
    const [classesList, setClassesList] = useState([])

    async function getClassesListData() {
        const classData = await getClassesList();

        if(classData.length > 0) setClassesList(classData)
    }

    useEffect(() => {
        if(typeof param_class.class !== 'undefined') setCurrentClass(param_class.class)
    }, [classesList, param_class])

    useEffect(() => {
        getClassesListData()
    }, [])

    return(
        <>
            <div className="p-8">
                <div className="text-4xl">職業</div>
            </div>
            <SerachBox search_title="職業列表" display_lists={classesList} has_icon={true} path_root="/class" extend={(currentClass != '') ? false : true}/>
            {
                (currentClass != '') ? 
                (
                    <ClassDetail current_class={currentClass}/>
                ) : null
            }
        </>
    )
}