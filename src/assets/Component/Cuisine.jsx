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
import Vector from '../images/Vector.png'
const theme = extendTheme({
  typography: {
    fontFamily: 'Source Sans Pro, sans-serif',
  },
});

export default function BasicCard() {
  return (
    <CssVarsProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: 'rgb(214,107,64)',
          padding: '10px',
          paddingBottom: '10px',
          width: '1259px',
          height: '500px',
        }}
      >
        <Typography
          textAlign='center'
          sx={{ marginTop: '0px', marginBottom: '20px', fontSize: '40px',color:'white',fontWeight:600 }}
        >
          Why Choose Us?
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Card sx={{ width: 300, height: 300, borderRadius: '20px' }}>
            <CardContent>
              <Typography level="h2" sx={{ fontSize: 24 }} color="black" gutterBottom>
                Hygienic Meals
              </Typography>
              <Typography level="body2" sx={{ marginTop: '-10px' }} color="text.secondary">
                Safe & fresh cooked food for you!
              </Typography>
            </CardContent>
            <CardActions sx={{ position: 'absolute' }}>
              <Food1 style={{ marginLeft: -60, marginTop: '30px' }} />
            </CardActions>
          </Card>

          <Card sx={{ width: 300, height: 300, borderRadius: '20px' }}>
            <CardContent>
              <Typography level="h2" sx={{ fontSize: 24 }} color="black" gutterBottom>
                Popular Cuisines
              </Typography>
              <Typography level="body2" sx={{ marginTop: '-10px' }} color="text.secondary">
                Your meals from a variety of options daily!
              </Typography>
            </CardContent>
            <CardActions>
              <img src={Vector} style={{ marginTop:-350 }} />
            </CardActions>
            <CardActions sx={{ position: 'absolute' }}>
              <img src={Food2} style={{ marginLeft: -25, marginTop: 147, width: '400px' }} />
            </CardActions>
          </Card>

          <Card sx={{ width: 300,height:300, borderRadius: '20px', }}>
            <CardContent>
              <Typography level="h2" sx={{ fontSize: 24 }} color="black" gutterBottom>
                Timely Delivery
              </Typography>
              <Typography level="body2" sx={{ marginTop: '-10px' }} color="text.secondary">
                Get homely food quickly from nearby!
              </Typography>
            </CardContent>
            <CardActions>
              <img src={Food4} style={{ marginTop:'-300px' }} />
            </CardActions>
            <CardActions sx={{ position: 'absolute' }}>
              <img src={Food3} style={{ marginLeft: '90px',marginTop:'90px' }} />
            </CardActions>
            
          </Card>
        </Box>
      </Box>
    </CssVarsProvider>
  );
}
