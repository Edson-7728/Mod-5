import { Button } from '@mui/material'
import React from 'react'
import Form from '../../Components/Form/Form'
import Header from '../../Components/Header/Header'
import S from './Dashboard.module.css'

const Dashboard = () => {
    return (
        <div>
            <Header />
            <Button
                variant="contained"
                color='warning'
                onClick={() => console.log('To funcionando')}
            >Novo Produto</Button>
            <div className={S.container}>
                <Form />
                <div className={S.titulos}>
                    <label>Nome do produto</label>
                    <label>Preço</label>
                    <label>Categoria</label>
                    <label>Marca</label>
                    <label>Avaliação</label>
                    <label>Cor</label>
                    <label>Ações</label>
                </div>
            </div>
        </div>
    )
}

export default Dashboard