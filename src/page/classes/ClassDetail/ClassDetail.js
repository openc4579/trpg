import { useState, useEffect } from 'react'
import icons from '../../../component/icons/icons.js'
import Levellist from '../../../component/levelline/Levellist'
import Classbasic from './Classbaisc'
import Subclasslist from './Subclasslist'
import { ClassBasicLevelsTable } from './ClassBasicLevelsTable'

import {getClasses} from '../../../helper/controller';


export default function ClassDetail(props){
    const [currentClass, setCurrentClass] = useState('');
    const [className, setClassName] = useState('');
    const [features, setFeatures] = useState([]);

    const [intro, setIntro] = useState([]);
    const [desc, setDesc] = useState([]);
    const [basic, setBasic] = useState([]);
    const [profBonus, setProfBonus] = useState([]);

    const [featureList, setFeatureList] = useState([]);
    const [subclassesLevel, setSubclassesLevel] = useState([]);
    const [activeSubclass, setActiveSubclass] = useState([]);

    function getFeatureList(){
        const temp_features = []
        const features_keys = Object.keys(features)
        const subclass_keys = Object.keys(subclassesLevel)

        if(features_keys.length > 0) {
            features_keys.map((feature)=>{
                const featureitems = features[feature]['featureitems'] ? features[feature]['featureitems'] : [];
                if(featureitems.length > 0){
                    temp_features[feature] = []
                    temp_features[feature]['featureitems'] = [];

                    featureitems.map((featureitem)=>{
                        temp_features[feature]['featureitems'].push(featureitem);
                    })
                }
            })
        }

        if(subclass_keys.length > 0){

            subclass_keys && subclass_keys.map(function(subclass_name){
                const subclass_title = subclassesLevel[subclass_name].title

                if(!!activeSubclass.includes(subclass_name)){
                    const subclass_features = subclassesLevel[subclass_name].features
                    const subclass_features_keys = Object.keys(subclass_features)

                    subclass_features_keys && subclass_features_keys.map(function(subclass_level){
                        const temp_feature = subclass_features[subclass_level]
                        temp_feature.featureitems.map(function(featureitem){
                            featureitem.subclass = subclass_name
                            featureitem.subclass_title = subclass_title
                            if(typeof temp_features[subclass_level] !== 'undefined' && typeof temp_features[subclass_level].featureitems !== 'undefined') temp_features[subclass_level].featureitems.push(featureitem)
                        })
                    })
                }
            })
        }
        setFeatureList(temp_features)
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
                    const subclass_features = subclassesLevel[subclass_name].features
                    const subclass_features_keys = Object.keys(subclass_features)

                    subclass_features_keys && subclass_features_keys.map(function(subclass_level){
                        const temp_feature = subclass_features[subclass_level]
                        temp_feature.featureitems.map(function(featureitem){
                            featureitem.subclass = subclass_name
                            featureitem.subclass_title = subclass_title
                        })
                    })
                }

                temp_subclasses.push(temp_subclass)
            })
        }
        return temp_subclasses
    }

    async function getClassData(current_class) {
        const classData = await getClasses(current_class);

        if(typeof classData.name !== 'undefined') setClassName(classData.name)
        if(typeof classData.intro !== 'undefined') setIntro(classData.intro)
        if(typeof classData.description !== 'undefined') setDesc(classData.description)
        if(typeof classData.basic !== 'undefined') setBasic(classData.basic)
        if(typeof classData.prof_bonus !== 'undefined') setProfBonus(classData.prof_bonus)
        if(typeof classData.features !== 'undefined') setFeatures(classData.features)
        if(typeof classData.subclasses !== 'undefined') setSubclassesLevel(classData.subclasses)
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
    }, [features, activeSubclass])

    useEffect(() => {
        getClassData(currentClass)
        setActiveSubclass([])
    }, [currentClass])

    useEffect(() => {
        setCurrentClass(props.current_class)
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
                <Classbasic basic={basic}/>
                {/* -- 職業特性列表 -- */}
                <ClassBasicLevelsTable features={features} className={className} profBonus={profBonus} onClick={handleClickScroll}/>
                {/* -- 職業特性列表 -- */}
                {/*
                    (subclassesLevel.length > 0) ? (<Subclasslist subclasses={subclassesLevel} activeSubclass={activeSubclass} onClick={updateActiveSubclass}/>) : ''
                        */}
                <Subclasslist subclasses={setSubclassList()} activeSubclass={activeSubclass} onClick={updateActiveSubclass}/>
                <Levellist levellist={featureList} />
            </div>
        </>
    )
}