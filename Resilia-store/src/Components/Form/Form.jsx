import React from 'react'
import TextField from '@mui/material/TextField'
import S from './Form.module.css'

const Form = () => {
  return (
    <div className={S.container}>
        <fieldset>
        <TextField className={S.campoTxt} id="outlined-basic" label="Nome Cliente" variant="outlined" />
        </fieldset>
    </div>
  )
}

export default Form