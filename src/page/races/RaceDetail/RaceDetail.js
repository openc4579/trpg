import { useState, useEffect } from 'react'
import icons from '../../../component/icons/icons.js'
//import Levellist from '../../../component/levelline/Levellist'
//import Classbasic from './Classbaisc'
//import Subclasslist from './Subclasslist'
//import { ClassBasicLevelsTable } from './ClassBasicLevelsTable'

import {getRaces} from '../../../helper/controller';


export default function RaceDetail(props){
    const [currentRace, setCurrentRace] = useState('');

    const [currentClass, setCurrentClass] = useState('');
    const [className, setClassName] = useState('');
    const [levels, setLevels] = useState([]);

    const [intro, setIntro] = useState([]);
    const [desc, setDesc] = useState([]);
    const [basic, setBasic] = useState([]);
    const [profBonus, setProfBonus] = useState([]);

    const [featureList, setFeatureList] = useState([]);
    const [subclassesLevel, setSubclassesLevel] = useState([]);
    const [activeSubclass, setActiveSubclass] = useState([]);

    function getFeatureList(){
        const temp_levels = []
        const levels_keys = Object.keys(levels)
        const subclass_keys = Object.keys(subclassesLevel)

        if(levels_keys.length > 0) {
            levels_keys.map((level)=>{
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

                if(!!activeSubclass.includes(subclass_name)){
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
                }
            })
        }
        setFeatureList(temp_levels)
    }

    function setSubclassList(){
        const temp_subclasses = []
        const subclass_keys = Object.keys(subclassesLevel)

        if(subclass_keys.length > 0){

            subclass_keys && subclass_keys.map(function(subclass_name){
                const temp_subclass={}
                const subclass_title = subclassesLevel[subclass_name].title
                temp_subclass.subclass = subclass_name
                temp_subclass.subclass_title = subclass_title

                if(!!activeSubclass.includes(subclass_name)){
                    const subclass_levels = subclassesLevel[subclass_name].levels
                    const subclass_levels_keys = Object.keys(subclass_levels)

                    subclass_levels_keys && subclass_levels_keys.map(function(subclass_level){
                        const temp_level = subclass_levels[subclass_level]
                        temp_level.levelitems.map(function(levelitem){
                            levelitem.subclass = subclass_name
                            levelitem.subclass_title = subclass_title
                        })
                    })
                }

                temp_subclasses.push(temp_subclass)
            })
        }
        return temp_subclasses
    }

    async function getRaceData(current_race) {
        const classData = await getRaces(current_race);

        if(typeof classData.name !== 'undefined') setClassName(classData.name)
        if(typeof classData.intro !== 'undefined') setIntro(classData.intro)
        if(typeof classData.description !== 'undefined') setDesc(classData.description)
        //if(typeof classData.basic !== 'undefined') setBasic(classData.basic)
        //if(typeof classData.prof_bonus !== 'undefined') setProfBonus(classData.prof_bonus)
        //if(typeof classData.levels !== 'undefined') setLevels(classData.levels)
        //if(typeof classData.subclasses !== 'undefined') setSubclassesLevel(classData.subclasses)
    }

    function updateActiveSubclass(subclass){
        const index = activeSubclass.indexOf(subclass)

        const newActiveSubclass = [...activeSubclass]
        if(index > -1){
            newActiveSubclass.splice(index, 1)
        }
        else{
            newActiveSubclass.push(subclass)
        }
        setActiveSubclass(newActiveSubclass)
    }

    function handleClickScroll(elementId){
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', inline: 'start' });
        }
    }

    useEffect(() => {
        getFeatureList()
    }, [levels, activeSubclass])

    useEffect(() => {
        getRaceData(currentRace)
    }, [currentRace])

    useEffect(() => {
        setCurrentRace(props.current_race)
    }, [props])

    return(
        <>
            <div className="p-8">
                <div className="text-3xl">{className}</div>
            </div>
            <div className="mx-auto bg-white border rounded-xl shadow-md overflow-hidden">
                <div className="md:flex">
                    <div className="md:shrink-0 p-4">
                        <img className="w-full object-cover" src={icons[currentClass+'Icon']} alt="Modern building architecture"/>
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
            </div>
            <div className="class-detail mt-6">
                <div className="p-4">
                    <div className="text-2xl">職業特性</div>
                </div>
                {/*
                <Classbasic basic={basic}/>
                {/* -- 職業特性列表 -- /}
                <ClassBasicLevelsTable levels={levels} className={className} profBonus={profBonus} onClick={handleClickScroll}/>
                {/* -- 職業特性列表 -- /}
                {/*
                    (subclassesLevel.length > 0) ? (<Subclasslist subclasses={subclassesLevel} activeSubclass={activeSubclass} onClick={updateActiveSubclass}/>) : ''
                        /}
                <Subclasslist subclasses={setSubclassList()} activeSubclass={activeSubclass} onClick={updateActiveSubclass}/>
                <Levellist levellist={featureList} />
                */}
            </div>
        </>
    )
}