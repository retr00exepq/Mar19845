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
          <Grid> 
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
                onClose={handleMenuCLick}
                TransitionComponent={Fade}
              >
                  <MenuItem onClick={handleMenuCLick}>Articulos de cocina</MenuItem>
                  <MenuItem onClick={handleMenuCLick}>Camas</MenuItem>
                  <MenuItem onClick={handleMenuCLick}>Electrodomesticos</MenuItem>
                  <MenuItem onClick={handleMenuCLick}>Mesas</MenuItem>
                  <MenuItem onClick={handleMenuCLick}>Sillas/Bancos</MenuItem>
                </Menu>

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
              <Menu
                id="fade-menu2"
                MenuListProps={{
                  'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open1={open1}
                onClose={handleMenuCLick}
                TransitionComponent={Fade}
              >
                  <MenuItem onClick={handleMenuCLick}>Pesas</MenuItem>
                  <MenuItem onClick={handleMenuCLick}>Maquinas</MenuItem>
                  <MenuItem onClick={handleMenuCLick}>Bancos</MenuItem>
                </Menu>
          </Grid>

          <Grid> 
            <Button 
             color="inherit" 
             id="fade-button1"
             aria-controls="fade-menu"
             aria-haspopup="true"
             aria-expanded={open2 ? 'true' : undefined}
             onClick={handleClick}
            >Limpieza
            </Button>
              <Menu
                id="fade-menu3"
                MenuListProps={{
                  'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open2={open2}
                onClose={handleMenuCLick}
                TransitionComponent={Fade}
              >
                  <MenuItem onClick={handleMenuCLick}>Mascarillas</MenuItem>
                  <MenuItem onClick={handleMenuCLick}>Guantes</MenuItem>
                </Menu>
          </Grid>

          <Grid> 
            <Button 
             color="inherit" 
             id="fade-button1"
             aria-controls="fade-menu"
             aria-haspopup="true"
             aria-expanded={open3 ? 'true' : undefined}
             onClick={handleClick}
            >Otros Productos
            </Button>
              <Menu
                id="fade-menu4"
                MenuListProps={{
                  'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open3={open3}
                onClose={handleMenuCLick}
                TransitionComponent={Fade}
              >
                  <MenuItem onClick={handleMenuCLick}>Accesorio relojes</MenuItem>
                  <MenuItem onClick={handleMenuCLick}>Baterias</MenuItem>
                  <MenuItem onClick={handleMenuCLick}>Jardineria y extensiones</MenuItem>
                 
                </Menu>
          </Grid>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}