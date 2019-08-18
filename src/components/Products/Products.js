import React from 'react';
import PropTypes from 'prop-types';

import Product from './Product';

const Products = ({ products }) => {
  return (
    <div className="products">
      <h3>Products</h3>
      <ul className="row products--list">
        {products && products.length ? (
          products.map(product => {
            return (
              <li className="col-sm-12" key={product.id}>
                <Product
                  title={product.title}
                  description={product.description}
                />
              </li>
            );
          })
        ) : (
          <li className="col col-sm-6">No products</li>
        )}
      </ul>
    </div>
  );
};

Products.propTypes = {
  products: PropTypes.array,
};

export default Products;
