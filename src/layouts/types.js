import PropTypes from "prop-types";


export const TAppLayout = {
  children: PropTypes.node
}

export const TAuthLayout = {
  children: PropTypes.node.isRequired,
  page: PropTypes.string.isRequired,
};