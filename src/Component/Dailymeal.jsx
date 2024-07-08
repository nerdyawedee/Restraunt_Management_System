import * as React from 'react';
import { IconButton, Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import prev from '../images/prevBtn1.png';
import next from '../images/nextBtn1.png';
import card1Image from '../images/Rectangle0.png';
import card2Image from '../images/Rectangle0.png';
import card3Image from '../images/Rectangle0.png';
import { Grid } from '@mui/material';
import Location4 from '../images/Location4.png';
import Arrow2 from '../images/Arrow2.png';
import Calender from '../images/Calendar.png';

const cardData = [
    { id: 1, img: card1Image, title: ["Vendy’s Kitchen", "Aunt Delys,Yarmouth, NS"], routine: 'Daily',meal:'Roti-Sabzi',price:['Price','$200'] },
    { id: 2, img: card2Image, title: ["Vendy’s Kitchen", "Aunt Delys,Yarmouth, NS"], routine: 'Weekend',meal:'Chicken-Biriyani',price:['Price','$500'] },
    { id: 3, img: card3Image, title: ["Vendy’s Kitchen", "Aunt Delys,Yarmouth, NS"], routine: 'Some-Day',meal:'Burger',price:['Price','$400'] },
    { id: 4, img: card1Image, title: ["Vendy’s Kitchen", "Aunt Delys,Yarmouth, NS"], routine: 'Daily',meal:'Khichdi',price:['Price','$150'] },
    { id: 5, img: card2Image, title: ["Vendy’s Kitchen", "Aunt Delys,Yarmouth, NS"], routine: 'Weekend',meal:'Aanda Chawal',price:['Price','$280'] },
    { id: 6, img: card3Image, title: ["Vendy’s Kitchen", "Aunt Delys,Yarmouth, NS"], routine: 'Some-Day',meal:'Chowmein',price:['Price','$100'] },
    // Add more cards with their respective images and titles
];

export default function Daily() {
    const [startIndex, setStartIndex] = React.useState(0);
    const [activeButton, setActiveButton] = React.useState('next');

    const theme = useTheme();
    const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const cardsPerPage = isMediumScreen || isSmallScreen ? 1 : 3;

    const handlePrev = () => {
        setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        setActiveButton('prev');
    };

    const handleNext = () => {
        setStartIndex((prevIndex) => Math.min(prevIndex + 1, cardData.length - cardsPerPage));
        setActiveButton('next');
    };

    const currentCards = cardData.slice(startIndex, (startIndex + cardsPerPage));

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            //   backgroundColor: 'rgb(214,107,64)',
            paddingBottom: { lg: '40px', xs: '40px', md: '40px' },
            borderRadius: '36px',
            width: { lg: '100%', md: '100%', xs: '100%' },
            maxWidth: '1130px',
            height: '320px',
            margin: { lg: '0 auto', xs: '0 auto', md: '0 auto' },
            pt: { lg: '10px', xs: '0px', md: '10px' },
        }}>
            <Box sx={{  pl: {lg:'20px'}, pr: {lg:'20px'} }}>
                <Typography sx={{ color: 'black', mb: '30px', fontWeight: 'bold', fontSize: { lg: 54, xs: 34 },textAlign:{lg:'left',xs:'center'} }}>Daily Hot Meals</Typography>
                <Box sx={{ display: 'flex', }}>
                    <IconButton onClick={handlePrev} disabled={startIndex === 0}>
                        <img src={prev} style={{
                            width: isSmallScreen ? '20px' : isMediumScreen ? '30px' : '50px',
                            height: isSmallScreen ? '20px' : isMediumScreen ? '30px' : '50px'
                        }} alt="prev" />
                    </IconButton>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '20px', position: 'relative' }}>
                        {currentCards.map((card) => (
                            <Box key={card.id} sx={{ position: 'relative', overflow: 'hidden', borderRadius: '15px' }}>
                                <img
                                    src={card.img}
                                    alt={`Card ${card.id}`}
                                    style={{ width: '100%', height: '100%' }}
                                />

                                {/* ............ */}
                                <Grid container sx={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'column' }}>
                                    <Grid item xs={-1}>
                                        <Typography sx={{
                                            position: 'absolute',
                                            bottom: { lg: 180, md: 150, xs: 150 },
                                            left: {lg:30,xs:20},
                                            // boxShadow:'white',
                                            fontWeight:700
                                        }}>{card.meal}</Typography>
                                        {/* <Typography sx={{
                                            position: 'absolute',
                                            bottom: { lg: 150, md: 50, xs: 40 },
                                            left: 30,
                                            fontSize:20 
                                        }}>{card.price}</Typography> */}
                                    </Grid>
                                    <Grid item>
                                        <Typography sx={{
                                            position: 'absolute',
                                            bottom: { lg: 180, md: 150, xs: 150 },
                                            left: {lg:240,xs:180},
                                            fontSize: { lg: '14px', md: '14px', xs: '14px' },
                                        }}>
                                            {card.price[0]}</Typography>
                                        <Typography sx={{
                                            position: 'absolute',
                                            bottom: { lg: 150, md: 50, xs: 130 },
                                            left: {lg:240,xs:180},
                                            fontSize: { lg: '20px', md: '14px', xs: '14px' },
                                            fontWeight:700
                                        }}>
                                            {card.price[1]}</Typography>
                                    </Grid>
                                </Grid>
                                {/* ............ */}

                                <div>
                                    <Typography sx={{
                                        position: 'absolute',
                                        bottom: { lg: 100, md: 50, xs: 80 },
                                        left: {lg:30,xs:20},

                                    }}><img src={Calender} style={{
                                        height: '25px',
                                        // width: '10px',
                                    }} alt='12...' /></Typography>

                                    <Typography sx={{
                                        position: 'absolute',
                                        bottom: { lg: 105, md: 50, xs: 87 },
                                        left:{lg:60,xs:50},

                                    }}>{card.routine}</Typography>
                                </div>
                                <Grid container spacing={0} sx={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'column' }}>
                                    <Grid item xs={-1}>
                                        <Typography sx={{
                                            position: 'absolute',
                                            bottom: { lg: 30, md: 50, xs: 27 },
                                            left: {lg:30,xs:20},

                                        }}><img src={Location4} style={{
                                            height: '25px',
                                            // width: '10px',
                                        }} alt='12...' /></Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography sx={{
                                            position: 'absolute',
                                            bottom: { lg: 46, md: 50, xs: 40 },
                                            left: {lg:57,xs:40},
                                            fontSize: { lg: '20px', md: '14px', xs: '14px' },

                                        }}>
                                            {card.title[0]}</Typography>
                                        <Typography sx={{
                                            position: 'absolute',
                                            bottom: { lg: 36, md: 50, xs: 30 },
                                            left: {lg:57,xs:40},
                                            fontSize: { lg: '10px', md: '10px', xs: '10px' },
                                            fontWeight: '-200px'
                                        }}>
                                            {card.title[1]}</Typography>
                                    </Grid>
                                    <Typography sx={{
                                        position: 'absolute',
                                        bottom: { lg: 30, md: 50, xs: 25 },
                                        left: {lg:250,xs:180},
                                        
                                    }}><img src={Arrow2} style={{
                                        height: '30px',
                                        width: '30px'
                                    }} alt='../' /></Typography>
                                </Grid>
                            </Box>
                        ))}
                    </Box>
                    <IconButton onClick={handleNext} disabled={startIndex >= cardData.length - cardsPerPage}>
                        <img src={next} style={{
                            width: isSmallScreen ? '20px' : isMediumScreen ? '30px' : '50px',
                            height: isSmallScreen ? '20px' : isMediumScreen ? '30px' : '50px',
                        }} alt="next" />
                    </IconButton>
                </Box>
                <Typography sx={{ textAlign: 'center', fontSize: { lg: 34, xs: 14, md: 24 } }}>
                    Healthy Delicious Delicacies <span style={{ fontWeight: 'bolder', textDecoration: 'underline' }}>Everyday!</span>
                </Typography>
            </Box>
        </Box>
    );
}
