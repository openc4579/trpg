import {useState, useEffect} from 'react'
import classicons from '../../icons/classIcons.js'
import classthumbnails from '../../thumbnails/classThumbnails.js'
import racethumbnails from '../../thumbnails/raceThumbnails.js'

import {Link} from 'react-router-dom'

export default function Gridcard(props){
    const [item, setItem] = useState('');
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    useEffect(() => {
        if(!!props.category) setCategory(props.category)
        if(!!props.item) setItem(props.item)
        if(!!props.title) setTitle(props.title)
        if(!!props.text) setText(props.text)
        return () => {
            setCategory('')
            setItem('')
            setTitle('')
            setText('')
        };
    }, [props]);

    return(
        <>
            {
                (item != '' && category != '') ? (
                    <Link to={'/'+category+'/'+item}>
                        <div className="card card-side bg-base-100 shadow-xl">
                            <div className="card-body w-[60%]">
                                <h2 className="card-title">
                                    {
                                        (category == 'class') ? (
                                            <img fill="none" className="stroke-current flex-shrink-0 w-6 h-6" src={classicons[item+'Icon']} alt={item + 'Icon'}/>
                                        ) : null
                                    }
                                    {title}
                                </h2>
                                <p className="text-slate-500 indent-8 line-clamp-4">{text}</p>
                                <div className="card-actions justify-start">
                                    <Link to={'/'+category+'/'+item} className="btn btn-primary">詳細</Link>
                                </div>
                            </div>
                            <figure className="max-w-[40%] h-64 p-3">
                                {
                                    (()=>{
                                        let image_src = ''
                                        switch(category){
                                            case "class":
                                                image_src = classthumbnails[item + 'Thumbnail']
                                                break
                                            case "race":
                                                image_src = racethumbnails[item + 'Thumbnail']
                                                break
                                            default:
                                                image_src = ''
                                        }

                                        if(image_src !== ''){
                                            return(
                                                <img className="max-w-[100%] max-h-[100%]" src={image_src} alt={item + 'Thumbnail'}/>
                                            )
                                        }
                                    })()
                                }
                            </figure>
                        </div>
                    </Link>
                ) : null
            }
        </>
    )
}
