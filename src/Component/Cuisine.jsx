import * as React from 'react';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import Food1 from '../images/Food1';
import Food2 from '../images/image22.png';
import Food3 from '../images/delivery01.png';
import Food4 from '../images/image23.png';
import Vector from '../images/Vector.png';

const theme = extendTheme({
  typography: {
    fontFamily: 'Source Sans Pro, sans-serif',
  },
});

export default function Cuisine() {
  return (
    <CssVarsProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: 'rgb(214,107,64)',
          padding: {lg:'40px 63px 90px 68px',xs:'0px',md:'80px',},//padding: 20px 20px 20px 20px; /* top right bottom left */
          paddingBottom: '80px',
          width: '100%',
          maxWidth: {lg:'1130px'},
          height: 'auto',
          margin: '0px auto',
        }}
      >
        <Typography
          textAlign="center"
          sx={{
            mt: '30px',
            mb: '60px',
            fontSize: '40px',
            color: 'white',
            fontWeight: 600,
          }}
        >
          Why Choose Us?
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <Card
            sx={{
              width: { xs: '90%', sm: '300px' },
              height: '300px',
              borderRadius: '20px',
              marginBottom: { xs: '50px', md: '0' },
            }}
          >
            <CardContent >
              <Typography
                level="h2"
                sx={{ fontSize: 24 }}
                color="black"
                gutterBottom
                textAlign={{lg:'left', xs: 'center'}}
              >
                Hygienic Meals
              </Typography>
              <Typography
                level="body2"
                sx={{ marginTop: '-10px' }}
                color="text.secondary"
                textAlign={{lg:'left',xs:'center'}}
              >
                Safe & fresh cooked food for you!
              </Typography>
            </CardContent>
            <CardActions sx={{ position: 'absolute' }} >
              <Typography sx={{ marginLeft: {lg:-10,xs:0}, marginTop: '30px' }}><Food1  /></Typography>
            </CardActions>
          </Card>

          <Card
            sx={{
              width: { xs: '90%', sm: '300px' },
              height: '300px',
              borderRadius: '20px',
              marginBottom: { xs: '50px', md: '0' },
            }}
            
          >
            <CardContent>
              <Typography
                level="h2"
                sx={{ fontSize: 24 }}
                color="black"
                gutterBottom
                textAlign={{lg:'left', xs: 'center'}}
              >
                Popular Cuisines
              </Typography>
              <Typography
                level="body2"
                sx={{ marginTop: '-10px' }}
                color="text.secondary"
                textAlign={{lg:'left', xs: 'center'}}
              >
                Your meals from a variety of options daily!
              </Typography>
            </CardContent>
            <CardActions  sx={{ marginLeft: {lg:'-2px',xs:10} }}>
              <img src={Vector} style={{ marginTop: -350 }} />
            </CardActions>
            <CardActions sx={{ position: 'absolute'}}>
              <Typography sx={{ marginLeft:{lg:-2,xs:10}}}><img
                src={Food2}
                style={{
                  marginTop: 160,
                  width: '400px',
                  maxWidth: '100%',
                }}
              /></Typography>
            </CardActions>
          </Card>

          <Card
            sx={{
              width: { xs: '90%', sm: '300px' },
              height: '300px',
              borderRadius: '20px',
              mb: { xs: '90px', md: '0' },
            }}
            // textAlign={{ xs: 'center'}}
          >
            <CardContent>
              <Typography
                level="h2"
                sx={{ fontSize: 24 }}
                color="black"
                gutterBottom
                textAlign={{ xs: 'center'}}
              >
                Timely Delivery
              </Typography>
              <Typography
                level="body2"
                sx={{ marginTop: '-10px' }}
                color="text.secondary"
                textAlign={{ xs: 'center'}}
              >
                Get homely food quickly from nearby!
              </Typography>
            </CardContent>
            <CardActions >
              <Typography sx={{marginLeft:{lg:'0',xs:'50px'},mt:-20}}><img src={Food4} style={{ marginTop: '-300px',}} /></Typography>
              
            </CardActions>
            <CardActions sx={{ position: 'absolute' }}>
              <Typography sx={{marginLeft:{lg:'0',xs:'100px'}}}><img
                src={Food3}
                style={{
                  marginLeft: '90px',
                  marginTop: '90px',
                }}
              /></Typography>
            </CardActions>
          </Card>
        </Box>
      </Box>
    </CssVarsProvider>
  );
}
