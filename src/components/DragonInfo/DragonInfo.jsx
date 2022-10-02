import React from 'react'
import s from './DragonInfo.module.css'

const DragonInfo = ({dragon}) => {

    return (
        <div className={s.descriptionBlock}>
            <p className={s.text}>{dragon.description}</p>  

            <p className={s.text}>Height: {dragon.height_w_trunk?.meters}</p>
            <p className={s.text}>Mass: {dragon.return_payload_mass?.kg}</p>
            <p className={s.text}>Year: {dragon.first_flight}</p>
            
            <a className={s.text} href={dragon.wikipedia}>{dragon.wikipedia}</a>
        </div>
        
    )
}

export default DragonInfo