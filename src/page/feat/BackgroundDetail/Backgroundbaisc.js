import './backgroundbaisc.scss'

export default function Backgroundbaisc(props){
    return(
        <div className="racebasic p-4 md:p-8">
            {
                Object.keys(props.basic).map((basic_key) => (
                    (()=>{
                        const item = props.basic[basic_key]
                        switch (basic_key) {
                            case 'skill':
                                return (
                                    <div className="racebasic-item m-4" key={basic_key}>
                                        <table className="mt-4">
                                            <tbody>
                                                <tr className="text-lg">
                                                    <td className="truncate align-top"><span className="font-bold">技能熟練： </span></td>
                                                    <td className="align-top">
                                                    {
                                                        Object.keys(item).map((skill)=>(
                                                            <span key={skill} className="leading-relaxed mx-2">
                                                                {
                                                                    (()=>{
                                                                        let text = ''
                                                                        switch (skill) {
                                                                            case 'any':
                                                                                text = '任意選擇 ' +item[skill]+' 種。'
                                                                                break
                                                                            case 'insight':
                                                                                text = '察言觀色'
                                                                                break
                                                                            case 'religion':
                                                                                text = '宗教'
                                                                                break
                                                                            default:
                                                                                text = ''
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
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                )
                            case 'language':
                                return (
                                    <div className="racebasic-item m-4" key={basic_key}>
                                        <table className="mt-4">
                                            <tbody>
                                                <tr className="text-lg">
                                                    <td className="truncate align-top"><span className="font-bold">語言：</span></td>
                                                    <td className="align-top">
                                                    {
                                                        Object.keys(item).map((language)=>(
                                                            <span key={language} className="leading-relaxed mx-2">
                                                                {
                                                                    (()=>{
                                                                        let text = ''
                                                                        let choise_num = ''
                                                                        switch (language) {
                                                                            case 'total_any':
                                                                                choise_num = item[language]
                                                                                text = '與工具合共自選 '+ choise_num +' 種'
                                                                                break
                                                                            case 'any':
                                                                                choise_num = item[language]
                                                                                text = '自選 '+ choise_num +' 種'
                                                                                break
                                                                            default:
                                                                                text = ''
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
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                )
                            case 'tool':
                                return (
                                    <div className="racebasic-item m-4" key={basic_key}>
                                        <table className="mt-4">
                                            <tbody>
                                                <tr className="text-lg">
                                                    <td className="truncate align-top"><span className="font-bold">工具：</span></td>
                                                    <td className="align-top">
                                                    {
                                                        Object.keys(item).map((tool)=>(
                                                            <span key={tool} className="leading-relaxed mx-2">
                                                                {
                                                                    (()=>{
                                                                        let text = ''
                                                                        let choise_num = ''
                                                                        switch (tool) {
                                                                            case 'total_any':
                                                                                choise_num = item[tool]
                                                                                text = '與語言合共自選 '+ choise_num +' 種'
                                                                                break
                                                                            default:
                                                                                text = ''
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
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                )
                            case 'item':
                                return (
                                    <div className="racebasic-item m-4" key={basic_key}>
                                        <table className="mt-4">
                                            <tbody>
                                                <tr className="text-lg">
                                                    <td className="truncate align-top"><span className="font-bold">裝備：</span></td>
                                                    <td className="align-top">
                                                        {item}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                )
                            case 'feats':
                                const item_key = Object.keys(item)
                                return (
                                    <div className="racebasic-item m-4" key={basic_key}>
                                        <table className="mt-4">
                                            <tbody>
                                                <tr className="text-lg">
                                                    <td className="truncate align-top"><span className="font-bold">專長：</span></td>
                                                    <td className="align-top">
                                                        {
                                                            (()=>{
                                                                let text = ''
                                                                text += (item_key.length > 1) ? "你可在以下的專長中選擇一項。" : ""
                                                                item_key.map((index)=>{
                                                                    text += (index != 0) ? '、' : ""
                                                                    text += item[index]
                                                                })
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