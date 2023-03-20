import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Paper,IconButton} from '@mui/material'
import {Search} from '@mui/icons-material'

const SearchBar = () => {
  const [searchTerm,setSearchTerm] = useState('');
  const nav = useNavigate();
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(searchTerm){
      nav(`/search/${searchTerm}`)
      setSearchTerm('')
    }
  }
  return (
    <Paper component='form' onSubmit={handleSubmit} sx={{
        borderRadius:20,
        border:'1px solid #e3e3e3',
        pl:2,
        display:'flex',
        flexDirection:'row'
    }}><div style={{
      marginTop:'10px'
    }}><input className='search-bar' placeholder='Search'
    value={searchTerm}
    onChange={(e)=>
      setSearchTerm(e.target.value)}/>
    </div>
      <Search sx={{
      padding:'10px'
    }}/></Paper>
  )
  }
export default SearchBar