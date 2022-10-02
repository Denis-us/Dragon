import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import {getFavouritesDragons} from '../redux/favourite/favouritesSelectors'
import Container from '../components/Container'
import Title from 'components/Title'
import FavouritesDragonsList from '../components/FavouritesDragonsList'
import s from './styles.module.css'


const FavouritesDragonsListPage = () => {
  const data = useSelector(getFavouritesDragons)

  const navigate = useNavigate()
  const goBack = () => navigate(-1)

    return (
        <Container>
          <button onClick={goBack} className={s.btnGoBack}>Go back</button>
          {data ? <FavouritesDragonsList data={data}/> : <Title>List of favorite dragons is empty</Title>}
        </Container>
    )
}

export default FavouritesDragonsListPage