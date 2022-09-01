import React from 'react'
import S from './Header.module.css'
import LogoutIcon from '@mui/icons-material/Logout';

const Header = () => {
  return (
    <div className={S.container}>
      <div className={S.titulo}>
        <h2>Produtos</h2>
        <h4>Use esta página para gerenciar seus produtos de forma rápida e fácil</h4>
      </div>
      <div className={S.logo}>
        <LogoutIcon />
      </div>      
    </div>
  )
}

export default Header