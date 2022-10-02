import { NavLink } from "react-router-dom"
import s from './Navigation.module.css'

const setActive = ({ isActive }) => isActive ? 'activeLink' : 'link'

const AuthNav = () => {
    return (
            <ul className={s.authNav}>
                <NavLink to="/register"
                className={setActive}>
                    Registration
                </NavLink>

                <NavLink to="/login"
                className={setActive}>
                    Log in
                </NavLink>
            </ul>
    )
}

export default AuthNav