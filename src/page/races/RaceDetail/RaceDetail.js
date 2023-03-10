import { useState, useEffect } from 'react'
import thumbnails from '../../../component/thumbnails/raceThumbnails.js'
import Racebaisc from './Racebaisc'
import Racefeatures from './Racefeatures'
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

        default_feature_keys && default_feature_keys.map((level)=>{
            const featureitems = defaultFeature[level]['featureitems'] ? defaultFeature[level]['featureitems'] : [];
            if(featureitems.length > 0){
                temp_features[level] = []
                temp_features[level]['featureitems'] = [];

                featureitems.map((featureitem)=>{
                    temp_features[level]['featureitems'].push(featureitem);
                })
            }
        })

        subrace_keys && subrace_keys.map(function(subrace){
            const subrace_title = subraces[subrace].title

            if(activeSubrace === subrace){
                const subrace_features = subraces[subrace].features
                const subrace_levels_keys = Object.keys(subrace_features)

                subrace_levels_keys && subrace_levels_keys.map(function(subrace_level){
                    const temp_level = subrace_features[subrace_level]
                    temp_level.featureitems.map(function(featureitem){
                        featureitem.subrace = subrace
                        featureitem.subrace_title = subrace_title
                        if(typeof temp_features[subrace_level] !== 'undefined' && typeof temp_features[subrace_level].featureitems !== 'undefined') temp_features[subrace_level].featureitems.push(featureitem)
                    })
                })
            }
        })
        setFeatureList(temp_features)
    }

    function setRaceBasic(){
        const temp_basics = {}
        const basic_keys = Object.keys(basic)
        const subrace_keys = Object.keys(subraces)

        if(basic_keys.length > 0){
            basic_keys.map((basic_key)=>{
                if(typeof temp_basics[basic_key] === 'undefined') temp_basics[basic_key] = {}
                if(basic_key !== 'prof') {
                    temp_basics[basic_key]['default'] = basic[basic_key]
                } else {
                    Object.keys(basic[basic_key]).map((prof_type)=>{
                        if(typeof temp_basics[basic_key][prof_type] === 'undefined') temp_basics[basic_key][prof_type] = {}
                        temp_basics[basic_key][prof_type]['default'] = basic[basic_key][prof_type]
                    })
                }
            })
        }

        if(subrace_keys.length > 0){

            subrace_keys && subrace_keys.map(function(subrace){
                if(subrace == activeSubrace){
                    const subrace_item = subraces[subrace]
                    const subrace_basic = subrace_item.basic
                    const subrace_basic_keys = Object.keys(subrace_basic)
    
                    if(subrace_basic_keys.length > 0){
                        subrace_basic_keys.map((subrace_basic_key)=>{
                            if(typeof temp_basics[subrace_basic_key] === 'undefined') temp_basics[subrace_basic_key] = {}
                            if(subrace_basic_key !== 'prof') {
                                temp_basics[subrace_basic_key]['subrace'] = subrace_basic[subrace_basic_key]
                            } else {
                                Object.keys(subrace_basic[subrace_basic_key]).map((prof_type)=>{
                                    if(typeof temp_basics[subrace_basic_key][prof_type] === 'undefined') temp_basics[subrace_basic_key][prof_type] = {}
                                    temp_basics[subrace_basic_key][prof_type]['subrace'] = subrace_basic[subrace_basic_key][prof_type]
                                })
                            }
                        })
                    }
                }
            })
        }
        return temp_basics
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
        if(typeof raceData.features !== 'undefined') setDefaultFeature(raceData.features)
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
    }, [activeSubrace, defaultFeature])

    useEffect(() => {
        getRaceData(currentRace)
    }, [currentRace])

    useEffect(() => {
        setCurrentRace(props.current_race)
        setActiveSubrace(props.current_subrace)
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
                                    <div className="text-left w-full">???</div>
                                    {
                                        intro && intro.map((i,key) => {
                                            return  <p className="mt-2 text-slate-500 indent-8" key={key}>{i}</p>;
                                        })
                                    }
                                    <div className="text-right w-full">???</div>
                                </>
                            ) : null
                        }
                    </div>
                    <div className="p-4 hidden md:block">
                        <div className="title text-xl font-medium">
                            ??????
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
                            ??????
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
                (
                    (Object.keys(setSubraceList()).length > 0) ?
                    (
                        <div className="race-subrace-description mt-6 p-4">
                            <Subracelist subcraces={setSubraceList()} onClick={updateActiveSubrace} activeSubrace={activeSubrace}/>
                        </div>
                    ) : null
                )
            }
            <div className="class-detail mt-6">
                <div className="p-4">
                    <div className="text-2xl">????????????</div>
                </div>
                <div className="p-4">
                    <div className="card border bg-base-100 shadow-xl">
                        <Racebaisc basic={setRaceBasic()} />
                        {/* -- ????????? -- */}
                        <div className="px-4 md:px-8">
                            <div className="border-y border-y-gray"></div>
                        </div>
                        {/* -- ????????? -- */}
                        <Racefeatures featureList={featureList} />
                    </div>
                </div>
            </div>
        </>
    )
}