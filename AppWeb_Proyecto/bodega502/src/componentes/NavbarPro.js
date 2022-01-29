import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button, MenuItem, Menu} from "@material-ui/core"
import Fade from '@mui/material/Fade';



export default function NavbarPro() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ bgcolor: 'warning.main' }} position="static" style={{alignItems: 'center', height: '8.5vh'}}>
        <Toolbar>
          <div> 
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
              <Menu
                id="fade-menu1"
                MenuListProps={{
                  'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                  <MenuItem onClick={handleClose}>Articulos de cocina</MenuItem>
                  <MenuItem onClick={handleClose}>Camas</MenuItem>
                  <MenuItem onClick={handleClose}>Electrodomesticos</MenuItem>
                  <MenuItem onClick={handleClose}>Mesas</MenuItem>
                  <MenuItem onClick={handleClose}>Sillas/Bancos</MenuItem>
                </Menu>

            <Button 
             color="inherit" 
             id="fade-button2"
             aria-controls="fade-menu"
             sx={{ bgcolor: 'warning.main' }}
             aria-haspopup="true"
             aria-expanded={open ? 'true' : undefined}
             onClick={handleClick}
            >Ejercicio
            </Button>
              <Menu
                id="fade-menu2"
                MenuListProps={{
                  'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                  <MenuItem onClick={handleClose}>Pesas</MenuItem>
                  <MenuItem onClick={handleClose}>Maquinas</MenuItem>
                  <MenuItem onClick={handleClose}>Bancos</MenuItem>
                </Menu>
          </div>

          <div> 
            <Button 
             color="inherit" 
             id="fade-button3"
             aria-controls="fade-menu"
             aria-haspopup="true"
             aria-expanded={open ? 'true' : undefined}
             onClick={handleClick}
            >Limpieza
            </Button>
              <Menu
                id="fade-menu3"
                MenuListProps={{
                  'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                  <MenuItem onClick={handleClose}>Mascarillas</MenuItem>
                  <MenuItem onClick={handleClose}>Guantes</MenuItem>
                </Menu>
          </div>

          <div> 
            <Button 
             color="inherit" 
             id="fade-button4"
             aria-controls="fade-menu"
             aria-haspopup="true"
             aria-expanded={open ? 'true' : undefined}
             onClick={handleClick}
            >Otros Productos
            </Button>
              <Menu
                id="fade-menu4"
                MenuListProps={{
                  'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                  <MenuItem onClick={handleClose}>Accesorio relojes</MenuItem>
                  <MenuItem onClick={handleClose}>Baterias</MenuItem>
                  <MenuItem onClick={handleClose}>Jardineria y extensiones</MenuItem>
                 
                </Menu>
          </div>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}