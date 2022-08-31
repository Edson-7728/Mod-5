import { Button } from '@mui/material'
import React from 'react'
import Form from '../../Components/Form/Form'
import Header from '../../Components/Header/Header'

const Dashboard = () => {
    return (
        <div>
            <Header/>
            <Button
            variant="contained"
            color='warning'
            onClick={() => console.log('To funcionando') }
            >Novo Produto</Button>
            <div>
                <Form/>
            </div>
        </div>
    )
}

export default Dashboard