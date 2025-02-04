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

export const TAuthForm = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  onsubmit: PropTypes.func.isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
}

export const TAuthFormInput = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export const TFormLogin = {
  onLogin: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  emailChange: PropTypes.func.isRequired,
  passwordChange: PropTypes.func.isRequired,
  onLoginError: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([null]),
  ]),
  loading: PropTypes.bool.isRequired,
};

export const TFormRegister = {
  onRegister: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  nameChange: PropTypes.func.isRequired,
  passwordChange: PropTypes.func.isRequired,
  confirmPasswordChange: PropTypes.func.isRequired,
  emailChange: PropTypes.func.isRequired,
  onRegisterError: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([null]),
  ]),
  loading: PropTypes.bool.isRequired,
};