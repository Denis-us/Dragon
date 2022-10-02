import React, { useEffect, useState } from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {removeFavouriteDragon} from '../redux/favourite/favouritesSlice'
import {getFavouritesDragons} from '../redux/favourite/favouritesSelectors'
import Container from '../components/Container'
import FavouriteDragon from 'components/FavouriteDragon'
import s from './styles.module.css'


const FavouriteDragonPage = () => {
    const [dragon, setDragon] = useState([])
    const dispatch = useDispatch()
    const favouriteDragon = useSelector(getFavouritesDragons)
    const {id} = useParams()
    const navigate = useNavigate()

    const goBack = () => navigate(-1)

    useEffect(() => {
        setDragon(favouriteDragon.find(dragon => dragon.id === id))
    }, [favouriteDragon, id])

    const afterRemove = (id) => {
        dispatch(removeFavouriteDragon(id))
        goBack()
    }

    return (
        <Container>
            <button onClick={goBack} className={s.btnGoBack}>Go back</button>
            <button onClick={() => afterRemove(id)} className={s.btnPayload}>Remove dragon</button>
            <FavouriteDragon dragon={dragon}/>
        </Container>
    )
}

export default FavouriteDragonPage