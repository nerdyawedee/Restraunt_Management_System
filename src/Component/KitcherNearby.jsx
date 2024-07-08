import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import image24 from '../images/image24.png'
import Location from '../images/LocationMarker.png';
import CreditCard from '../images/CreditCard.png';
import Vector4 from '../images/Vector4.png'
import {Link as ScrollLink } from 'react-scroll';
const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function KitcherNearby() {
    
    return (
        <Grid
            sx={{
                // p: 2,
                margin: 'auto',
                maxWidth: '100%',
                flexGrow: 1,
                pt: 2,
                pb: 6,
                pl: 6,
                pr: 6,
                mb:'20px'
            }}
        >
            <Grid style={{marginBottom:'20px'}}>
                <h1 style={{ color: 'black' }}>Discover kitchens nearby!</h1>
            </Grid>
            <Grid container  spacing={2}>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={3}>
                        <Grid item xs>
                            <Typography gutterBottom variant="body1" color="text.secondary" component="div">
                                <div style={{ display: 'flex', }} spacing={2}>
                                    <div gutterBottom variant="body1" style={{ marginRight: '25px' }}><Img alt="complex" src={Location} /> </div>
                                    <Typography gutterBottom variant="h4">Search tiffin providers with map-based instant search feature</Typography>
                                </div>
                            </Typography>
                            <Typography gutterBottom variant="body1" color="text.secondary" marginTop="30px" component="div">
                                <div style={{ display: 'flex' }}>
                                    <div style={{ marginRight: '25px' }}><Img alt="complex" src={Vector4} /> </div>
                                    <Typography gutterBottom variant="h4" >Find popular, affordable and hygienic kitchens instantly!</Typography>
                                </div>
                            </Typography>
                            <Typography gutterBottom variant="body1" color="text.secondary" marginTop="30px" component="div">
                                <div style={{ display: 'flex' }}>
                                    <div style={{ marginRight: '15px' }}><Img alt="complex" src={CreditCard} /> </div>
                                    <Typography gutterBottom variant="h4">Quick order or subscribe to your favorite meals</Typography>
                                </div>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                <ScrollLink
                                    to="pop"
                                    smooth={true}
                                    duration={500}
                                    offset={-90}
                                    // style={{textDecoration:'none',color:'black'}}
                                >
                                <Button
                                    sx={{
                                        mt: 2,
                                        borderRadius: '24px',
                                        backgroundColor: 'rgb(214,107,64)',
                                        color: 'white',
                                        padding: '10px 30px',
                                        '&:hover': { bgcolor: 'rgb(214,107,64)' },
                                    }}
                                    
                                >
                                    Find Your Meal
                                </Button>
                                </ScrollLink>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <ButtonBase sx={{ width: 448, height: 400 }}>
                        <Img alt="complex" style={{ width: '648px', height: '648px' }} src={image24} />
                    </ButtonBase>
                </Grid>
            </Grid>
        </Grid>
    );
}
