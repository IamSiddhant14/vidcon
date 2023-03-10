import React,  { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Videos, Sidebar } from "./";

import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = () => {
  const[ videos , setVideos] = useState([]);
  const [ selectedCategory , setSelectedCategory] = useState("New");

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "coloum", md: "row" } }}>
      <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid white', px: { sx: 0, md: 2 } }}>

      <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Typography className='copyright' varient="body2" sx={{ mt: 1.5, color: '#fff' }}> Ⓒ Siddhant </Typography>

      </Box>
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>

        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
         Showing {selectedCategory} <span style={{ color: '#FC1503' }}>Videos</span>
        </Typography>

        <Videos videos={videos} />

      </Box>
    </Stack>
  )
}

export default Feed;