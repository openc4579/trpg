import axios from "./axios"

export function getClasses(class_str){
    const bodyParam = {
        'type': 'classes',
        'id': class_str
    };

    return axios.get("get_classes_data.php", {params:bodyParam})
        .then(response => {
            if (response.status === 200){
                return response.data;
            }
        })
        .catch(err => console.log(err));

    //return result;
}