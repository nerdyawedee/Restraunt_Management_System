import React from 'react';
import Button from '@mui/material/Button';
import LocationOnIcon from '../images/Cart'; // Assuming LocationOnIcon is imported correctly from your custom location

const Button2 = () => {
  return (
    <>
      <Button
        startIcon={<LocationOnIcon fontSize="small" />} // Assuming LocationOnIcon is correctly imported and used
        style={{ textTransform: 'none', justifyContent: 'flex-start', backgroundColor: 'rgb(217, 217, 217)', color: 'black',borderRadius:24,padding:'5px 10px' }}
      >
          <div >Empty</div>
     
      </Button>
    </>
  );
};

export default Button2;
