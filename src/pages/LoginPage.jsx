import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { Button, TextField } from '@mui/material';
import authOperations from '../redux/auth/authOperations'
import s from './styles.module.css'

const LoginPage = () => {
  const {register, handleSubmit, formState: { errors }} = useForm()
  const dispatch = useDispatch()
    
  const handleLoginUser = async values => {
        try {
            await dispatch(authOperations.login(values))
          }
        catch (error) {
          console.log(error)
        }
  }

  return (
      <div className={s.container}>
      <h1 className={s.header}>Login</h1>
      <form className={s.form} onSubmit={handleSubmit(handleLoginUser)}>
          <div className={s.blockForm}>
          <TextField id="outlined-basic" label="Email" variant="outlined" type="email" className={s.textField}
          {...register("email", {
            required: true,
            pattern: /[a-z0-9]+@([a-z]+\.)+[a-z]{2,3}/
          })}/>
          </div>
          {errors.email?.type && <p className={s.error}>Enter email</p>}

          <div className={s.blockForm}>
          <TextField id="outlined-basic" label="Password" variant="outlined" type="password" className={s.textField}
          {...register("password", {
            required: true,
            pattern: /^.{6,}$/
          })}/>
          </div>
          {errors.password?.type && <p className={s.error}>Enter password</p>}

          <Button variant="contained" type="submit" className={s.button}>Submit</Button>
      </form>
      </div>
  )
}

export default LoginPage