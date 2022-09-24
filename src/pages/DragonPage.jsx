import React from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import {useGetOneDragonQuery} from '../redux'
import Container from '../components/Container'
import Title from '../components/Title'
import DragonImages from '../components/DragonImages'
import DragonInfo from '../components/DragonInfo'
import s from './styles.module.css'

const DragonPage = () => {
    const {id} = useParams()
    const {data} = useGetOneDragonQuery({id})
    const navigate = useNavigate()

    const goBack = () => navigate(-1)

    return (
        <Container>
            {data && 
                <div>
                    <button onClick={goBack} className={s.btn}>Go back</button>
                    <Title title={data.name}/>
                    <DragonImages images={data.flickr_images}/>
                    <DragonInfo dragon={data}/>
                </div>
                
            }
        </Container>
    )
}

export default DragonPage