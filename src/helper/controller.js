import axios from "./axios"

export function getRacesIndex(){
    const bodyParam = {
        'type': 'racesindex'
    };

    return axios.get("get_races_data.php", {params:bodyParam})
        .then(response => {
            if (response.status === 200){
                return response.data;
            }
        })
        .catch(err => console.log(err));
}

export function getRacesList(){
    const bodyParam = {
        'type': 'raceslist'
    };

    return axios.get("get_races_data.php", {params:bodyParam})
        .then(response => {
            if (response.status === 200){
                return response.data;
            }
        })
        .catch(err => console.log(err));
}

export function getRaces(race_str){
    const bodyParam = {
        'type': 'races',
        'id': race_str
    };

    return axios.get("get_races_data.php", {params:bodyParam})
        .then(response => {
            if (response.status === 200){
                return response.data;
            }
        })
        .catch(err => console.log(err));
}

export function getClassesIndex(){
    const bodyParam = {
        'type': 'classesindex'
    };

    return axios.get("get_classes_data.php", {params:bodyParam})
        .then(response => {
            if (response.status === 200){
                return response.data;
            }
        })
        .catch(err => console.log(err));
}

export function getClassesList(){
    const bodyParam = {
        'type': 'classeslist'
    };

    return axios.get("get_classes_data.php", {params:bodyParam})
        .then(response => {
            if (response.status === 200){
                return response.data;
            }
        })
        .catch(err => console.log(err));
}

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
}

export function getBackgroundList(){
    const bodyParam = {
        'type': 'backgroundlist'
    };

    return axios.get("get_background_data.php", {params:bodyParam})
        .then(response => {
            if (response.status === 200){
                return response.data;
            }
        })
        .catch(err => console.log(err));
}

export function getBackground(background_str){
    const bodyParam = {
        'type': 'background',
        'id': background_str
    };

    return axios.get("get_background_data.php", {params:bodyParam})
        .then(response => {
            if (response.status === 200){
                return response.data;
            }
        })
        .catch(err => console.log(err));
}

export function getFeatList(){
    const bodyParam = {
        'type': 'featlist'
    };

    return axios.get("get_feat_data.php", {params:bodyParam})
        .then(response => {
            if (response.status === 200){
                return response.data;
            }
        })
        .catch(err => console.log(err));
}