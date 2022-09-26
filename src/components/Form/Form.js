import React from "react";
import { useForm } from "react-hook-form"
import { Button, TextField } from '@mui/material'
import s from './Form.module.css'

const Form = ({onSubmit}) => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
            <div className={s.blockForm}>
            <TextField id="outlined-basic" label="Email" variant="outlined" type="text" className={s.textField} {...register("name", {
                required: true,
                // pattern: /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
                })}/>
            </div>
            {errors.name?.type === 'required' && <p className={s.error}>Имя может состоять только из букв, апострофа, тире и пробелов</p>}
        

            <div className={s.blockForm}>
            <TextField id="outlined-basic" label="Password" variant="outlined" type="tel" className={s.textField} {...register("number", {
                required: true,
                // pattern: /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/
            })}/>
            </div>
            {errors.number?.type && <p className={s.error}>Номер телефона должен состоять из цифр, может содержать пробелы, тире, круглые скобки и может начинаться с +</p>}
        
            <Button variant="contained" type="submit" className={s.button}>Отправить</Button>
      </form>
    )
}

export default Form