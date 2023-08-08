import React, { useState } from 'react';
import { Typography, Grid, Box, Button, CircularProgress } from '@mui/material';
import { Item } from './Item';
import { Sort } from '../sort/Sort';

export const ItemList = ({ items, categoryList }) => {
    const [visibleItems, setVisibleItems] = useState(5);
    const [sortCriteria, setSortCriteria] = useState(''); 
    const [sortOrder, setSortOrder] = useState('asc'); 

    const handleLoadMore = () => {
        setVisibleItems(prevVisibleItems => prevVisibleItems + 5);
    };

    return (
        <Box mt={3}>
            <Sort
                categoryList={categoryList}
                onSortChange={(criteria, order) => {
                    setSortCriteria(criteria);
                    setSortOrder(order);
                }}
            />
            {items?.length > 0 ? (
                <>
                    <Grid container spacing={2}>
                        {items
                            .slice(0, visibleItems)
                            .sort((a, b) => {
                                if (sortCriteria === 'price') {
                                    return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
                                } else if (sortCriteria === 'title') {
                                    return sortOrder === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
                                }
                                return 0;
                            })
                            .map(item => (
                                <Grid item xs={12} sm={6} md={6} lg={4} key={item.id}>
                                    <Item item={item} />
                                </Grid>
                            ))}
                    </Grid>
                    {visibleItems < items?.length && (
                        <Box mt={2} display="flex" justifyContent="center">
                            <Box style={{ marginBottom: '10px' }}>
                                <Button variant="contained" onClick={handleLoadMore}>
                                    Load More
                                </Button>
                            </Box>
                        </Box>
                    )}
                    <Box display="flex" justifyContent="flex-end" mt={1}>
                        <Typography variant="caption" color="primary">
                            Showing {Math.min(visibleItems, items.length)} of {items.length} products
                        </Typography>
                    </Box>
                </>
            ) : (
                <Box display="flex" justifyContent="center" mt={3}>
                    <CircularProgress color="primary" />
                </Box>
            )}
        </Box>
    );
};
