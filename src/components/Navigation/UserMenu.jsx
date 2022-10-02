import { useSelector, useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import {Button} from '@mui/material'
import {getUserName} from '../../redux/auth/authSelectors'
import authOperations from "../../redux/auth/authOperations"
import s from './Navigation.module.css'


const UserMenu = () => {

const dispatch = useDispatch()

const name = useSelector(getUserName)
const setActive = ({ isActive }) => isActive ? 'activeLink' : 'link'
    return (
        <div className={s.userMenu}>
            <div>
                <NavLink to='/favourites' className={setActive}>
                    Favourite Daragons
                </NavLink>
            </div>
            <div className={s.user}>
                <p className={s.userText}>Добро пожаловать, {name}!</p>
                <Button variant="outlined" className={s.button} onClick={() => dispatch(authOperations.logout())}>Выйти</Button>
            </div>
        </div>
    )
}

export default UserMenu