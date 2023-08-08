import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Button,
  Hidden,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';

export const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
      if (
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')
      ) {
        return;
      }
  
      setIsDrawerOpen(open);
    };
  
    const menuItems = [
      { text: 'Catalog', icon: <ShoppingCartIcon />, link: '/' },
      { text: 'Electronics', icon: <CategoryIcon />, link: '/electronics' },
      { text: "Jewelery", icon: <CategoryIcon />, link: "/jewelery" },
      { text: "Men's Clothing", icon: <CategoryIcon />, link: "/men's clothing" },
      { text: "Women's Clothing", icon: <CategoryIcon />, link: "/women's clothing" },
    ];
    return (
        <AppBar position="sticky" color="primary" >
            <Toolbar>
                <Hidden mdUp>
                    <IconButton
                        color="inherit"
                        onClick={toggleDrawer(true)}
                        edge="start"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
                        <List>
                            {menuItems.map((item) => (
                                <ListItem
                                    button
                                    key={item.text}
                                    component={Link}
                                    to={item.link}
                                    onClick={toggleDrawer(false)}
                                >
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItem>
                            ))}
                        </List>
                    </Drawer>
                </Hidden>

                <Hidden smDown>
                    <IconButton color="inherit" component={Link} to="/">
                        <img src="../../logo.png" alt="Logo" width="50" height="50" />
                    </IconButton>
                </Hidden>

                <Box sx={{ flexGrow: 1 }}>
                    <Hidden smDown>
                        {menuItems.map((item) => (
                            <Button color="inherit" component={Link} to={item.link} key={item.text}>
                                {item.text}
                            </Button>
                        ))}
                    </Hidden>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
