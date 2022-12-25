export default function Classbasic(props){

    return(
        <div className="card border bg-base-100 shadow-xl">
            <div class="p-4 md:p-8 md:grid gap-8 grid-cols-3">
                {
                    Object.keys(props.basic).map((basic_key) => (
                        <div className="classbasic-hitpoint m-4">
                            <div className="classbasic-hitpoint-title text-2xl font-bold">{props.basic[basic_key].title}</div>
                            {
                                (() => {
                                    const item = props.basic[basic_key]
                                    switch (basic_key) {
                                        case 'hp':
                                            return (
                                                <div className="mt-4">
                                                    <div className="text-lg"><span className="font-bold">生命骰： </span>{'1d'+item.dice}</div>
                                                    <div className="text-lg"><span className="font-bold">首級生命值： </span>{+item.dice+' + 你的體質調整值'}</div>
                                                    <div className="text-lg"><span className="font-bold">其後生命值： </span>{'一級之後每戰士等級 1d'+item.dice+' (or '+props.basic[basic_key].stand+') + 你的體質調整值'}</div>
                                                </div>
                                            )
                                        case 'prof':
                                            return (
                                                <div className="mt-4">
                                                    <div className="text-lg"><span className="font-bold">護甲： </span>{item.armor.join(', ')}</div>
                                                    <div className="text-lg"><span className="font-bold">武器： </span>{item.weapon.join(', ')}</div>
                                                    <div className="text-lg"><span className="font-bold">工具： </span>{item.tool.join(', ')}</div>
                                                    <div className="text-lg"><span className="font-bold">豁免： </span>{item.saving_throw.join(', ')}</div>
                                                    <div className="text-lg"><span className="font-bold">技能： </span>{'從 '+item.skill.choice.join(', ')+' 中選擇 '+item.skill.choice_num+' 個'}</div>
                                                </div>
                                            )
                                        case 'start_equipment':
                                            return (
                                                <div className="mt-4">
                                                    <div className="text-lg">{'你起始攜帶下列物品，以及任何你背景所提供的東西。'}</div>
                                                    <ul className="levelline-item-sublist list-disc pl-6">
                                                        {
                                                            item.choice.map((choice_group)=>(
                                                                <li className="py-2">
                                                                    <div className="text-lg">{'(a)'+choice_group.a+' 或 (b)'+choice_group.b}</div>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                    <div className="text-lg mt-4">
                                                        {
                                                            '或者，你可以選擇起始擁有 '+item.start_gold.dice_num+'d'+item.start_gold.dice+((typeof item.start_gold.magn !== 'undefined' && !!item.start_gold.magn) ? ' x'+item.start_gold.magn : '')+' 金幣以自行購買裝備。'
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        default:
                                            <></>
                                    }
                                })()
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}