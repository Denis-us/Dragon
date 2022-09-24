import React from 'react'
import {Link} from 'react-router-dom'
import s from './DragonsList.module.css'

const DragonsList = ({data}) => {

    return (
        <ul className={s.list}>
        {data?.map(dragon => (
            <li key={dragon.id} className={s.listEl}>
                <Link to={dragon.id}>
                    <img src={dragon.flickr_images[0]} alt={dragon.id} className={s.img}/>
                </Link>
            </li>
          ))}
          </ul>
    )
}

export default DragonsList