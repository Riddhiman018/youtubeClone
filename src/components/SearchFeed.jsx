import React from 'react'
import {useState,useEffect} from 'react';
import {Box,Stack,Typography} from '@mui/material';
import Sidebar from './Sidebar';
import Videos from './Videos';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';


const SearchFeed = () => {

const {searchTerm} = useParams();
console.log(searchTerm)
const [videos,setVideos] = useState([]);
useEffect(()=>{
  fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data)=>{
    setVideos(data.items);
  })
},[searchTerm])  //runs only on reloading page
return  (
    <Stack sx={{flexDirection:{sx:"column",md:"row"}}}>
      <Box p={2} sx={{
        overflowY:'auto',
        flex:2,
        height:'90vh'
      }}>
        <Typography variant='h4' fontWeight="bold" mb={2} sx={{
          color:'white'
        }}>Results for {searchTerm} <span style={{
            color:'#F31503'
          }}>Videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}


export default SearchFeed