import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import homemade_banner01 from '../images/homemade_banner01.png';
import { Button } from '@mui/material';

const Img = styled('img')(({ theme }) => ({
    position: 'absolute',
    top: '70px',
    left: '-50px',
    // bottom:0,
    transform: 'translateY(-75%)',
    // maxWidth: '50%',
    // maxHeight: '100%',
    height: { lg: 280, xs: 100 },
    width: 300,
    [theme.breakpoints.down('md')]: {
        height: 200,
        width: 220,
        // left: '-60px',
        transform: 'translateY(-80%)',
    },
    [theme.breakpoints.down('sm')]: {
        height: 180,
        width: 180,
        left: '-10px',
        transform: 'translateY(-100%)',
    },
}));

export default function Help() {
    const theme = useTheme();
    return (
        <div style={{marginTop:'120px'}}>
            <Grid
                sx={{
                    position: 'relative',
                    margin: { lg: '90px 48px', xs: '60px 10px', md: '10px 50px' },
                    maxWidth: '100%',
                    maxHeight: { lg: '500px', xs: '500px' },
                    flexGrow: 1,
                    backgroundColor: 'rgba(214,103,67)', // Corrected RGBA for semi-transparent background
                    borderRadius: '24px',
                    pt: 2,
                    pb: 6,
                    pl: { xs: 2, md: 7 },
                    pr: { xs: 2, md: 6 },
                }}
            >
                <Grid container spacing={6}>
                    <Grid container item spacing={2}>
                        <Grid item xs={12} md={6}>
                            <ButtonBase>
                                <Img alt="complex" src={homemade_banner01} />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography
                                gutterBottom
                                variant="h4"
                                color="white"

                                sx={{ fontSize: { lg: 48, md: 36, xs: 24 }, textAlign: { lg: "right", xs: 'right' }, mb: { xs: -6, sm: 0 }, mt: { lg: '0px' } }} // Added mb for margin bottom adjustment
                            >
                                Try your first meal now <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>FREE!!</span>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container item spacing={2} sx={{ mt: { xs: 2, sm: 0 } }}> {/* Adjusting margin top for the Subscribe section */}
                        <Grid item xs={12}>
                            <Typography gutterBottom variant="h4" color="white" textAlign={{ xs: 'center' }} sx={{ fontSize: { lg: 36, xs: 24 } }}>
                                Subscribe to get the latest offers and meals!
                            </Typography>
                        </Grid>
                        <Grid container item spacing={1} alignItems="center">
                            <Grid item xs={12} sm={8}>
                                <TextField
                                    variant="outlined"
                                    placeholder="Enter your email address"
                                    fullWidth
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '50px',
                                            '& fieldset': {
                                                borderColor: 'white',
                                            },
                                            '&:hover fieldset': {
                                                borderColor: 'white',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: 'white',
                                            },
                                        },
                                        input: {
                                            color: 'white',
                                            '::placeholder': {
                                                color: 'white', // This sets the color of the placeholder text to white
                                                opacity: 1, // Optional: Adjust opacity if needed
                                            },
                                        },
                                    }
                                    }
                                />
                            </Grid>
                            <Grid item xs={12} sm={4} textAlign={{ lg: 'right', xs: 'left', sm: 'left' }}>
                                <Button
                                    sx={{
                                        borderRadius: '24px',
                                        backgroundColor: 'white',
                                        color: 'rgb(214,107,64)',
                                        height: '',
                                        padding: '12px 80px',
                                        '&:hover': { bgcolor: 'white', color: 'rgb(214,107,64)' },
                                        mt: { xs: 2, sm: 0 },
                                    }}
                                >
                                    Subscribe
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
