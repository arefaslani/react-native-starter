import React from "react";
import PropTypes from "prop-types";

import Card from "components/Card";

const Product = props => {
  console.log(props);
  return <Card {...props} />;
};

Product.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default Product;
