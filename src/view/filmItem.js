import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import "../App.css";
import notFound from '../img/background_not_found.png'

import FilmService from '../service/filmService'

export default function FilmItem ({item}){
    

   const history = useHistory()

    const onClick = useCallback(() => {
            const to = `/info_film/${item.id}`
            history.push(to)
        },
        [item, history]
    )

        return (
            <div onClick={onClick} className="grid_item" style={{backgroundImage: (item.backdrop_path)?`url(${FilmService.findUrlImage(item.backdrop_path)})`: notFound}}>
                <img className="play" src="https://img.icons8.com/ios/50/000000/play--v1.png" alt="play"/>
                <p className="affiche-text">{item.name}</p>
            </div>
        )
}
