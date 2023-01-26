import './backgroundbaisc.scss'

export default function Backgroundbaisc(props){
console.log(props)

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
                                                                        switch (language) {
                                                                            case 'any':
                                                                                let choise_num = item[language]
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
                                                                        switch (tool) {
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
                            default:
                                <></>
                        }
                    })()
                ))
            }
        </div>
    )
}