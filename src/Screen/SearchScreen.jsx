import * as React from 'react';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/joy/Button';
import Avatar from '@mui/joy/Avatar';
import vector from '../images/TrendingUp.png'; // Import the local image
import vector1 from '../images/TrendingDown.png'; // Import the local image
import vector2 from '../images/pricetag.png'; // Import the local image
import vector3 from '../images/Star.png'; // Import the local image
import vector4 from '../images/vegetarian1.png'; // Import the local image
import vector5 from '../images/culinary1.png'; // Import the local image
import Header1 from '../Component/Header1';

// Extend the default MUI theme
const theme = extendTheme({
  typography: {
    fontFamily: 'Source Sans Pro, sans-serif',
  },
});

export default function SearchScreens() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const buttonData = [
    { labels: ['Price', 'Low-High'], imageUrl: vector },
    { labels: ['Price', 'High-Low'], imageUrl: vector1 },
    { labels: ['Offers'], imageUrl: vector2 },
    { labels: ['Ratings 4.0+'], imageUrl: vector3 }, // Example with two labels
    { labels: ['Pure Veg'], imageUrl: vector4 },
    { labels: ['Cuisine'], imageUrl: vector5 },
  ];

  const handleSearch = () => {
    // Add your search logic here
    console.log('Searching for:', searchTerm);
  };

  return (
    <>
      {/* <Header1/> */}
      <CssVarsProvider theme={theme}>
        <Box
          sx={{
            backgroundColor: 'rgb(214,107,64)',
            width: '100%',
            maxWidth: '1290px',
            height: '350px',
            // padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{ fontSize: '32px', color: 'white', fontWeight: 700, textAlign: 'center', marginBottom: '20px' }}
          >
            Find your Meal
          </Typography>
          <Box
            sx={{
              width: '100%',
              maxWidth: '560px',
              backgroundColor: 'white',
              borderRadius: '70px',
              // padding: '8px 16px',
              display: 'flex',
              alignItems: 'center',
              marginBottom: '20px',
              '&:focus-within': {
                boxShadow: '0 0 0 2px rgb(214,107,64)',
              },
            }}
          >
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search your favorite kitchen"
              
              sx={{
                flex: 1,
                border: 'none',
                outline: 'none',
                borderRadius:'100%',
                // height: {xs:'30px'},
                // width:{xs:'120px'},
                p: '20px',
                fontSize: '14px',
              }}
            />
            <IconButton
              onClick={handleSearch}
              sx={{
                backgroundColor: 'rgb(214,107,64)',
                borderRadius: '50%',
                height: {lg:'30px',xs:'20px'},
                width:{lg:'30px',xs:'20px'},
                marginLeft: {lg:'-20px',xs:'90px'},
                '&:hover': {
                  backgroundColor: 'rgb(214,107,64)',
                },
              }}
            >
              <SearchIcon sx={{ color: 'white', fontSize: '20px' }} />
            </IconButton>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', width: '100%', maxWidth: '560px' }}>
            {buttonData.map((button, index) => (
              <Button
                key={index}
                startDecorator={<Avatar src={button.imageUrl} style={{ height: 24, width: 24 }} alt={button.labels.join(', ')} />}
                sx={{
                  textTransform: 'none',
                  justifyContent: 'flex-start',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)', // default background with opacity
                  color: 'black',
                  borderRadius: 24,
                  width: 'auto',
                  minWidth: '80px',
                  transition: 'background-color 0.3s', // smooth transition for background color
                  '&:hover': {
                    backgroundColor: 'white', // white background on hover
                  },
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  {button.labels.map((label, labelIndex) => (
                    <span
                      key={labelIndex}
                      style={{ color: button.labels.length === 2 && labelIndex === 0 ? 'rgb(102,102,102)' : 'inherit', fontSize: '12px' }}
                    >
                      {label}
                    </span>
                  ))}
                </Box>
              </Button>
            ))}
          </Box>
        </Box>
      </CssVarsProvider>
    </>
  );
}
