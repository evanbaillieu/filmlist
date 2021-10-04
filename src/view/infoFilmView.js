import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import filmService from '../service/filmService';

export default class InfoFilmView extends Component {

    constructor(props){
        super(props);
        console.log(props)
        this.state = {
            film: {}
        }
    }

    componentDidMount(){
        console.log(this.props)
        filmService.findById(this.props.match.params.id).then((json) =>{
            this.setState({
                film: json
            })
            console.log(json)
        })
    }
    render() {
        const {film} = this.state

        return (
            <div>
                <Link to="/list"> retour</Link>
                <h3>{film.name}</h3>
                <img src={filmService.findUrlImage(film.backdrop_path)} alt={film.name} />
                <a herf={(film.homepage)? film.homepage : "/#"} >play</a>
                <p>{film.overview}</p
                >
            </div>
        )
    }
}

