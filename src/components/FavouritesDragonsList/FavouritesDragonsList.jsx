import Title from 'components/Title'
import React from 'react'
import {Link} from 'react-router-dom'
import s from './FavouritesDragonsList.module.css'

const FavouritesDragonsList = ({data}) => {

    return (
        <>
            <Title>Favourites dragons</Title>
            <ul className={s.list}>
            {data?.map(dragon => (
                <li key={dragon.id} className={s.listEl}>
                    <Link to={dragon.id}>
                        <img src={dragon.img.flickr_images[0]} alt={dragon.id} className={s.img}/>
                    </Link>
                </li>
            ))}
            </ul>
        </>
        
    )
}

export default FavouritesDragonsList