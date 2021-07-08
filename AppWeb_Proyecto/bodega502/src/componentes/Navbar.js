
import bodega from '../imagenes/bodega502.jpg';
import './Navbar.css';
import { AppBar, Toolbar, IconButton, Typography,InputBase,Paper,Divider} from '@mui/material';
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
/*
<Link to='/'>
          <img src={bodega} alt='Bodega 502' className='logo'></img>
        </Link>
*/

function NavBar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          size="small"
          edge="false"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <Link to='/'>
            <img src={bodega} alt='Bodega 502' className='logo'></img>
          </Link>
        </IconButton>
        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            La Bodega 502
        </Typography>
        <AccountCircle/>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;