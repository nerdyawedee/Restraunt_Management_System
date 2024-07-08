import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import image21 from '../images/image21.png';
import image19 from '../images/image19.png';
// import ProtectHeader from './ProtectHeader.jsx'
function Hero() {
  const navigate = useNavigate();

  const handleExploreAllClick = () => {
    navigate('/screensearch'); // Navigate to the ScreenSearch component
  };
  return (
    <>
    
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',marginLeft:-100 }}>
      <div style={{  padding: '0 80px',width:'70vh' }}>
        <div><Typography variant='h4'
          noWrap
          href="#app-bar-with-responsive-menu"
          sx={{
            fontFamily: 'monospace',
            fontWeight:'bolder',
            letterSpacing: '0.4rem',
            color: 'black',
            textDecoration: 'none',
          }}
        >
          Hot home-made 
        </Typography></div>
        <div ><Typography variant='h4'
          noWrap
          href="#app-bar-with-responsive-menu"
          sx={{
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '0.1rem',
            color: 'black',
            textDecoration: 'none',
          }}
        >
           food awaits you!
        </Typography></div>
        
        <div style={{ margin: '20px 0' }}>
          <TextField
            variant="outlined"
            placeholder="Search your faviorite kitchen"
            sx={{
              borderRadius: '70px',
              width: '100%',
              '& .MuiOutlinedInput-root': {
                borderRadius: '70px',
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
        </div>
        <div style={{ marginBottom: '20px' }}>
          <Button
            // variant="contained"
            sx={{
              borderRadius: '20px',
              backgroundColor: 'rgb(214,107,64)',
              color: 'white',
              padding:'10px 70px',
              '&:hover': { bgcolor: 'rgb(214,107,64)' },
            }}
            onClick={handleExploreAllClick}
          >
            Explore All
          </Button>
        </div>
      </div>
      <div style={{ marginLeft: '10px', display: 'flex',justifyContent:'center',alignItems:'center' }}>
        <div>
          <img src={image21} alt="Image 21" style={{ height: 170 }} />
          
        </div>
        <div style={{ marginLeft: '-30px'}}>
          <img src={image19} alt="Image 19" style={{ height: 320 }} />
        </div>
      </div>
    </div>
    </>
  );
}

export default Hero;
