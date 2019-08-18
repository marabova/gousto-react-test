import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Categories.css';
class Categories extends Component {
  state = {
    showCategories: false,
  };

  showCategoriesHandler = () => {
    this.setState(prevState => {
      return {
        showCategories: !prevState.showCategories,
      };
    });
  };

  onCategoryClick = category => {
    this.props.onClick(category);
    this.showCategoriesHandler();
  };

  render() {
    const { showCategories } = this.state;
    const { categories } = this.props;

    return (
      <aside className="col-sm-4">
        <nav
          className={`categories dropdown ${showCategories ? 'active' : ''}`}
        >
          <button
            className="btn dropdown-toggle"
            type="button"
            onClick={this.showCategoriesHandler}
          >
            See categories
          </button>
          <ul className="list-group dropdown-menu">
            {categories.length > 0 &&
              categories.map(category => {
                return (
                  <li className="list-group-item" key={category.id}>
                    <NavLink
                      exact
                      to={`/${category.id}`}
                      onClick={() => this.onCategoryClick(category)}
                    >
                      {category.title}
                    </NavLink>
                  </li>
                );
              })}
          </ul>
        </nav>
      </aside>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Categories;
