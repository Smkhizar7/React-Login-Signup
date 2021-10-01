import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link, useHistory } from 'react-router-dom';
import './Css/index.css';
import { ThemeProvider, useTheme, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MenuAppBar({auth,title,logout}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  let history = useHistory();
  
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          {auth ? (
            <div>
              <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
              <span className="name-box">
                {auth.displayName}
              </span>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={()=>history.push("/profile")}>Profile</MenuItem>
                <MenuItem onClick={()=>history.push("/contacts")}>Contacts</MenuItem>
                <MenuItem onClick={()=>history.push("/chat")}>Chat</MenuItem>
                <MenuItem onClick={logout}>Log Out</MenuItem>
              </Menu>
            </div>
          )
          :
          (
            <div>
               <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
              <Link to="/" className="link app-link">Login</Link>
              <Link to="/signup" className="link app-link">Sign Up</Link>
            </div>
          )
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default function ToggleColorMode({mode,setMode,...rest}) {
  // const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );
  // React.useEffect(()=>
  // onClick(mode)
  // ,[mode])
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <MenuAppBar {...rest} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}