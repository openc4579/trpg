import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import SerachBox from '../../component/searchbox/SearchBox'
import BackgroundDetail from './BackgroundDetail/BackgroundDetail';

import {getFeatList} from '../../helper/controller';
export default function Feat(){
    const param_feat = useParams()

    const [currentFeat, setCurrentFeat] = useState('')
    const [featList, setFeatList] = useState([])

    const default_search_column = {'name': '專長', 'ability': '屬性值', 'prerequisite': '先決條件'}

    async function getFeatListData() {
        const featData = await getFeatList();

        if(featData.length > 0) setFeatList(featData)
    }

    useEffect(() => {
        if(typeof param_feat.feat !== 'undefined'){
            setCurrentFeat(param_feat.feat)
        } else {
            setCurrentFeat('')
        }
    }, [featList, param_feat])

    useEffect(() => {
        getFeatListData()
    }, [])

    return(
        <>
            <div className="p-8">
                <div className="text-4xl">背景</div>
            </div>
            <SerachBox search_title="背景範例列表" display_lists={featList} has_icon={false} path_root="/background" detail={(currentFeat != '') ? false : true} fixed_display_grid={false} default_search_column={default_search_column}/>
            {
                (currentFeat != '') ?
                (
                    <BackgroundDetail current_background={currentFeat} />
                ) : null
            }
        </>
    )
}