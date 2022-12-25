import { useState, useEffect, useRef } from 'react'
import icon from '../../../asset/images/classes/icons/Fighter.svg'
import Levellist from '../../../component/levelline/Levelline'
import Classbasic from './Classbaisc'
import Subclasslist from './Subclasslist'

import classJson from '../../../asset/json/classes/classes.json'


export default function ClassDetail(props){
    const [levels, setLevels] = useState([]);
    const [subclasses, setSubclasses] = useState([]);
    const [desc, setDesc] = useState("");
    const [basic, setBasic] = useState([]);
    const [currentClass, setCurrentClass] = useState('fighter');
    const [activeSubclass, setActiveSubclass] = useState([]);

    const setClassData=(ori_levels, subclass)=>{
        const temp_levels = ori_levels
        const temp_subclasses = []
        const subclass_keys = Object.keys(subclass)

        subclass_keys && subclass_keys.map(function(subclass_name){
            const temp_subclass={}
            const subclass_title = subclass[subclass_name].title
            temp_subclass.subclass = subclass_name
            temp_subclass.subclass_title = subclass_title

            if(!!activeSubclass.includes(subclass_name)){
                const subclass_levels = subclass[subclass_name].levels
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

            temp_subclasses.push(temp_subclass)
        })
        setLevels(temp_levels)
        setSubclasses(temp_subclasses)
    }

    const getClassData=()=>{
        if(typeof classJson[currentClass] !== 'undefined'){
            const classData = classJson[currentClass]
            if(typeof classData.levels !== 'undefined') {
                const subclasslevels = (typeof classData.subclass !== 'undefined') ? classData.subclass : []
                setClassData(classData.levels, subclasslevels)
            }
            if(typeof classData.basic !== 'undefined') setBasic(classData.basic)
            if(typeof classData.desc !== 'undefined') setDesc(classData.desc)
        }
    }

    function updateActiveSubclass(subclass){
        const alter_activeSubclass = activeSubclass
        const index = alter_activeSubclass.indexOf(subclass)
        if(index > -1){
            alter_activeSubclass.splice(index, 1)
        }
        else{
            alter_activeSubclass.push(subclass)
        }
        setActiveSubclass(alter_activeSubclass)
        getClassData()
    }

    const isInitialMount = useRef(true);
    useEffect(() => {
        if(isInitialMount.current){
            isInitialMount.current = false

        }
        else{
            getClassData()
        }
    }, [])


    return(
        <>
            <div className="p-8">
                <div className="text-3xl">戰士</div>
            </div>
            <div className="mx-auto bg-white border rounded-xl shadow-md overflow-hidden">
                <div className="md:flex">
                    <div className="md:shrink-0 p-4">
                        <img className="w-full object-cover" src={icon} alt="Modern building architecture"/>
                    </div>
                    <div className="p-4 hidden md:block">
                        <div className="title text-xl font-medium">
                            簡介
                        </div>
                        <div className="content">
                            {
                                desc.split("\n\r").map((i,key) => {
                                    return  <p className="mt-2 text-slate-500 indent-8">{i}</p>;
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
                                desc.split("\n\r").map((i,key) => {
                                    return  <p className="mt-2 text-slate-500 indent-8">{i}</p>;
                                })
                            }
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
                <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-6 shadow-md">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        職業特性列表
                    </div>
                    <div className="collapse-content">
                        <div className="overflow-x-auto">
                            <table className="table table-zebra w-full">
                                <thead>
                                    <tr>
                                        <th className="bg-neutral-content text-lg font-bold">等级</th>
                                        <th className="bg-neutral-content text-lg font-bold">熟练加值</th>
                                        <th className="bg-neutral-content text-lg font-bold">能力</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>1</th>
                                        <td>+2</td>
                                        <td>戰鬥風格，回氣</td>
                                    </tr>
                                    <tr>
                                        <th>2</th>
                                        <td>+2</td>
                                        <td>動作如潮</td>
                                    </tr>
                                    <tr>
                                        <th>3</th>
                                        <td>+2</td>
                                        <td>武術範型</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* -- 職業特性列表 -- */}
                <Subclasslist subclasses={subclasses} activeSubclass={activeSubclass} onClick={updateActiveSubclass}/>
                <Levellist levellist={levels} />
            </div>
        </>
    )
}