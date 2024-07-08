import React from 'react';
import Button from '@mui/material/Button';
import Bell from '../images/Heart.png'; // Assuming LocationOnIcon is imported correctly from your custom location

const Button4 = () => {
  return (
    <>
      <Button
        startIcon={<img src={Bell} alt="Location Icon" style={{ width: 20, height: 20,marginLeft:7 }} />} // Using img element for the icon
        style={{ textTransform: 'none', justifyContent: 'flex-start', backgroundColor: 'rgb(217, 217, 217)', color: 'black',borderRadius:24 }}
      >
        
        <div>0</div>
      </Button>
    </>
  );
};

export default Button4;
