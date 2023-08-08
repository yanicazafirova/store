import React from 'react';
import { AppBar, Toolbar, Typography, Box, Grid, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

export const Footer = () => {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Box mt={1.5} display="flex" justifyContent="flex-end">
                                <Typography variant="body1" color="inherit">
                                    © {new Date().getFullYear()} Your App Name. All rights reserved.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box display="flex" justifyContent="flex-end">
                                <Typography variant="body1" color="inherit">
                                    <Box mt={1.5}>
                                        Follow us on:
                                    </Box>
                                </Typography>
                                <Box ml={2}>
                                    <IconButton href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                        <FacebookIcon />
                                    </IconButton>
                                </Box>
                                <Box ml={2}>
                                    <IconButton href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                        <TwitterIcon />
                                    </IconButton>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
