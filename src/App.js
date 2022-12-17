import React from 'react' ;
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components';

const App = () => {

  <Router>
    <Box sx={{ backgroundColor : '#000'}}>
      <Navbar />
      <h1>Hi</h1>
      <Routes>
       
        <Route  path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />}/>
        <Route path="/channel/:id" element={<ChannelDetail/> } />
        <Route path="/search/:searchTerm" element={<SearchFeed/>} />

      </Routes>
    </Box>

  </Router>

}

export default App;