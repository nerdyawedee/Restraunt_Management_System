import React, { useState } from 'react';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import hand from '../images/hand.png';
import Location from '../images/Location';
import { Link } from '@mui/material';
import image25 from '../images/image25.png';
import image29 from '../images/image29.png';
import rightImage from '../images/image5.png';
import Login from './Login'; // Ensure correct import

export default function Signup({ onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const handleSignup = () => {
    const userData = { email, password };
    localStorage.setItem('userData', JSON.stringify(userData));
    setIsLogin(true); // This will render the Login component
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      {isLogin ? (
        <Login onClose={toggleForm} />
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <div style={{ display: 'flex', backgroundColor: '#fff', borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.2) -3px -3px 9px, rgba(147, 149, 151, 0.671) 3px 3px 7px' }}>
            <Sheet
              sx={{
                width: 300,
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '8px',
                boxShadow: 'none' // Set boxShadow to none to avoid double shadow
              }}
            >
              <div>
                <Typography level="h2" component="h1">
                  <b>
                    Welcome <span style={{ color: 'rgb(214,107,64)' }}>Back !</span>
                    <img src={hand} style={{ height: 20, marginLeft: 12 }} />
                  </b>
                </Typography><br />
                <Typography level="body-sm" fontWeight={500}> find healthy meals around <Location /></Typography>
              </div>
              <FormControl style={{ marginTop: '20px' }}>
                <FormLabel>Email</FormLabel>
                <Input name="email" type="email" placeholder="johndoe@email.com" style={{ borderColor: 'rgb(214,107,64)', borderRadius: 20, marginLeft: 3 }} onChange={(e) => setEmail(e.target.value)} />
              </FormControl>
              <FormControl style={{ marginTop: '20px' }}>
                <FormLabel>Password</FormLabel>
                <Input name="password" type="password" placeholder="password" className="custom-input" style={{ borderColor: 'rgb(214,107,64)', borderRadius: 20, marginLeft: 3 }} onChange={(e) => setPassword(e.target.value)} />
              </FormControl>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ marginRight: '20px', marginTop: '20px' }}>
                  <Button sx={{ mt: 1, backgroundColor: 'rgb(214,107,64)', marginLeft: 1, borderRadius: '20px', paddingLeft: '55px', paddingRight: '55px', '&:hover': { bgcolor: 'rgb(214,90,60)' } }} onClick={handleSignup}>Signup</Button>
                </div>
                <div style={{ marginTop: '20px' }}>
                  <Typography fontSize="sm" sx={{ alignSelf: 'center' }} fontWeight={500}>
                    Already joined?<br />
                    <Link onClick={toggleForm} style={{ marginRight: 20, cursor: 'pointer', color: 'rgb(214,107,64)' }}>Click here</Link>
                  </Typography>
                </div>
              </div>
              <div>
                <div style={{ marginTop: 6 }}>
                  <Typography fontSize="sm" fontWeight={500} sx={{ alignSelf: 'center', textAlign: 'center', marginTop: 4 }} level="body-sm">
                    Forget Password ?<span style={{ color: 'black' }}> Click here</span><br />
                  </Typography>
                  <Typography sx={{ alignItems: 'center', textAlign: 'center', marginLeft: 17, color: 'black' }} fontWeight={500} > OR
                  </Typography>

                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <img src={image25} style={{ height: 40, width: 40, marginRight: 50 }} />
                  <img src={image29} style={{ height: 40, width: 40 }} />
                </div>
              </div>
            </Sheet>
            <div style={styles.divider}></div>
            <div style={styles.rightContainer}>
              <div style={styles.siteName}>
                <span style={styles.siteHighlight}>Tiffy</span>.com
              </div>
              <img src={rightImage} alt="Right Side" style={styles.rightImage} />
              <Sheet sx={styles.infoSheet}>
                <div style={styles.arrowDown}></div>
                <Typography sx={styles.infoText} fontWeight={500}>
                  Getting healthy food<br /> becomes easy now!
                </Typography>
              </Sheet>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  divider: { width: '1px', backgroundColor: 'rgb(214,107,64)', margin: '0 24px' },
  rightContainer: { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 24 },
  siteName: { color: 'black', fontSize: 30,  marginTop: -20 },
  siteHighlight: { color: 'rgb(214,107,64)'},
  rightImage: { height: 220, borderRadius: '10px', marginTop: 20 },
  infoSheet: { mt: 2, p: 1, borderRadius: '8px', backgroundColor: 'rgb(214,107,64)', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)', textAlign: 'center', height: 50, width: 150, whiteSpace: 'nowrap' },
  arrowDown: { position: 'absolute', width: 0, height: 0, borderLeft: '10px solid transparent', borderRight: '10px solid transparent', borderBottom: '10px solid rgb(214,107,64)', top: '-10px', left: 'calc(50% - 10px)' },
  infoText: { color: 'white', fontSize: '14px' }
};
