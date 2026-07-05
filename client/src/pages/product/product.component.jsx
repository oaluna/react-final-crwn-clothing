import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import { database } from '../../firebase/firebase.utils';
import {
  ProductPageContainer,
  ProductDetailGrid,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductDescription,
  ProductPrice,
  ProductCategoryContainer,
  ProductCategory,
  ButtonRow,
  ProductMeta,
  ProductMetaLabel,
  ActionButton
} from './product.styles';

const ProductPage = ({ addItem }) => {
  const { productId } = useParams();
  const history = useHistory();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productsRef = database.ref('products');

    const handleValue = (snapshot) => {
      const data = snapshot.val();
      if (!data) {
        setProduct(null);
        setLoading(false);
        return;
      }

      const rawProduct = data[productId];
      if (!rawProduct) {
        setProduct(null);
        setLoading(false);
        return;
      }

      setProduct({
        id: productId,
        name: rawProduct.name || rawProduct.title || 'Untitled product',
        description: rawProduct.description || rawProduct.shortDescription || 'No description available.',
        price: rawProduct.price || rawProduct.pricingText || 0,
        imgUrl: rawProduct.imgUrl || rawProduct.imageUrl || '',
        category: rawProduct.category || rawProduct.collection || rawProduct.collectionId || '',
        metadata: rawProduct.metadata || {},
      });
      setLoading(false);
    };

    productsRef.on('value', handleValue, (err) => {
      console.error('Fetch product failed', err);
      setLoading(false);
    });

    return () => productsRef.off('value', handleValue);
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      addItem(product);
    }
  };

  const handleGoBack = () => {
    history.goBack();
  };

  if (loading) {
    return <ProductPageContainer>Loading product...</ProductPageContainer>;
  }

  if (!product) {
    return <ProductPageContainer>Product not found.</ProductPageContainer>;
  }

  return (
    <ProductPageContainer>
      <ButtonRow>
        <ActionButton type="button" onClick={handleGoBack}>
          Back
        </ActionButton>
        <ActionButton type="button" onClick={handleAddToCart}>
          Add to cart
        </ActionButton>
      </ButtonRow>
      <ProductDetailGrid>
        <ProductImage imageUrl={product.imgUrl} />
        <ProductInfo>
          <ProductTitle>{product.name}</ProductTitle>
          <ProductPrice>${Number(product.price).toFixed(2)}</ProductPrice>
          <ProductMeta>
            <ProductMetaLabel>Tags</ProductMetaLabel>
            <ProductCategoryContainer>
              {product.category ? <ProductCategory>{product.category}</ProductCategory> : 'No tags available.'}
            </ProductCategoryContainer>
          </ProductMeta>
          <ProductDescription>{product.description}</ProductDescription>
        </ProductInfo>
      </ProductDetailGrid>
    </ProductPageContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(ProductPage);
