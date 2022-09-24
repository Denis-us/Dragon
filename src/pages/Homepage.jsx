import React from 'react'
import {useGetDragonsQuery} from '../redux'
import Container from '../components/Container'
import DragonsList from '../components/DragonsList'

const Homepage = () => {

  const {data} = useGetDragonsQuery()

    return (
        <Container>
          {data && <DragonsList data={data}/>}
        </Container>
    )
}

export default Homepage