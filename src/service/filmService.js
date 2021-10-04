import {config} from "../config/config.api.js"

class FilmService{
    find = () => {
        console.log(`${config.url}?api_key=${config.api_key}&language=${config.language}&page=${config.page}&timezone=${config.timezone}&include_null_first_air_dates=${config.include_null_first_air_dates}`)
        return fetch(`${config.url}?api_key=${config.api_key}&language=${config.language}&page=${config.page}&timezone=${config.timezone}&include_null_first_air_dates=${config.include_null_first_air_dates}`)
        .then(response => {
            return response.json()
        })
    }

    findUrlImage(backroud_path){
        return `${config.url_image}${backroud_path}` ;
    }

    findByPage({ pageParam = 1 }){
        return fetch(`${config.url}?api_key=${config.api_key}&language=${config.language}&page=${pageParam}&timezone=${config.timezone}&include_null_first_air_dates=${config.include_null_first_air_dates}`)
        .then(response => {
            return response.json()
        })
    }
    findById(id){
        return fetch(`${config.url_id}${id}?api_key=${config.api_key}&language=${config.language}&timezone=${config.timezone}`).then((response) =>{
            return response.json();
        })
    }
}

export default new FilmService();