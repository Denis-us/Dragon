import React, { useEffect, useState } from 'react'
import {useParams, useNavigate, Link} from 'react-router-dom'
import {useGetOneDragonQuery, addFavouriteDragon} from '../redux'
import { useDispatch, useSelector } from 'react-redux'
import { getFavouritesDragons } from '../redux/favourite/favouritesSelectors'
import Container from '../components/Container'
import Title from '../components/Title'
import DragonImages from '../components/DragonImages'
import DragonInfo from '../components/DragonInfo'
import s from './styles.module.css'

const DragonPage = () => {
    const dispatch = useDispatch()
    const favouritesDragons = useSelector(getFavouritesDragons)
    const {id} = useParams()
    const {data} = useGetOneDragonQuery({id})
    const navigate = useNavigate()

    const [dragons, setDragons] = useState(false)

    const goBack = () => navigate(-1)

    useEffect(() => {
        if(favouritesDragons.find(fav => fav.id === id)) {
            setDragons(true)
        }
    }, [favouritesDragons, id])

    const favourite = data => {
        const dragon = {
                id,
                name: data.name,
                img: {
                    flickr_images: data.flickr_images
                },
                description: data.description,
                wikipedia: data.wikipedia,
                height_w_trunk: {meters: data.height_w_trunk.meters},
                return_payload_mass: {kg: data.return_payload_mass.kg},
                first_flight: data.first_flight
        }
        dispatch(addFavouriteDragon(dragon))      
    }

    return (
        <Container>
            {data && 
                <div>
                    <button onClick={goBack} className={s.btnGoBack}>Go back</button>

                    {dragons ?
                    <Link to='/favourites' className={s.favouritesBtn}>Favourites</Link> :
                    <button onClick={() => favourite(data)} className={s.btnPayload}>Add to Favourites</button>}

                    <Title>{data.name}</Title>
                    <DragonImages images={data.flickr_images}/>
                    <DragonInfo dragon={data}/>
                </div>
                
            }
        </Container>
    )
}

export default DragonPage