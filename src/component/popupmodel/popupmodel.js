import { useEffect, useState } from "react"

export default function PopupModel(props){
    const [filterlist, setFilterList] = useState({})
    
    const [buttonText, setButtonText] = useState('Open')
    const [title, setTitle] = useState('')
    const [search_filter, setSearchFilter] = useState([])

    function confirm(){
        let selected_list = []
        if(!!props.onClick) props.onClick(filterlist)

        // close
        let model_siwtch = document.getElementById('popup-modal');
        model_siwtch.checked = false;
    }

    function clearData(){
        setFilterList({})
    }

    function updateData(e){
        setFilterList({
            ...filterlist,
            [e.target.name]: e.target.value
        })
    }

    useEffect(()=>{
        if(!!props.button_text) setButtonText(props.button_text)
        if(!!props.title) setTitle(props.title)
        if(!!props.search_filter) setSearchFilter(props.search_filter)
        if(!!props.filterlist) setFilterList(props.filterlist)
        return () => {
            setButtonText('Open')
            setTitle('')
            setSearchFilter('')
        };
    }, [props])

    return(
        <>
            {
                (Object.keys(search_filter).length > 0) ? (
                    <>
                        <label htmlFor="popup-modal" className="p-2.5 mr-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">{buttonText}</label>
            
                        <input type="checkbox" id="popup-modal" className="modal-toggle" />
                        <div className="modal">
                            <div id="popup-model-box" className="modal-box">
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
                                                        <select value={(!!filterlist[choice])?filterlist[choice]:''} name={choice} className="select select-bordered" onChange={updateData}>
                                                            <option value=''>--</option>
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
                                    <label onClick={clearData} className="btn p-2.5 mr-2 text-sm font-medium text-white bg-red-700 rounded-lg border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">清空</label>
                                    <label onClick={confirm} className="btn p-2.5 mr-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">確認</label>
                                </div>
                            </div>
                        </div>
                    </>
                ) : null
            }
        </>
    )
}