import SerachBox from '../../component/searchbox/SearchBox'
import ClassDetail from './ClassDetail/ClassDetail'

export default function Classes(){
    return(
        <>
            <div className="p-8">
                <div className="text-4xl">職業</div>
            </div>
            <SerachBox />
            <ClassDetail />
        </>
    )
}