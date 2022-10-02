import React from 'react'
import {useGetDragonsQuery} from '../redux'
import Container from '../components/Container'
import Title from 'components/Title'
import DragonsList from '../components/DragonsList'

const Homepage = () => {

  const {data} = useGetDragonsQuery()

    return (
        <Container>
          {data ? <DragonsList data={data}/> : <Title>Dragons was not found</Title>}
        </Container>
    )
}

export default Homepage