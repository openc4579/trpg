import { useState, useEffect } from 'react'
import Backgroundbaisc from './Backgroundbaisc.js';

import {getBackground} from '../../../helper/controller';


export default function BackgroundDetail(props){
    const [currentBackground, setCurrentBackground] = useState('');

    const [backgroundName, setBackgroundName] = useState('');
    const [desc, setDesc] = useState([]);

    const [skill, setSkill] = useState({});
    const [language, setLanguage] = useState({});
    const [tool, setTool] = useState({});
    const [item, setItem] = useState([]);
    const [feature, setFeature] = useState({});

    /*
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
    */

    async function getBackgroundData(current_race) {
        const backgroundData = await getBackground(current_race);

        if(typeof backgroundData.name !== 'undefined') setBackgroundName(backgroundData.name)
        if(typeof backgroundData.description !== 'undefined') setDesc(backgroundData.description)
        if(typeof backgroundData.skill !== 'undefined') setSkill(backgroundData.skill)
        if(typeof backgroundData.language !== 'undefined') setLanguage(backgroundData.language)
        if(typeof backgroundData.tool !== 'undefined') setTool(backgroundData.tool)
        if(typeof backgroundData.item !== 'undefined') setItem(backgroundData.item)
        if(typeof backgroundData.feature !== 'undefined') setFeature(backgroundData.feature)
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
                <div className="md:shrink-0 p-4 md:float-left">
                    {/*
                    <img className="w-full object-cover" src={thumbnails[currentRace+'Thumbnail']} alt="Modern building architecture"/>
                    */}
                </div>
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
                    /*
                (
                    (Object.keys(setSubraceList()).length > 0) ?
                    (
                        <div className="race-subrace-description mt-6 p-4">
                            <Subracelist subcraces={setSubraceList()} onClick={updateActiveSubrace} activeSubrace={activeSubrace}/>
                        </div>
                    ) : null
                )
                    */
            }
            {/*
            <div className="class-detail mt-6">
                <div className="p-4">
                    <div className="text-2xl">種族特性</div>
                </div>
                <div className="p-4">
                    <div className="card border bg-base-100 shadow-xl">
                        <Racebaisc basic={setRaceBasic()} />
                        {/* -- 分隔線 -- /}
                        <div className="px-4 md:px-8">
                            <div className="border-y border-y-gray"></div>
                        </div>
                        {/* -- 分隔線 -- /}
                        <Racefeatures featureList={featureList} />
                    </div>
                </div>
            </div>
            */}
        </>
    )
}