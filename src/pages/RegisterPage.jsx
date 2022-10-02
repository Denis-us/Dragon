import React from "react";
import { useDispatch } from "react-redux"
import authOperations from '../redux/auth/authOperations'
import { useForm } from "react-hook-form"
import { Button, TextField } from '@mui/material'
import s from './styles.module.css'

const RegisterPage = () => {

  const {register, handleSubmit, formState: { errors }} = useForm()
  const dispatch = useDispatch()

    const handleAddUser = async values => {
        try {
            await dispatch(authOperations.register(values))
          }
        catch (error) {
          console.log(error)
        }
  }

    return (
      <div className={s.container}>
      <h1>Registration</h1>
      <form className={s.form} onSubmit={handleSubmit(handleAddUser)}>
          <div className={s.blockForm}>
          <TextField id="outlined-basic" label="Name" variant="outlined" type="text" className={s.textField}
              {...register("name", {
                required: true
              })}
          />
          </div>
          {errors.name?.type && <p className={s.error}>Name</p>}

          <div className={s.blockForm}>
          <TextField id="outlined-basic" label="Email" variant="outlined" type="email" className={s.textField}
              {...register("email", {
                required: true,
                pattern: /[a-z0-9]+@([a-z]+\.)+[a-z]{2,3}/
              })}
          />
          </div>
          {errors.email?.type && <p className={s.error}>Email</p>}

          <div className={s.blockForm}>
          <TextField id="outlined-basic" label="Password" variant="outlined" type="password" className={s.textField}
              {...register("password", {
                required: true,
                pattern: /^.{6,}$/
              })}
          />
          </div>
          {errors.password?.type && <p className={s.error}>Password</p>}

          <Button variant="contained" type="submit" className={s.button}>Submit</Button>
      </form>
      </div>
    )
}

export default RegisterPage