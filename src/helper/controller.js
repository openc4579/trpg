import axios from "./axios"

export function getClasses(class_str){
    const bodyParam = {
        'type': class_str
    };

    return axios.get("get_classes_data.php", bodyParam)
        .then(response => {
            if (response.status === 200){
                if(!!response.data.content){
                    return response.data.content;
                }
                else{
                    return response.data.error;
                }
            }
        })
        .catch(err => console.log(err));

    //return result;
}