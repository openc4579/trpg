import { useState, useEffect } from 'react'
import Backgroundbaisc from './Backgroundbaisc.js';
import Backgroundfeatures from './Backgroundfeatures.js';

import {getBackground} from '../../../helper/controller';


export default function BackgroundDetail(props){
    const [currentBackground, setCurrentBackground] = useState('');

    const [backgroundName, setBackgroundName] = useState('');
    const [desc, setDesc] = useState([]);

    const [skill, setSkill] = useState({});
    const [language, setLanguage] = useState({});
    const [tool, setTool] = useState({});
    const [item, setItem] = useState([]);
    const [feats, setFeats] = useState([]);

    const [featurelist, setFeatureList] = useState([]);

    function getFeatureList(features){
        const temp_features = []
        const default_feature_keys = Object.keys(features)

        default_feature_keys && default_feature_keys.map((level)=>{
            const featureitems = features[level]['featureitems'] ? features[level]['featureitems'] : [];
            if(featureitems.length > 0){
                temp_features[level] = []
                temp_features[level]['featureitems'] = [];

                featureitems.map((featureitem)=>{
                    temp_features[level]['featureitems'].push(featureitem);
                })
            }
        })
        setFeatureList(temp_features)
    }

    function setBackgroundBasic(){
        let temp_basic = {}

        temp_basic.skill = skill
        temp_basic.language = language
        temp_basic.tool = tool
        temp_basic.item = item
        temp_basic.feats = feats

        return temp_basic
    }

    async function getBackgroundData(current_background) {
        const backgroundData = await getBackground(current_background);

        console.log(backgroundData.feature)

        if(typeof backgroundData.name !== 'undefined') setBackgroundName(backgroundData.name)
        if(typeof backgroundData.description !== 'undefined') setDesc(backgroundData.description)
        if(typeof backgroundData.skill !== 'undefined') setSkill(backgroundData.skill)
        if(typeof backgroundData.language !== 'undefined') setLanguage(backgroundData.language)
        if(typeof backgroundData.tool !== 'undefined') setTool(backgroundData.tool)
        if(typeof backgroundData.item !== 'undefined') setItem(backgroundData.item)
        if(typeof backgroundData.feats !== 'undefined') setFeats(backgroundData.feats)
        if(typeof backgroundData.features !== 'undefined') {
            getFeatureList(backgroundData.features)
        }
    }

    useEffect(() => {
        getBackgroundData(currentBackground)
    }, [currentBackground])

    useEffect(() => {
        setCurrentBackground(props.current_background)
    }, [props])

    return(
        <>
            <div className="p-8">
                <div className="text-3xl">{backgroundName}</div>
            </div>
            <div className="mx-auto bg-white border rounded-xl shadow-md overflow-hidden">
                <div className="p-4">
                    <div className="p-4 hidden md:block">
                        <div className="title text-xl font-medium">
                            簡介
                        </div>
                        <div className="content">
                            {
                                desc && desc.map((i,key) => {
                                    return  <p className="mt-2 text-slate-500 indent-8" key={key}>{i}</p>;
                                })
                            }
                        </div>
                    </div>
                    <div className="collapse collapse-arrow md:hidden">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            簡介
                        </div>
                        <div className="collapse-content">
                            {
                                desc && desc.map((i,key) => {
                                    return  <p className="mt-2 text-slate-500 indent-8" key={key}>{i}</p>;
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            {
            <div className="class-detail mt-6">
                <div className="p-4">
                    <div className="text-2xl">背景特性</div>
                </div>
                <div className="card border bg-base-100 shadow-xl">
                    <Backgroundbaisc basic={setBackgroundBasic()} />
                    {/* -- 分隔線 -- */}
                    <div className="px-4 md:px-8">
                        <div className="border-y border-y-gray"></div>
                    </div>
                    {/* -- 分隔線 -- */}
                    <Backgroundfeatures featureList={featurelist} />
                </div>
            </div>
            }
        </>
    )
}