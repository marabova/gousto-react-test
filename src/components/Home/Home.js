import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Categories from '../Categories';
import Products from '../Products';
import SearchField from '../SearchField';
import {
  getCategories,
  selectCategory,
  getProducts,
  filterProductsByCategory,
  searchProductsByTitle,
} from '../../actions';
import './Home.css';
class Home extends Component {
  state = {
    searchValue: '',
  };

  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchProducts();
  }

  onCategoryClick = category => {
    this.setState({
      searchValue: '',
    });

    this.props.selectCategory(category.id);
    this.props.filterProducts(category.id);
  };

  onInputChange = event => {
    this.setState({
      searchValue: event.target.value,
    });

    this.props.searchProducts(event.target.value);
  };

  render() {
    const products = this.props.searchedProducts.length
      ? this.props.searchedProducts
      : this.props.filteredProducts;

    return (
      <div className="wrapper">
        <header>
          <div className="container">
            <div className="row align-items-center">
              <h1 className="col-sm-4">Gousto</h1>
              <div className="col-sm-8">
                <SearchField
                  value={this.state.searchValue}
                  onChange={this.onInputChange}
                />
              </div>
            </div>
          </div>
        </header>
        <section className="content">
          <div className="container">
            <div className="row">
              <Categories
                categories={this.props.categories}
                onClick={this.onCategoryClick}
              />
              <div className="col-sm-8">
                <Products products={products} />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories.categories,
    selectedCategory: state.categories.selectedCategory,
    filteredProducts: state.products.filteredProducts,
    searchedProducts: state.products.searchedProducts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: () => dispatch(getCategories()),
    fetchProducts: () => dispatch(getProducts()),
    selectCategory: id => dispatch(selectCategory(id)),
    filterProducts: id => dispatch(filterProductsByCategory(id)),
    searchProducts: title => dispatch(searchProductsByTitle(title)),
  };
};

Home.propTypes = {
  categories: PropTypes.array,
  filteredProducts: PropTypes.array,
  searchedProducts: PropTypes.array,
  selectedCategory: PropTypes.object,
  fetchCategories: PropTypes.func.isRequired,
  fetchProducts: PropTypes.func.isRequired,
  selectCategory: PropTypes.func.isRequired,
  filterProducts: PropTypes.func.isRequired,
  searchProducts: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
