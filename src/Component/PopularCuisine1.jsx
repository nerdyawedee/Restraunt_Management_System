import * as React from 'react';
import { IconButton, Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import prev from '../images/prevBtn1.png';
import next from '../images/nextBtn1.png';
import card1Image from '../images/Rectangle22.png';
import card2Image from '../images/Rectangle21.png';
import card3Image from '../images/Rectangle2.png';
// Import other card images as needed

const cardData = [
    { id: 1, img: card1Image, title: 'Indian' },
    { id: 2, img: card2Image, title: 'Chinese' },
    { id: 3, img: card3Image, title: 'Continential' },
    { id: 4, img: card1Image, title: 'Indian' },
    { id: 5, img: card2Image, title: 'Chinese' },
    { id: 6, img: card3Image, title: 'Continential' },
    // Add more cards with their respective images and titles
];

export default function PopularCuisine1() {
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

    const currentCards = cardData.slice(startIndex, startIndex + cardsPerPage);

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            //   backgroundColor: 'rgb(214,107,64)',
            paddingBottom: { lg: '40px', xs: '0px', md: '40px' },
            borderRadius: '36px',
            width: { lg: '95%', md: '100%', xs: '100%' },
            maxWidth: '1273px',
            height: '320px',
            margin: { lg: '0 auto', xs: '0 auto', md: '0 auto' },
            pt: { lg: '10px', xs: '10px', md: '10px' },
        
        }}>
            <Box sx={{ width: '100%', pl: '20px', pr: {lg:'20px',xs:5} }}>
                <Typography sx={{ color: 'black',mb:'30px',fontWeight:'bold' ,fontSize: { lg: 54, xs: 30 } }}>Popular Cuisines</Typography>
                <Box sx={{ display: 'flex',  }}>
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
                                <Typography sx={{ position: 'absolute', bottom: { lg: 60, md: 50, xs: 40 }, left: 30, fontSize: { lg: '36px', md: '24px', xs: '20px' } }}>{card.title}</Typography>
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
