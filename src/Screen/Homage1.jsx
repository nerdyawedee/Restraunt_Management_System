import React from 'react'
import SearchScreens from './SearchScreen'
import PopularCuisine1 from '../Component/PopularCuisine1'
import { Grid, Box } from '@mui/material'
import ImgMediaCard1 from '../Component/PopularKitchen1'
import Daily from '../Component/Dailymeal'
import Header1 from '../Component/Header1'
function Homage1() {
  return (
    <div>
      <Box><Header1/></Box>
      <Grid id='first' sx={{ mt: { lg: '150px', xs: '120px' } }}><SearchScreens /></Grid>
      <Grid id='first' sx={{ mt: { lg: '50px', xs: '100px' } }}><ImgMediaCard1 /></Grid>
      <Box sx={{ marginTop: { lg: '180px', xs: '100px' }, marginBottom: '10px' }}><PopularCuisine1 /></Box>
      <Box sx={{ marginTop: { lg: '140px', xs: '40px' }, marginBottom: '50px', }}><Daily /></Box>
    </div>
  )
}

export default Homage1
