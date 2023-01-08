export default function Classbasic(props){

    return(
        <div className="card border bg-base-100 shadow-xl">
            <div className="p-4 md:p-8">
                {
                    Object.keys(props.basic).map((basic_key) => (
                        <div className="classbasic-hitpoint m-4" key={basic_key}>
                            <div className="mt-4">
                            {
                                (()=>{
                                    const item = props.basic[basic_key]
                                    switch (basic_key) {
                                        case 'age':
                                            return (
                                                <div className="text-lg"><span className="font-bold">年齡： </span>{item}</div>
                                            )
                                        case 'size':
                                            return (
                                                <div className="text-lg"><span className="font-bold">體型： </span>{item}</div>
                                            )
                                        case 'speed':
                                            return (
                                                <>
                                                    <div className="text-lg"><span className="font-bold">速度： </span>
                                                        {
                                                            (()=>{
                                                                let text = ''
                                                                const speed_types = Object.keys(item)
                                                                for (let i = 0; i < speed_types.length; i++) {
                                                                    let speed_type_string = ''
                                                                    switch (speed_types[i]) {
                                                                        case 'walk':
                                                                            speed_type_string = '步行速度'
                                                                        case 'climb':
                                                                            speed_type_string = '攀爬速度'
                                                                        case 'burrow':
                                                                            speed_type_string = '掘地速度'
                                                                        case 'swim':
                                                                            speed_type_string = '游泳速度'
                                                                        case 'fly':
                                                                            speed_type_string = '飛行速度'
                                                                        case 'hover':
                                                                            speed_type_string = '懸浮速度'
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
                                                    </div>
                                                </>
                                            )
                                        default:
                                            <></>
                                    }
                                })() 
                            }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}