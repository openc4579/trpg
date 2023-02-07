import { useEffect, useState } from "react"

export default function PopupModel(props){
    const [buttonText, setButtonText] = useState('Open')
    const [title, setTitle] = useState('')
    const [search_filter, setSearchFilter] = useState([])

    useEffect(()=>{
        if(!!props.button_text) setButtonText(props.button_text)
        if(!!props.title) setTitle(props.title)
        if(!!props.search_filter) setSearchFilter(props.search_filter)
        return () => {
            setButtonText('Open')
            setTitle('')
            setSearchFilter('')
        };
    }, [props])

    console.log(search_filter)

    return(
        <>
            {
                (Object.keys(search_filter).length > 0) ? (
                    <>
                        <label htmlFor="popup-modal" className="p-2.5 mr-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{buttonText}</label>
            
                        <input type="checkbox" id="popup-modal" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">{title}</h3>
                                <div>
                                    {
                                        Object.keys(search_filter).map((choice)=>{
                                            let choice_item = search_filter[choice]
                                            return(
                                                <div className="form-control w-full max-w-xs">
                                                    <label className="label">
                                                        <span className="label-text">{choice_item.name}</span>
                                                    </label>
                                                    <select defaultValue='Pick one' className="select select-bordered">
                                                        {
                                                            choice_item['option'].map((option)=>(
                                                                <option value={option.key}>{option.name}</option>
                                                            ))
                                                        }
                                                    </select>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className="modal-action">
                                    <label htmlFor="popup-modal" className="btn">確認!</label>
                                </div>
                            </div>
                        </div>
                    </>
                ) : null
            }
        </>
    )
}