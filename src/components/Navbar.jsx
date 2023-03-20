import React from 'react'
import {Stack,Typography} from '@mui/material'
import {Link} from 'react-router-dom'
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'

const navbar = () => 
   (
    <Stack direction="row" p={2} justifyContent="center" sx={{position:'sticky',background:'#000', top:0,justifyContent:'space-between'}}>
      <Link to='/' style={{display:'flex',alignItems:'center'}}>
      <img src={logo} alt='logo' height={45}/><Typography variant='h6' sx={{color:'#fff',ml:'10px'}}>RiddhiTube</Typography>
      </Link>
      <SearchBar/>
    </Stack>
  )


export default navbar