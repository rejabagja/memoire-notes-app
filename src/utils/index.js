import { useState } from "react";
import Swal from "sweetalert2";

const showFormattedDate = (date, locale) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString(locale, options);
};

function useInput(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);

  const onValueChangeHandler = (event) => {
    setValue(event.target.value);
  };

  return [value, onValueChangeHandler];
}

function showErrorAlert({ title = "Error", message }) {
  return Swal.fire({
    title,
    text: message,
    icon: "error",
  });
};

function showSuccessAlert({ title = "Success", message }) {
  return Swal.fire({
    title,
    text: message,
    icon: "success",
  });
};


export { showFormattedDate, useInput, showErrorAlert, showSuccessAlert };
