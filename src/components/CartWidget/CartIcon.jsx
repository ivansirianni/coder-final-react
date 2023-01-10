import * as React from 'react';
import Box from '@mui/material/Box';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import SvgIcon from '@mui/material/SvgIcon';

function HomeIcon(props) {
  return (
   <SvgIcon {...props}>
      <ShoppingCartSharpIcon />
    </SvgIcon>
  );
}

export default function SvgIconsColor() {
  return (
    <Box
      sx={{
        '& > :not(style)': {
          m: 2,
        },
      }}
    >     
      <HomeIcon color="secondary" sx={{ fontSize: 40 }} />     
      
    </Box>
  );
}