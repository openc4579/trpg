import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import SerachBox from '../../component/searchbox/SearchBox'
import BackgroundDetail from './BackgroundDetail/BackgroundDetail';

import {getBackgroundList} from '../../helper/controller';
export default function Background(){
    const param_background = useParams()

    const [currentBackground, setCurrentBackground] = useState('')
    const [backgroundList, setBackgroundList] = useState([])

    const default_search_column = {'name': '種族', 'skill': '技能熟練', 'feats': '專長'}

    async function getBackgroundListData() {
        const backgroundData = await getBackgroundList();

        if(backgroundData.length > 0) setBackgroundList(backgroundData)
    }

    useEffect(() => {
        if(typeof param_background.background !== 'undefined'){
            setCurrentBackground(param_background.background)
        } else {
            setCurrentBackground('')
        }
    }, [backgroundList, param_background])

    useEffect(() => {
        getBackgroundListData()
    }, [])

    return(
        <>
            <div className="p-8">
                <div className="text-4xl">背景</div>
            </div>
            <SerachBox search_title="背景範例列表" display_lists={backgroundList} has_icon={false} path_root="/background" detail={(currentBackground != '') ? false : true} fixed_display_grid={false} default_search_column={default_search_column}/>
            {
                (currentBackground != '') ?
                (
                    <BackgroundDetail current_background={currentBackground} />
                ) : null
            }
        </>
    )
}