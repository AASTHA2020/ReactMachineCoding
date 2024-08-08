import React, { useState } from 'react';
import styles from './filterProducts.module.css';

const FilterProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const products = [
    { id: 1, name: 'Cat 1', category: 'cat', image: 'cat1.jpg' },
    { id: 2, name: 'Dog 1', category: 'dog', image: 'dog1.jpg' },
    { id: 3, name: 'Cat 2', category: 'cat', image: 'cat2.jpg' },
    { id: 4, name: 'Dog 2', category: 'dog', image: 'dog2.jpg' },
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className={styles.filterProducts}>
      <div className={styles.filters}>
        <button onClick={() => setSelectedCategory('all')}>All</button>
        <button onClick={() => setSelectedCategory('cat')}>Cat</button>
        <button onClick={() => setSelectedCategory('dog')}>Dog</button>
      </div>
      <div className={styles.productList}>
        {filteredProducts.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterProducts;
