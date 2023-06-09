import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Box} from '@mui/material'
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import ChannelDetail from './components/ChannelDetail';
import SearchFeed from './components/SearchFeed'
import VideoDetail from './components/VideoDetail';
const App = ()=> (
    <BrowserRouter>
    <Box sx = {{backgroundColor:'#000'}}>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Feed/>}/>
        <Route path="/video/:id" exact element={<VideoDetail/>}/>
        <Route path="/channel/:id" exact element={<ChannelDetail/>}/>
        <Route path="/search/:searchTerm" exact element={<SearchFeed/>}/>
      </Routes>
    </Box>
    </BrowserRouter>
)

export default App;
