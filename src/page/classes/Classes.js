import { useState } from 'react'
import SerachBox from '../../component/searchbox/SearchBox'
import ClassDetail from './ClassDetail/ClassDetail'

export default function Classes(){
    const [currentClass, setCurrentClass] = useState('fighter')

    return(
        <>
            <div className="p-8">
                <div className="text-4xl">職業</div>
            </div>
            <SerachBox current_class={currentClass} />
            <ClassDetail current_class={currentClass}/>
        </>
    )
}