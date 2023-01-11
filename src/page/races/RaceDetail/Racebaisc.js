export default function Classbasic(props){

    return(
        <div className="p-4 md:p-8">
            {
                Object.keys(props.basic).map((basic_key) => (
                    (()=>{
                        const item = props.basic[basic_key]
                        switch (basic_key) {
                            case 'ability':
                                return (
                                    <div className="classbasic-hitpoint m-4" key={basic_key}>
                                        <table className="mt-4">
                                            <tbody>
                                                <tr className="text-lg">
                                                    <td className="truncate align-top"><span className="font-bold">屬性： </span></td>
                                                    <td className="align-top">
                                                    {
                                                        Object.keys(item).map((race_type)=>(
                                                            <span key={race_type}>
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
                                                                                    ability_type_string = '選擇 任意屬性 +'+ability_item.num
                                                                                    break
                                                                                default:
                                                                                    ability_type_string = ability_type[i]+' +'+ability_item
                                                                            }
                                                                            if(i !== 0) text += ", "
                                                                            text += ability_type_string
                                                                        }

                                                                        return(
                                                                            <>
                                                                                {text + " (每項屬性不能多於 +2)"}
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
                            case 'age':
                                return (
                                    <div className="classbasic-hitpoint m-4" key={basic_key}>
                                        <table className="mt-4">
                                            <tbody>
                                                <tr className="text-lg">
                                                    <td className="truncate align-top"><span className="font-bold">年齡：</span></td>
                                                    <td>{item}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                )
                            case 'size':
                                return (
                                    <div className="classbasic-hitpoint m-4" key={basic_key}>
                                        <table className="mt-4">
                                            <tbody>
                                                <tr className="text-lg">
                                                    <td className="truncate align-top"><span className="font-bold">體型：</span></td>
                                                    <td className="align-top">{item}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                )
                            case 'speed':
                                return (
                                    <div className="classbasic-hitpoint m-4" key={basic_key}>
                                        <table className="mt-4">
                                            <tbody>
                                                <tr className="text-lg">
                                                    <td className="truncate align-top"><span className="font-bold">速度： </span></td>
                                                    <td className="align-top">
                                                    {
                                                        (()=>{
                                                            let text = ''
                                                            const speed_types = Object.keys(item)
                                                            for (let i = 0; i < speed_types.length; i++) {
                                                                let speed_type_string = ''
                                                                switch (speed_types[i]) {
                                                                    case 'walk':
                                                                        speed_type_string = '步行速度'
                                                                        break
                                                                    case 'climb':
                                                                        speed_type_string = '攀爬速度'
                                                                        break
                                                                    case 'burrow':
                                                                        speed_type_string = '掘地速度'
                                                                        break
                                                                    case 'swim':
                                                                        speed_type_string = '游泳速度'
                                                                        break
                                                                    case 'fly':
                                                                        speed_type_string = '飛行速度'
                                                                        break
                                                                    case 'hover':
                                                                        speed_type_string = '懸浮速度'
                                                                        break
                                                                    default:
                                                                        speed_type_string = '速度'
                                                                }
                                                                if(i !== 0) text += ", "
                                                                text += "你的基本" + speed_type_string + " " + item[speed_types[i]] + " 英呎"
                                                            }

                                                            return(
                                                                <>
                                                                    {text}
                                                                </>
                                                            )
                                                        })()
                                                    }
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
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