import './racebaisc.scss'

export default function Racebaisc(props){
console.log(props)

    return(
        <div className="racebasic p-4 md:p-8">
            {
                Object.keys(props.basic).map((basic_key) => (
                    (()=>{
                        const item = props.basic[basic_key]
                        switch (basic_key) {
                            case 'ability':
                                return (
                                    <div className="racebasic-item m-4" key={basic_key}>
                                        <table className="mt-4">
                                            <tbody>
                                                <tr className="text-lg">
                                                    <td className="truncate align-top"><span className="font-bold">屬性： </span></td>
                                                    <td className="align-top">
                                                    {
                                                        Object.keys(item).map((race_type)=>(
                                                            <span key={race_type} className={"leading-relaxed mx-2" + ((race_type==='default') ? " racebasic-item-race-item" : " racebasic-item-subrace-item")}>
                                                                {
                                                                    (()=>{
                                                                        let text = ''
                                                                        const ability_group = item[race_type]
                                                                        const ability_type = Object.keys(ability_group)
                                                                        for (let i = 0; i < ability_type.length; i++) {
                                                                            const ability_item = ability_group[ability_type[i]]
                                                                            let ability_type_string = ''
                                                                            switch (ability_type[i]) {
                                                                                case 'choose':
                                                                                    let ability_choose_from_str = ''
                                                                                    if(ability_item.from.length == 6){
                                                                                        ability_choose_from_str = '任意屬性'
                                                                                    } else {
                                                                                        ability_item.from.map((ability_type, i)=>{
                                                                                            ability_choose_from_str += ((i!==0) ? ', ' : '') + ability_type
                                                                                        })
                                                                                    }
                                                                                    ability_type_string = '選擇 任意屬性 '+((ability_item.num > 0) ? '+' : '')+ability_item.num
                                                                                    break
                                                                                default:
                                                                                    ability_type_string = ability_type[i]+' +'+ability_item
                                                                            }
                                                                            if(i != 0) text += "，"
                                                                            text += ability_type_string
                                                                        }

                                                                        return(
                                                                            <>
                                                                                {text + "。"}
                                                                            </>
                                                                        )
                                                                    })()
                                                                }
                                                            </span>
                                                        ))
                                                    }
                                                        <span> (每項屬性不能多於 +2)</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                )
                            case 'age':
                                return (
                                    <div className="racebasic-item m-4" key={basic_key}>
                                        <table className="mt-4">
                                            <tbody>
                                                <tr className="text-lg">
                                                    <td className="truncate align-top"><span className="font-bold">年齡：</span></td>
                                                    <td className="align-top">
                                                    {
                                                        Object.keys(item).map((race_type)=>(
                                                            <span key={race_type} className={"leading-relaxed mx-2" + ((race_type==='default') ? " racebasic-item-race-item" : " racebasic-item-subrace-item")}>
                                                                {item[race_type]}
                                                            </span>
                                                        ))
                                                    }
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                )
                            case 'size':
                                return (
                                    <div className="racebasic-item m-4" key={basic_key}>
                                        <table className="mt-4">
                                            <tbody>
                                                <tr className="text-lg">
                                                    <td className="truncate align-top"><span className="font-bold">體型：</span></td>
                                                    <td className="align-top">
                                                    {
                                                        Object.keys(item).map((race_type)=>(
                                                            <span key={race_type} className={"leading-relaxed mx-2" + ((race_type==='default') ? " racebasic-item-race-item" : " racebasic-item-subrace-item")}>
                                                                {item[race_type]}
                                                            </span>
                                                        ))
                                                    }
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                )
                            case 'speed':
                                return (
                                    <div className="racebasic-item m-4" key={basic_key}>
                                        <table className="mt-4">
                                            <tbody>
                                                <tr className="text-lg">
                                                    <td className="truncate align-top"><span className="font-bold">速度： </span></td>
                                                    <td className="align-top">
                                                    {
                                                        Object.keys(item).map((race_type)=>(
                                                            <span key={race_type} className={"leading-relaxed mx-2" + ((race_type==='default') ? " racebasic-item-race-item" : " racebasic-item-subrace-item")}>
                                                                {
                                                                    (()=>{
                                                                        let text = ''
                                                                        const ability_group = item[race_type]
                                                                        const ability_type = Object.keys(ability_group)
                                                                        for (let i = 0; i < ability_type.length; i++) {
                                                                            const ability_item = ability_group[ability_type[i]]
                                                                            let ability_type_string = ''
                                                                            switch (ability_type[i]) {
                                                                                case 'walk':
                                                                                    ability_type_string = '步行速度'
                                                                                    break
                                                                                case 'climb':
                                                                                    ability_type_string = '攀爬速度'
                                                                                    break
                                                                                case 'burrow':
                                                                                    ability_type_string = '掘地速度'
                                                                                    break
                                                                                case 'swim':
                                                                                    ability_type_string = '游泳速度'
                                                                                    break
                                                                                case 'fly':
                                                                                    ability_type_string = '飛行速度'
                                                                                    break
                                                                                case 'hover':
                                                                                    ability_type_string = '懸浮速度'
                                                                                    break
                                                                                default:
                                                                                    ability_type_string = '速度'
                                                                            }
                                                                            if(i != 0) text += "，"
                                                                            text += "基本" + ability_type_string + " " + ability_item + " 英呎"
                                                                        }

                                                                        return(
                                                                            <>
                                                                                {text + "。"}
                                                                            </>
                                                                        )
                                                                    })()
                                                                }
                                                            </span>
                                                        ))
                                                    }
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                )
                            case 'darkvision':
                                return (
                                    <div className="racebasic-item m-4" key={basic_key}>
                                        <table className="mt-4">
                                            <tbody>
                                                <tr className="text-lg">
                                                    <td className="truncate align-top"><span className="font-bold">黑暗視覺：</span></td>
                                                    <td className="align-top">
                                                    {
                                                        Object.keys(item).map((race_type)=>(
                                                            <span key={race_type} className={"leading-relaxed mx-2" + ((race_type==='default') ? " racebasic-item-race-item" : " racebasic-item-subrace-item")}>
                                                                {item[race_type] + ' 英呎。'}
                                                            </span>
                                                        ))
                                                    }
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                )
                            case 'prof':
                                return (
                                    <div className="racebasic-item m-4" key={basic_key}>
                                        <table>
                                            <tbody>
                                                <tr className="text-lg">
                                                    <td className="truncate align-top"><span className="font-bold">熟練： </span></td>
                                                    <td className="align-top">
                                                    {
                                                        (()=>{
                                                            return(
                                                                Object.keys(item).map((prof_type)=>(
                                                                    <div key={prof_type}>
                                                                        {
                                                                            (()=>{
                                                                                let prof_type_string = ''

                                                                                switch (prof_type) {
                                                                                    case 'weapon':
                                                                                        prof_type_string = '武器'
                                                                                        break
                                                                                    case 'skills':
                                                                                        prof_type_string = '技能'
                                                                                        break
                                                                                    case 'language':
                                                                                        prof_type_string = '語言'
                                                                                        break
                                                                                    case 'armor':
                                                                                        prof_type_string = '護甲'
                                                                                        break
                                                                                    default:
                                                                                        prof_type_string = ''
                                                                                }

                                                                                if(prof_type_string !== '') {
                                                                                    return(
                                                                                        <>
                                                                                            <span className="font-bold">{prof_type_string+"："}</span>
                                                                                            <span>
                                                                                            {
                                                                                                Object.keys(item[prof_type]).map((race_type)=>(
                                                                                                    <span key={race_type} className={"leading-relaxed mx-2" + ((race_type==='default') ? " racebasic-item-race-item" : " racebasic-item-subrace-item")}>
                                                                                                        {
                                                                                                            (()=>{
                                                                                                                let text = ''
                                                                                                                const prof_item = item[prof_type][race_type]
                                                                                                                let prof_item_string = ''

                                                                                                                let prof_items_split = prof_item.split('|')

                                                                                                                if(prof_items_split.length > 0){
                                                                                                                    for(let j=0; j<prof_items_split.length; j++) {
                                                                                                                        prof_item_string += prof_items_split[j]
                                                                                                                        prof_item_string += (j==prof_items_split.length-1) ? "。" : "，"
                                                                                                                    }
                                                                                                                    text += prof_item_string
                                                                                                                }

                                                                                                                return(
                                                                                                                    <>
                                                                                                                        {text}
                                                                                                                    </>
                                                                                                                )
                                                                                                            })()
                                                                                                        }
                                                                                                    </span>
                                                                                                ))
                                                                                            }
                                                                                            </span>
                                                                                        </>
                                                                                    )
                                                                                }
                                                                            })()
                                                                        }
                                                                    </div>
                                                                ))
                                                            )
                                                        })()
                                                    }
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                )
                            case 'spell':
                                return (
                                    <div className="racebasic-item m-4" key={basic_key}>
                                        <table className="mt-4">
                                            <tbody>
                                                <tr className="text-lg">
                                                    <td className="truncate align-top"><span className="font-bold">天生施法：</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="relative rounded-xl overflow-auto">
                                            <div className="shadow-sm overflow-hidden my-8">
                                                <table className="natural-spell-table table table-compact w-full">
                                                    <thead>
                                                        <tr>
                                                            <td className="text-bold">等級</td>
                                                            <td className="text-bold">法術</td>
                                                            <td className="text-bold">次數</td>
                                                            <td className="text-bold">備註</td>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                    {
                                                        (()=>{
                                                            return(
                                                                Object.keys(item).map((race_type)=>{
                                                                    const feature_group = item[race_type]
                                                                    const feature_group_names = Object.keys(feature_group)
                                                                    return(
                                                                        feature_group_names && feature_group_names.map((feature_group_name)=>{
                                                                            const spell_item = feature_group[feature_group_name]
                                                                            const spells = spell_item.spells
                                                                            const spells_level = Object.keys(spells)
                                                                            return(
                                                                                <>
                                                                                    <tr className={(race_type === 'default') ? "race-natural-spell-title" : "subrace-natural-spell-title"}>
                                                                                        <td colSpan="2">{feature_group_name + " (" + spell_item.recover + ")"}</td>
                                                                                        <td colSpan="2">{spell_item.remark}</td>
                                                                                    </tr>
                                                                                    {
                                                                                        spells_level && spells_level.map((level)=>{
                                                                                            const spells_by_level = spells[level]
                                                                                            const spells_name = Object.keys(spells_by_level)
                                                                                            return(
                                                                                                spells_name && spells_name.map((spell_name, i)=>{
                                                                                                    return(
                                                                                                        <tr className={(race_type === 'default') ? "race-natural-spell-item" : "subrace-natural-spell-item"}>
                                                                                                            {
                                                                                                                (i==0) ? (<td rowSpan={spells_name.length}>{level}</td>) : null
                                                                                                            }
                                                                                                            <td>{spell_name}</td>
                                                                                                            <td>{spells_by_level[spell_name].time}</td>
                                                                                                            <td>{spells_by_level[spell_name].remark}</td>
                                                                                                        </tr>
                                                                                                    )
                                                                                                })
                                                                                            )
                                                                                        })
                                                                                    }
                                                                                </>
                                                                            )
                                                                        })
                                                                    )
                                                                    /*
                                                                    <span key={race_type} className={"leading-relaxed mx-2" + ((race_type==='default') ? " racebasic-item-race-item" : " racebasic-item-subrace-item")}>
                                                                        {item[race_type] + ' 英呎。'}
                                                                    </span>
                                                                    */
                                                                })
                                                            )
                                                        })()
                                                    }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                )
                            default:
                                <></>
                        }
                    })()
                ))
            }
        </div>
    )
}