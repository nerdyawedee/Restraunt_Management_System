import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Facebook from "../images/image26.png";
import Twitter from "../images/image28.png";
import Instagram from "../images/image27.png";
import { Box } from "@mui/material";
import Heart from '../images/Heart.png';

export default function Footer() {
    return (
        <Box sx={{ width: {lg:'1260px',sm:'100%'},height:'25vh',maxWidth:{lg:'100%'}, borderTop: '2px solid rgb(214,107,64)' }}>
            <Container maxWidth="lg" sx={{ mt: 3 }}>
                <Grid container spacing={4} alignItems="center" justifyContent="space-between">
                    <Grid item xs={12} sm={3} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                        <Typography variant="h6" color="text.primary" sx={{ fontSize: { xs: '24px', sm: '30px' } }}>
                            <span style={{ color: 'rgb(214,107,64)' }}>Tiffy</span>.com
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: { xs: '16px', sm: '20px' } }} color="text.secondary">
                            Fresh & affordable hot meals <span style={{ color: 'rgb(214,107,64)' }}>for everyone</span>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                        <Typography variant="body2" sx={{ fontSize: { xs: '16px', sm: '20px' } }} gutterBottom>
                            <Link href="#" sx={{ color: "black", '&:hover': { color: 'rgb(214,107,64)' } }} underline="none">
                                Home
                            </Link>
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: { xs: '16px', sm: '20px' } }} gutterBottom>
                            <Link href="#" sx={{ color: "black", '&:hover': { color: 'rgb(214,107,64)' } }} underline="none">
                                Explore
                            </Link>
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: { xs: '16px', sm: '20px' } }} gutterBottom>
                            <Link href="#" sx={{ color: "black", '&:hover': { color: 'rgb(214,107,64)' } }} underline="none">
                                Services
                            </Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                        <Typography variant="body2" sx={{ fontSize: { xs: '16px', sm: '20px' } }} gutterBottom>
                            <Link href="#" sx={{ color: "black", '&:hover': { color: 'rgb(214,107,64)' } }} underline="none">
                                Help
                            </Link>
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: { xs: '16px', sm: '20px' } }} gutterBottom>
                            <Link href="#" sx={{ color: "black", '&:hover': { color: 'rgb(214,107,64)' } }} underline="none">
                                Privacy Policy
                            </Link>
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: { xs: '16px', sm: '20px' }, '&:hover': { color: 'rgb(214,107,64)' } }} color="black" gutterBottom>
                            <Link href="#" sx={{ color: "black", '&:hover': { color: 'rgb(214,107,64)' } }} underline="none">
                                Terms & Conditions
                            </Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3} container justifyContent="center" alignItems="center">
                        <Link href="https://www.facebook.com/" underline="none" sx={{ mr: 1 }}>
                            <img alt="Facebook" src={Facebook} />
                        </Link>
                        <Link href="https://www.instagram.com/" underline="none" sx={{ mr: 1 }}>
                            <img alt="Instagram" src={Instagram} />
                        </Link>
                        <Link href="https://www.twitter.com/" underline="none" sx={{ mr: 1 }}>
                            <img alt="Twitter" src={Twitter} />
                        </Link>
                        <Typography variant="h6" align="center" color="text.primary" sx={{ display: 'flex', alignItems: 'center', fontSize: { xs: '26px', sm: '26px' } }}>
                            <img alt="heart" src={Heart} style={{ marginRight: '5px', width: '24px' }} />
                            <span style={{ color: 'rgb(217,103,67)' }}>Follow Us</span>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
