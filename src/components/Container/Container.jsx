import React from 'react'
import s from './Container.module.css'

const Container = ({children}) => {

    return (
        <section className={s.container}>
            {children}
        </section>
    )
}

export default Container