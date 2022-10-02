import React from 'react'
import Container from '../Container'
import Title from '../Title'
import DragonImages from '../DragonImages'
import DragonInfo from '../DragonInfo'

const FavouriteDragon = ({dragon}) => {


    return (
        <Container>
            <Title>{dragon.name}</Title>
            <DragonImages images={dragon.img?.flickr_images}/>
            <DragonInfo dragon={dragon}/>
        </Container>
    )
}

export default FavouriteDragon