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
                    <h4>Nome do produto</h4>
                    <h4>Preço</h4>
                    <h4>Categoria</h4>
                    <h4>Marca</h4>
                    <h4>Avaliação</h4>
                    <h4>Cor</h4>
                    <h4>Ações</h4>
                </div>
            </div>
        </div>
    )
}

export default Dashboard