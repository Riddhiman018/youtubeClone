import React from 'react'
import {Link} from 'react-router-dom';
import {Typography,Box,Paper,Stack,Card,CardContent,CardMedia} from '@mui/material';

import { demoThumbnailUrl } from '../utils/constants';
import { demoVideoTitle } from '../utils/constants';
import { demoChannelTitle } from '../utils/constants';
import { demoChannelUrl } from '../utils/constants';
import { demoVideoUrl } from '../utils/constants';

import CheckCircleIcon from '@mui/icons-material'

const VideoCard = ({video,md}) => {
    const {id,snippet} = video;
  return (
    <Card sx={{
        width:{
            md:`${md?md:'320px'}`,
            xs:'100%'
        }
    }}>
        <Link to={video?.id?.videoId?`/video/${video?.id?.videoId}`:demoVideoUrl}>
        <CardMedia
        image={snippet?.thumbnails?.high?.url}
        sx={{
            width:368,
            height:180
        }}
        />
        <CardContent sx={
            {
                backgroundColor:'#1e1e1e',
                height:'160'
            }
        }>
            <Link to={video?.id?.videoId?`/video/${video?.id?.videoId}`:demoVideoUrl}>
        <Typography sx={{
            color:'#FFF',
            fontWeight:'bold',
            variant:'subtitle1'
        }}>{snippet?.title.slice(0,40)}</Typography>    
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
        <Typography sx={{
            color:'gray',
            fontWeight:'bold',
            variant:'subtitle2'
        }}>{snippet?.channelTitle.slice(0,40)}</Typography>    
            </Link>
        </CardContent>
        </Link>
    </Card>
  )
}

export default VideoCard