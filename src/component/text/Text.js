import React, {useState, useEffect} from 'react'
import HTMLString from 'react-html-string'

export default function Text(props){
    const [htmltext, setHTMLtext] = useState('');

    function control_regex(text){
        const regex_str = /\{@(.*?)\}/g
        var mark_prefix = '@#';
        var mark_suffix = '#@';

        let m = [...text.matchAll(regex_str)]
        let temp_list = []

        if(m.length > 0){
            m.forEach(function (match_detail, key) {
                let code_list = match_detail[1].split('|');
                var type = ''
                var item = []
                var name = ''
                if(code_list.length == 3){
                    type = code_list[0]
                    item = code_list[1].split('-')
                    name = code_list[2]
                }

                let object = {'type': type, 'item': item, 'name': name}
                temp_list[key] = object

                var edited_item = mark_prefix + key + mark_suffix;
                text = text.replace(match_detail[0], edited_item);
            });

            console.log(temp_list)
        }

        if(temp_list.length > 0){
            temp_list.forEach(function(obj, key){
                var type = obj.type
                var item = obj.item
                var name = obj.name

                var str = ''

                switch(type){
                    case 'link':
                        str += '<a className="link link-primary" target="_blank" href="'+item.join('/')+'">'
                        str += name
                        str += '</a>'
                        break
                    default:
                        str += name
                }
                var edited_item = mark_prefix + key + mark_suffix;
                text = text.replace(edited_item, str);
            })
        }

        setHTMLtext(text)
    }

    useEffect(() => {
        control_regex(props.text)
        return () => {
            setHTMLtext([])
        };
    }, [props]);

    return(
        <HTMLString html={htmltext} />
    )
}