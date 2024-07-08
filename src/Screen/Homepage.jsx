import React from 'react';
import Hero from '../Component/Hero.jsx';
import Cuisine from '../Component/Cuisine.jsx';
import KitchenNearby from '../Component/KitcherNearby.jsx';
import CustomIcons from '../Component/Pagination.jsx';
import Help from '../Component/Help.jsx';
import ImgMediaCard from '../Component/PopularKitchen.jsx'
import { Box, Grid } from '@mui/material';

const Homepage = () => {
    return (
        <>
            <Grid id='first' sx={{ mt: { lg: '20px', xs: '120px' } }}><Hero /></Grid>
            <div id="cuisine" style={{ marginTop: '100px' }}><Cuisine /></div>
            <Box id='kit' sx={{ mt: '10px' }}><KitchenNearby /></Box>
            <Box id='club' sx={{ mt: '20px'}}><CustomIcons /></Box>
            <Box id='pop' sx={{ mt: { lg: '20px', xs: '100px' },mb:'0px' }}><ImgMediaCard /></Box>
            <Box id='join' sx={{ mt: { lg: '100px', xs: '100px' } }}><Help /></Box>
            
        </>
    );
};

export default Homepage;
