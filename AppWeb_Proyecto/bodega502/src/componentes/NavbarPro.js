import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button, MenuItem, Menu} from "@material-ui/core"
import Fade from '@mui/material/Fade';
import Grid from '@material-ui/core/Grid';


export default function NavbarPro() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const open1 = Boolean(anchorEl);
  const open2 = Boolean(anchorEl);
  const open3 = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuCLick = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ bgcolor: 'warning.main' }} position="static" style={{alignItems: 'center', height: '8.5vh'}}>
        <Toolbar>
            <Button 
             color="inherit" 
             id="fade-button1"
             sx={{ bgcolor: 'warning.main' }}
             aria-controls="fade-menu"
             aria-haspopup="true"
             
             aria-expanded={open ? 'true' : undefined}
             onClick={handleClick}
            >Hogar
            </Button>
              

            <Button 
             color="inherit" 
             id="fade-button1"
             aria-controls="fade-menu"
             sx={{ bgcolor: 'warning.main' }}
             aria-haspopup="true"
             aria-expanded={open1 ? 'true' : undefined}
             onClick={handleClick}
            >Ejercicio
            </Button>
             
            <Button 
             color="inherit" 
             id="fade-button1"
             aria-controls="fade-menu"
             aria-haspopup="true"
             aria-expanded={open2 ? 'true' : undefined}
             onClick={handleClick}
            >Limpieza
            </Button>
              
            <Button 
             color="inherit" 
             id="fade-button1"
             aria-controls="fade-menu"
             aria-haspopup="true"
             aria-expanded={open3 ? 'true' : undefined}
             onClick={handleClick}
            >Otros Productos
            </Button>
             
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}