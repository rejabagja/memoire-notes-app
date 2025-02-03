import PropTypes from "prop-types";


export const TNoteItem = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
}

export const TNotesList = {
  notes: PropTypes.arrayOf(PropTypes.shape(TNoteItem)).isRequired,
};

export const TSearchBar = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};