import React, { useState } from 'react';
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography, Box, Rating, Grid } from '@mui/material';

export const Item = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const MAX_DESCRIPTION_LENGTH = 100;
  const MAX_TITLE_LENGTH = 20;

  const truncatedDescription =
    item.description.length > MAX_DESCRIPTION_LENGTH
      ? item.description.substring(0, MAX_DESCRIPTION_LENGTH) + '...'
      : item.description;

  const truncatedTitle =
    item.title.length > MAX_TITLE_LENGTH
      ? item.title.substring(0, MAX_TITLE_LENGTH) + '...'
      : item.title;
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
    <Card
      sx={{
        width: '400px',
        height: '480px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10px',
        padding: '10px'
      }}
    >
      <CardHeader
        title={isHovered ? item.title : truncatedTitle} 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
        sx={{
          fontSize: '10px',
          p: 1,
          textAlign: 'center'
        }}
      />
      <CardMedia
        component="img"
        style={{ height: '150px', width: '100%', objectFit: 'contain', marginTop: '10px' }}
        image={item.image}
        alt={item.title}
      />
      <CardContent sx={{ flexGrow: 1, textAlign: 'center', marginTop: '10px' }}>
        <Typography variant="body2" color="text.secondary" textAlign="center">
          {truncatedDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '10px' }}>
          <Button size="small" color="primary" onClick={() => alert(`${item.title} has been added to your basket.`)}>
            Add to Cart
          </Button>
        </Box>
      </CardActions>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: '0 10px' }}>
        <Typography variant="body2" color="text.primary">
          <Box sx={{ marginLeft: '5px' }}>Category:</Box>
          <Box sx={{ marginLeft: '5px' }}>{item.category}</Box>
        </Typography>
        <Typography variant="body2" color="text.primary">
          ${item.price}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: '0 10px' }}>
        <Rating name="item-rating" value={item.rating.rate} precision={0.1} readOnly />
        <Typography variant="body2" color="text.primary">
          ({item.rating.count} reviews)
        </Typography>
      </Box>
    </Card>
    </Grid>
  );
};

