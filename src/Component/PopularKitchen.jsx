import * as React from 'react';
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Grid, useMediaQuery, Pagination } from '@mui/material';
import kitchenImageContainer from '../images/kitchenImageContainer.png';
import progressCircle01 from '../images/progressCircle01.png';
import progressCircle02 from '../images/progressCircle02.png';
import progressCircle03 from '../images/progressCircle03.png';
import Arrow from '../images/Arrow.png';
import Path from '../images/Path.png';
import { useAuth } from '../Authentication/AuthContext';

const cardsData = Array.from({ length: 12 }).map((_, index) => ({
    id: index,
    name: `Kitchen or Restro Name${index + 1}`,
    status: 'OPEN NOW',
    tagline: 'Tagline',
    location: 'Aunt Dely’s, YARMOUTH, NS',
    price: '$$ 120 FOR TWO',
    image: kitchenImageContainer,
}));

export default function ImgMediaCard() {
    const [visibleCards, setVisibleCards] = React.useState(6);
    const [page, setPage] = React.useState(1);
    const [showLess, setShowLess] = React.useState(false); // State for showing less
    const { isLoggedIn, logout } = useAuth();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleExploreAll = () => {
        setVisibleCards(cardsData.length);
        setShowLess(true); // Show "Show Less" button
    };

    const handleShowLess = () => {
        setVisibleCards(6); // Reset visible cards to initial state
        setShowLess(false); // Hide "Show Less" button
        setPage(1); // Reset pagination if any
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const cardsPerPage = 1;
    const paginatedCards = cardsData.slice((page - 1) * cardsPerPage, page * cardsPerPage);

    const renderCards = () => {
        const cardsToRender = isSmallScreen ? paginatedCards : cardsData.slice(0, visibleCards);
        return cardsToRender.map((card) => (
            <Grid item xs={12} sm={6} md={4} key={card.id}>
                <Card sx={{ maxWidth: 350, borderRadius: '24px', boxShadow: 'rgb(0,0,0,10)' }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="200"
                        image={card.image}
                    />
                    <CardContent>
                        <Grid container spacing={1.3}>
                            <Grid item xs={-1}>
                                <Typography style={{ fontSize: '19px', fontWeight: 600 }} component="div">
                                    {card.name}
                                </Typography>
                            </Grid>
                            <Grid item xs={-1}>
                                <Typography variant="h11" style={{ color: "rgb(17,188,96)", fontSize: '12px', fontWeight: 600 }}>
                                    {card.status}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Typography style={{ fontSize: '12px' }} mt={0.1}>
                            {card.tagline}
                        </Typography>
                        <Grid container spacing={2} align='right' mt={2}>
                            <Grid item xs={-1} textAlign='center'>
                                <img src={progressCircle01} alt='1...' />
                                <Typography style={{ color: 'rgb(230,109,87)', fontSize: '12px', fontWeight: 600 }} component="div">
                                    Food Quality
                                </Typography>
                            </Grid>
                            <Grid item xs={-1} textAlign='center'>
                                <img src={progressCircle02} alt='1...' />
                                <Typography style={{ color: 'rgb(17,188,96)', fontSize: '12px', fontWeight: 600 }}>
                                    Pack Hygiene
                                </Typography>
                            </Grid>
                            <Grid item xs={-1} textAlign='center'>
                                <img src={progressCircle03} alt='1...' />
                                <Typography style={{ color: "rgb(104,41,239)", fontSize: '12px', fontWeight: 600 }}>
                                    Pricing
                                </Typography>
                            </Grid>
                        </Grid>
                        <Box style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '-20px' }}>
                            <Button><img src={Arrow} /></Button>
                        </Box>
                        <Typography>
                            <img src={Path} />
                        </Typography>
                        <Grid container spacing={5}>
                            <Grid item xs={-1}>
                                <Typography style={{ fontSize: '12px', fontWeight: 400, color: 'black' }}>{card.location}</Typography>
                            </Grid>
                            <Grid item xs={-1}>
                                <Typography style={{ fontSize: '14px', fontWeight: 700, color: 'black' }}>{card.price}</Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        ));
    };

    return (
        <>
            {
                isLoggedIn ? (

                    <Box mt={3} sx={{ margin: '0 auto' }}>
                        <Typography variant="h4" color="black" textAlign="center" mt="90px" mb="40px">Popular Kitchen Near You</Typography>
                        <Grid container spacing={2} sx={{ padding: { lg: '0px 20px 0px 50px', xs: '0px 20px 0px 150px' } }}>
                            {renderCards()}
                        </Grid>
                        {!isSmallScreen && visibleCards < cardsData.length && (
                            <Box mt={3} textAlign="center">
                                <Button variant="contained" style={{ backgroundColor: 'rgb(214,103,68)', borderRadius: '24px', padding: '5px 40px', }} onClick={handleExploreAll}>Explore All</Button>
                            </Box>
                        )}
                        {showLess && (
                            <Box mt={3} textAlign="center">
                                <Button variant='contained' style={{ backgroundColor: 'rgb(214,103,68)', color: 'white', borderRadius: '24px', padding: '5px 40px', }} onClick={handleShowLess}>Show Less</Button>
                            </Box>
                        )}
                        {isSmallScreen && (
                            <Box mt={3} display="flex" justifyContent="center" >
                                <Pagination
                                    count={Math.ceil(cardsData.length / cardsPerPage)}
                                    page={page}
                                    onChange={handleChangePage}
                                />
                            </Box>
                        )}
                    </Box>
                )
                    : (
                        <Box mt={3} sx={{ margin: '0 auto' }}>
                            <Typography variant="h4" color="black" textAlign="center" mt="90px" mb="40px">Popular Kitchen Near You</Typography>
                            <Grid sx={{ padding: { lg: '0px 20px 0px 50px', xs: '0px 0px 0px 0px' } }}>
                                <Typography variant="h6" color="text.secondary" textAlign='center' mt="0px" mb="70px">Not Found Please Register Yourself to Specify....</Typography>
                            </Grid>
                        </Box>
                    )}
        </>
    );
}
