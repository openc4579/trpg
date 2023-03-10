import Text from "../../../component/text/Text"

export default function Classbasic(props){

    return(
        <div className="card border bg-base-100 shadow-xl">
            <div className="p-4 md:grid gap-4 grid-cols-3">
                {
                    Object.keys(props.basic).map((basic_key) => (
                        <table className="classbasic-hitpoint m-4" key={basic_key}>
                            <tbody>
                            {
                                (()=>{
                                    const item = props.basic[basic_key]
                                    switch (basic_key) {
                                        case 'hp':
                                            return (
                                                <>
                                                    <tr className="text-lg">
                                                        <td className="truncate align-top"><span className="font-bold">生命骰： </span></td>
                                                        <td className="align-top">
                                                            <Text text={'1d'+item.dice} />
                                                        </td>
                                                    </tr>
                                                    <tr className="text-lg">
                                                        <td className="truncate align-top"><span className="font-bold">首級生命值： </span></td>
                                                        <td className="align-top">
                                                            <Text text={+item.dice+' + 你的體質調整值'} />
                                                        </td>
                                                    </tr>
                                                    <tr className="text-lg">
                                                        <td className="truncate align-top"><span className="font-bold">其後生命值： </span></td>
                                                        <td className="align-top">
                                                            <Text text={'一級之後每戰士等級 1d'+item.dice+' (or '+props.basic[basic_key].stand+') + 你的體質調整值'} />
                                                        </td>
                                                    </tr>
                                                </>
                                            )
                                        case 'prof':
                                            return (
                                                <>
                                                    <tr className="text-lg">
                                                        <td className="truncate align-top"><span className="font-bold">護甲： </span></td>
                                                        <td className="align-top">
                                                            <Text text={item.armor.join(', ')} />
                                                        </td>
                                                    </tr>
                                                    <tr className="text-lg">
                                                        <td className="truncate align-top"><span className="font-bold">武器： </span></td>
                                                        <td className="align-top">
                                                            <Text text={item.weapon.join(', ')} />
                                                        </td>
                                                    </tr>
                                                    <tr className="text-lg">
                                                        <td className="truncate align-top"><span className="font-bold">工具： </span></td>
                                                        <td className="align-top">
                                                            <Text text={item.tool.join(', ')} />
                                                        </td>
                                                    </tr>
                                                    <tr className="text-lg">
                                                        <td className="truncate align-top"><span className="font-bold">豁免： </span></td>
                                                        <td className="align-top">
                                                            <Text text={item.saving_throw.join(', ')} />
                                                        </td>
                                                    </tr>
                                                    <tr className="text-lg">
                                                        <td className="truncate align-top"><span className="font-bold">技能： </span></td>
                                                        <td className="align-top">
                                                            <Text text={'從 '+item.skill.choice.join(', ')+' 中選擇 '+item.skill.choice_num+' 個'} />
                                                        </td>
                                                    </tr>
                                                </>
                                            )
                                        case 'start_equipment':
                                            console.log(item)
                                            return (
                                                <>
                                                    <tr className="text-lg">
                                                        <td><span className="font-bold">起始： </span></td>
                                                    </tr>
                                                    <tr className="text-lg">
                                                        <td>{'你起始攜帶下列物品，以及任何你背景所提供的東西。'}</td>
                                                    </tr>
                                                    <tr className="text-lg">
                                                        <td>
                                                            <ul className="featurelist-item-sublist list-disc pl-6">
                                                                {
                                                                    item.choice.map((choice_group, i)=>(
                                                                        <li className="py-2" key={i}>
                                                                            <div className="text-lg">
                                                                                {
                                                                                    choice_group.map((choice_item, j)=>(
                                                                                        <Text text={((j != 0) ? '、或':'') + '('+(j+1)+')'+choice_item} />
                                                                                    ))
                                                                                }
                                                                            </div>
                                                                        </li>
                                                                    ))
                                                                }
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                    <tr className="text-lg">
                                                        <td>
                                                            {
                                                                <Text text={'或者，你可以選擇起始擁有 '+item.start_gold.dice_num+'d'+item.start_gold.dice+((typeof item.start_gold.magn !== 'undefined' && !!item.start_gold.magn) ? ' x'+item.start_gold.magn : '')+' 金幣以自行購買裝備。'} />
                                                            }
                                                        </td>
                                                    </tr>
                                                </>
                                            )
                                        default:
                                            <></>
                                    }
                                })()
                            }
                            </tbody>
                        </table>
                    ))
                }
            </div>
        </div>
    )
}