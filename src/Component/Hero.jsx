import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import image21 from '../images/image21.png';
import image19 from '../images/image19.png';
import { width } from '@mui/system';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  const handleExploreAllClick = () => {
    navigate('/protected'); // Change the path as needed
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ height: '100vh', padding: {lg:'0 20px ',},fontSize:'14px' }}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          padding: '0 15px',

        }}
      >
        <Typography
          variant='h4'
          noWrap
          href="#app-bar-with-responsive-menu"
          sx={{
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '0.4rem',
            color: 'black',
            textDecoration: 'none',
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          Hot home-made
        </Typography>
        <Typography
          variant='h4'
          noWrap
          href="#app-bar-with-responsive-menu"
          sx={{
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '0.1rem',
            color: 'black',
            textDecoration: 'none',
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          food awaits you!
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            mt: 2
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Search your favorite kitchen"
            sx={{
              width: '100%',
              maxWidth: 400,

              '& .MuiOutlinedInput-root': {
                borderRadius: '50px',
                '& fieldset': {
                  borderColor: 'rgb(214,107,64)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgb(214,107,64)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'rgb(214,107,64)',
                },
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    sx={{
                      backgroundColor: 'rgb(214,107,64)',
                      borderRadius: '50%',
                      height: '50px',
                      width: '50px',
                      '&:hover': {
                        backgroundColor: 'rgb(214,107,64)',
                      },
                    }}
                  >
                    <SearchIcon sx={{ color: 'white' }} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            sx={{
              mt: 2,
              borderRadius: '20px',
              backgroundColor: 'rgb(214,107,64)',
              color: 'white',
              padding: '10px 70px',
              '&:hover': { bgcolor: 'rgb(214,107,64)' },
            }}
            onClick={handleExploreAllClick}
          >
            Explore All
          </Button>
        </Box>
      </Grid>
      <Grid
        item
        xs={4}
        md={6}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: { xs: 'row', md: 'row' },
          mr:{xs:1,lg:0,md:1}
        }}
      >
        <img
          src={image21}
          alt="Image 21"
          sx={{
            mb: { xs: 1, md: 0 }, // Add margin-bottom for xs screens
            
          }}
          style={{width:'320px'}}
        />
        <img
          src={image19}
          alt="Image 19"
          sx={{
            height:100,
           
            ml: { md: '-30px', xs: '0' }
          }}
          style={{ width:'329px',}}
        />
      </Grid>
    </Grid>
  );
}

export default Hero;
