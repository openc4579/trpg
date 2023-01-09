import { useState, useEffect } from 'react'
import thumbnails from '../../../component/thumbnails/raceThumbnails.js'
import Racebaisc from './Racebaisc'
import Subracelist from './Subracelist'
//import { ClassBasicLevelsTable } from './ClassBasicLevelsTable'

import {getRaces} from '../../../helper/controller';


export default function RaceDetail(props){
    const [currentRace, setCurrentRace] = useState('');

    const [raceName, setRaceName] = useState('');
    const [defaultFeature, setDefaultFeature] = useState([]);

    const [intro, setIntro] = useState([]);
    const [desc, setDesc] = useState([]);
    const [basic, setBasic] = useState([]);

    const [featureList, setFeatureList] = useState([]);
    const [subraces, setSubraces] = useState([]);
    const [activeSubrace, setActiveSubrace] = useState('');

    function getFeatureList(){
        const temp_features = []
        const default_feature_keys = Object.keys(defaultFeature)
        const subrace_keys = Object.keys(subraces)

        /*
        if(default_feature_keys.length > 0) {
            default_feature_keys.map((level)=>{
                const levelitems = levels[level]['levelitems'] ? levels[level]['levelitems'] : [];
                if(levelitems.length > 0){
                    temp_levels[level] = []
                    temp_levels[level]['levelitems'] = [];

                    levelitems.map((levelitem)=>{
                        temp_levels[level]['levelitems'].push(levelitem);
                    })
                }
            })
        }

        if(subclass_keys.length > 0){

            subclass_keys && subclass_keys.map(function(subclass_name){
                const subclass_title = subclassesLevel[subclass_name].title

                const subclass_levels = subclassesLevel[subclass_name].levels
                const subclass_levels_keys = Object.keys(subclass_levels)

                subclass_levels_keys && subclass_levels_keys.map(function(subclass_level){
                    const temp_level = subclass_levels[subclass_level]
                    temp_level.levelitems.map(function(levelitem){
                        levelitem.subclass = subclass_name
                        levelitem.subclass_title = subclass_title
                        if(typeof temp_levels[subclass_level] !== 'undefined' && typeof temp_levels[subclass_level].levelitems !== 'undefined') temp_levels[subclass_level].levelitems.push(levelitem)
                    })
                })
            })
        }
        */
        setFeatureList(temp_features)
    }

    function setSubraceList(){
        const temp_subraces = []
        const subrace_keys = Object.keys(subraces)

        if(subrace_keys.length > 0){

            subrace_keys && subrace_keys.map(function(subrace){
                const temp_subrace={}
                const subrace_item = subraces[subrace]
                const subrace_title = subrace_item.title
                temp_subrace.subrace = subrace
                temp_subrace.subrace_title = subrace_title
                temp_subrace.subrace_description = subrace_item.description

                subrace_item.features && subrace_item.features.map(function(subrace_features){
                    subrace_features.featureitems.map(function(featureitem){
                        featureitem.subrace = subrace
                        featureitem.subrace_title = subrace_title
                    })
                })

                temp_subraces.push(temp_subrace)
            })
        }
        return temp_subraces
    }

    function updateActiveSubrace(subrace){
        setActiveSubrace(subrace)
    }

    async function getRaceData(current_race) {
        const raceData = await getRaces(current_race);

        if(typeof raceData.name !== 'undefined') setRaceName(raceData.name)
        if(typeof raceData.intro !== 'undefined') setIntro(raceData.intro)
        if(typeof raceData.description !== 'undefined') setDesc(raceData.description)
        if(typeof raceData.basic !== 'undefined') setBasic(raceData.basic)
        //if(typeof raceData.levels !== 'undefined') setLevels(raceData.levels)
        if(typeof raceData.subraces !== 'undefined') setSubraces(raceData.subraces)
    }

    function handleClickScroll(elementId){
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', inline: 'start' });
        }
    }

    useEffect(() => {
        getFeatureList()
    }, [defaultFeature])

    useEffect(() => {
        getRaceData(currentRace)
    }, [currentRace])

    useEffect(() => {
        setCurrentRace(props.current_race)
    }, [props])

    return(
        <>
            <div className="p-8">
                <div className="text-3xl">{raceName}</div>
            </div>
            <div className="mx-auto bg-white border rounded-xl shadow-md overflow-hidden">
                <div className="md:shrink-0 p-4 md:float-left">
                    <img className="w-full object-cover" src={thumbnails[currentRace+'Thumbnail']} alt="Modern building architecture"/>
                </div>
                <div className="p-4">
                    <div className="text-xl italic font-bold px-4">
                        {
                            (intro.length > 0) ?
                            (
                                <>
                                    <div className="text-left w-full">「</div>
                                    {
                                        intro && intro.map((i,key) => {
                                            return  <p className="mt-2 text-slate-500 indent-8" key={key}>{i}</p>;
                                        })
                                    }
                                    <div className="text-right w-full">」</div>
                                </>
                            ) : null
                        }
                    </div>
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
            <div className="class-detail mt-6">
                <div className="p-4">
                    <div className="text-2xl">種族特性</div>
                </div>
                <Racebaisc basic={basic}/>
                <Subracelist featureList={featureList} subcraces={setSubraceList()} onClick={updateActiveSubrace} activeSubrace={activeSubrace}/>
                {/*
                <Levellist levellist={featureList} />
                */}
            </div>
        </>
    )
}