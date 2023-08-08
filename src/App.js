import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { ItemList } from './components/items/ItemList';
import { CategoryItemList } from './components/category/CategoryItemList';
import { getAll, getCategory } from './services/itemService';

function App() {
  const [items, setItems] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAll();
      setItems(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCategory();
      setCategoryList(data);
    };

    fetchData();
  }, []);
  return (
    <Box className='app'>
      <Header />
      <Routes>
        <Route path="/" element={<ItemList items={items} categoryList={categoryList} />} />
        {categoryList.map((category) => (
          <Route key={category} path={`/${category}`} element={<CategoryItemList items={items} category={category} />} />
        ))}
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
