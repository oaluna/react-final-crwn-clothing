import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Hero from '../../components/hero/hero.component';
import Philosophy from "../../components/philosophy/philosophy.component"
import ProductCard from '../../components/product-card/product-card.component';
import { database } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { HomePageContainer, HomeProductGrid } from './homepage.styles';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

const HomePage = ({ match, ...props }) => {
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
    

            loadedProducts.push({
              id: key,
              name: val.name || val.title || 'Untitled product',
              description: val.description || val.shortDescription || '',
              price: val.price || val.pricingText || 0,
              imgUrl: val.imgUrl || val.imageUrl || '',
              category: val.category || val.collectionRoute || '',
            collectionRoute: val.collectionRoute || val.catgegory || '',
            });
          });
        }

        setProducts(loadedProducts);
        setLoading(false);
      };

      productsRef.on('value', handleValue, (err) => {
        console.error('Fetch products failed', err);
        setLoading(false);
      });

      return () => productsRef.off('value', handleValue);
    }, []);

    const handleCardClick = (product) => {
    
        history.push(`/shop/${product.id}`);
      
    };

    return (
      <HomePageContainer>
        <Hero />
        <Philosophy />
        {loading ? (
          <p>Loading products...</p>
        ) : (
          <HomeProductGrid>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => handleCardClick(product)}
              />
            ))}
          </HomeProductGrid>
        )}
      </HomePageContainer>
  );
};
const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(HomePage);
