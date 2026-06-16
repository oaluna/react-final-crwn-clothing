import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import { database } from '../../firebase/firebase.utils';
import { ShopPageContainer, ShopProductGrid } from './shop.styles';

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const productsRef = database.ref('products');

    const handleValue = (snapshot) => {
      const data = snapshot.val();
      const loadedProducts = [];

      if (data) {
        Object.entries(data).forEach(([key, val]) => {
          const category = val.category || val.collection || val.collectionId || '';
          const collectionRoute = category ? encodeURI(String(category).toLowerCase()) : '';

          loadedProducts.push({
            id: key,
            name: val.name || val.title || 'Untitled product',
            description: val.description || val.shortDescription || '',
            price: val.price || val.pricingText || 0,
            imgUrl: val.imgUrl || val.imageUrl || '',
            category,
            collectionRoute,
          });
        });
      }

      setProducts(loadedProducts);
      setLoading(false);
    };

    const handleError = (err) => {
      console.error('Fetch products failed', err);
      setLoading(false);
    };

    productsRef.on('value', handleValue, handleError);

    return () => productsRef.off('value', handleValue);
  }, []);

  const handleCardClick = (product) => {
    history.push(`/shop/${product.id}`);
  };

  return (
    <ShopPageContainer>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <ShopProductGrid>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => handleCardClick(product)}
            />
          ))}
        </ShopProductGrid>
      )}
    </ShopPageContainer>
  );
};

export default ShopPage;
