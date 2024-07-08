import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import LocationOnIcon from '../images/Location'; // Assuming LocationOnIcon is imported correctly from your custom location
import ArrowDropDownIcon from '../images/Vector1';
import Divider from '@mui/material/Divider';

const locations = [
  { name: 'New York' },
  { name: 'Los Angeles' },
  { name: 'London' },
  { name: 'Paris' },
];

const LocationSelector = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    handleClose();
  };

  return (
    <>
      <Button
        onClick={handleClick}
        startIcon={<LocationOnIcon fontSize="small" />} // Assuming LocationOnIcon is correctly imported and used
        endIcon={<ArrowDropDownIcon/>}
        style={{ textTransform: 'none', justifyContent: 'flex-start', backgroundColor: 'rgb(217, 217, 217)', color: 'black',borderRadius:24,padding:'8px 16px' }}
      >
        <ListItemIcon sx={{ minWidth: 20 }}>
          <div style={{ borderLeft: '2px solid white', height: 24, marginRight: 5,marginLeft: 5 }}>
            {selectedLocation.icon} {/* Assuming selectedLocation.icon is correctly defined */}
          </div>
        </ListItemIcon>
        <span>{selectedLocation.name}</span>
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {locations.map((location, index) => (
          <div key={index}>
            <MenuItem onClick={() => handleLocationSelect(location)}>
              {location.name}
            </MenuItem>
            {index !== locations.length - 1 && <Divider sx={{ backgroundColor: 'black' }} />}
          </div>
        ))}
      </Menu>
    </>
  );
};

export default LocationSelector;
