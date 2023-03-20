import React from 'react';
import {useState,useEffect} from 'react';
import {Link,useParams} from 'react-router-dom';
import ReactPlayer from 'react-player'
import {Typography,Box,Stack} from '@mui/material';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { CheckCircle } from '@mui/icons-material';
import Videos from './Videos';

const VideoDetail = ({video}) => {
  // console.log('Hello)
  const {id} = useParams();
  const [VideoDetail,setVideoDetail] = useState(null);
  const [videos,setVideos] = useState([])
  useEffect(()=>{
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  },[id])
  return (
    <Box sx={{
      minHeight:'95vh'
    }}>
      <Stack direction = {{
        xs:'column',
        md:'row'
      }}>
        <Box flex={1} sx={{width:'100%'}}>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls className = 'react-player'/>
          <Typography sx={{
            color:'white',
            mt:3,

          }}>
            {VideoDetail?.snippet.title}
            <Stack direction="row" justifyContent="space-between">
              <Link to={`/channel/${VideoDetail?.snippet?.channelId}`}>
              <Typography sx={{color:'#fff'}}>
              {VideoDetail?.snippet?.channelTitle}
              <CheckCircle sx={{fontSize:'12px', color:'gray',ml:'10px'}}></CheckCircle>
              </Typography>
              </Link>
            </Stack>
          </Typography>
        </Box>
        <Box sx={{px:2,py:1,maxWidth:'400px'}}>
          <Videos videos={videos}></Videos>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail