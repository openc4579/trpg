import React, {useState, useEffect} from 'react'

export default function Text(props){
    const [textlist, setTestlist] = useState([]);

    function control_regex(text){
        const regex_str = /\{@(.*?)\}/g
        let m
        let temp_list = []
        do {
            m = regex_str.exec(text);
            if (m) {
                let code_list = m[1].split(';');
                let type = ''
                let item = []
                let name = ''
                if(code_list.length == 3){
                    type = code_list[0]
                    item = code_list[1].split('|')
                    name = code_list[2]
                }

                let object = {'type': type, 'item': item, 'name': name}

                temp_list.push(object)

                text.replace(m[0], '')
            }
        } while (m);
        console.log(temp_list)
    }

    useEffect(() => {
        setTestlist(props.text)
        control_regex(props.text)
        return () => {
            setTestlist([])
        };
    }, [props]);

    return(
        <>
            {
                textlist
            }
        </>
    )
}