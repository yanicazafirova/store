import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box } from '@mui/material';

export const Sort = ({ categoryList, onSortChange }) => {
    const [selectedCriteria, setSelectedCriteria] = useState(''); 
    const [selectedSort, setSelectedSort] = useState('asc'); 

    const handleSortChange = (event) => {
        setSelectedSort(event.target.value);
        onSortChange(selectedCriteria, event.target.value); 
    };

    const handleCriteriaChange = (event) => {
        setSelectedCriteria(event.target.value);
        onSortChange(event.target.value, selectedSort); 
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
            <FormControl sx={{ minWidth: 150 }}>
                <InputLabel htmlFor="criteria-select">Criteria</InputLabel>
                <Select
                    id="criteria-select"
                    value={selectedCriteria}
                    onChange={handleCriteriaChange}
                >
                    <MenuItem value="price">Price</MenuItem>
                    <MenuItem value="title">Product title</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 150 }}>
                <InputLabel htmlFor="sort-select">Sort</InputLabel>
                <Select
                    id="sort-select"
                    value={selectedSort}
                    onChange={handleSortChange}
                >
                    <MenuItem value="asc">Ascending</MenuItem>
                    <MenuItem value="desc">Descending</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};
