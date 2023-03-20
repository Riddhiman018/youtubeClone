import React from 'react'
import {Box,Card,CardContent,CardMedia,Typography} from '@mui/material';

import {Link} from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';


const ChannelCard = ({channelDetail,marginTop}) => {
    console.log(channelDetail)
  return (
    <Box 
    sx={{
        boxShadow:'none',
        borderRadius:'20px',
        margin:'auto'
    }}>
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
            <CardContent sx={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                textAlign:'center',
                color:'#fff'
            }}>
                <CardMedia
                image = {channelDetail?.snippet?.thumbnails?.high?.url||demoProfilePicture}
                sx={{
                    borderRadius:'50%',
                    height:'180px',
                    width:'180px',
                    margin:'auto',
                    mb:2,
                    marginTop:`${marginTop?marginTop:'auto'}`,
                    border:'1px solid #e3e3e3',
                }}></CardMedia>
            </CardContent>
        </Link>
    </Box>
  )
}

export default ChannelCard