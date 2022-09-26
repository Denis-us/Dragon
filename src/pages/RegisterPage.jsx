import React, {useState} from "react";
import { useDispatch } from "react-redux"
import authOperations from '../redux/auth/authOperations'
import Form from '../components/Form'
// import {useRegisterMutation} from '../redux/authApi';

const RegisterPage = () => {
    // const [registration] = useRegisterMutation();
    // const [newUser, setNewUser] = useState({})
    // console.log(newUser)

    // const handleSubmit = async (value) => {
    //     setNewUser(value)
    //     if(newUser) {
    //         await registration(newUser)
    //     }
    // }

    const dispatch = useDispatch()

    const handleAddUser = async values => {
        try {
            await dispatch(authOperations.registration(values))
          }
        catch (error) {
          console.log(error)
        }
  }

    return (
        <>
            <Form onSubmit={handleAddUser}/>
        </>
    )
}

export default RegisterPage