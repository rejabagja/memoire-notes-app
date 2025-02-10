import Swal from "sweetalert2";
import { BASE_URL } from "../../constants";

function getAccessToken() {
  return localStorage.getItem("accessToken");
}

function putAccessToken(accessToken) {
  return localStorage.setItem("accessToken", accessToken);
}

function deleteAccessToken() {
  return localStorage.removeItem("accessToken");
}

async function fetchWithToken(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });
}

async function login({ email, password }) {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    return { error: true, data: null, message: responseJson.message };
  }

  return { error: false, data: responseJson.data };
}

async function register({ name, email, password }) {
  const response = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    // alert(responseJson.message);
    return { error: true, message: responseJson.message };
  }

  return { error: false };
}

async function getUserLogged() {
  const response = await fetchWithToken(`${BASE_URL}/users/me`);
  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function addNote({ title, body }) {
  const response = await fetchWithToken(`${BASE_URL}/notes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, body }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function getActiveNotes() {
  const response = await fetchWithToken(`${BASE_URL}/notes`);
  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function getArchivedNotes() {
  const response = await fetchWithToken(`${BASE_URL}/notes/archived`);
  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function getNote(id) {
  const response = await fetchWithToken(`${BASE_URL}/notes/${id}`);
  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function archiveNote(id) {
  const response = await fetchWithToken(`${BASE_URL}/notes/${id}/archive`, {
    method: "POST",
  });

  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function unarchiveNote(id) {
  const response = await fetchWithToken(`${BASE_URL}/notes/${id}/unarchive`, {
    method: "POST",
  });

  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function deleteNote(id) {
  const response = await fetchWithToken(`${BASE_URL}/notes/${id}`, {
    method: "DELETE",
  });

  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validateRegisterForm({ locale, name, email, password, confirmPassword }) {
  if (!name || !email || !password || !confirmPassword) {
    return locale === "id" ? "Semua field/input harus diisi." : "All fields are required.";
  }

  if (!isValidEmail(email)) {
    return locale === "id" ? "Format email tidak valid." : "Invalid email format.";
  }

  if (password.length < 6) {
    return locale === "id" ? "Password harus minimal 6 karakter." : "Password must be at least 6 characters long.";
  }
  if (password !== confirmPassword) {
    return locale === "id" ? "Password tidak cocok." : "Passwords do not match.";
  }
  return null;
};

function validateLoginForm({ locale, email, password }) {
  if (!email || !password) {
    return locale === "id" ? "Semua field/input harus diisi." : "All fields are required.";
  }

  if (!isValidEmail(email)) {
    return locale === "id" ? "Format email tidak valid." : "Invalid email format.";
  }
  return null;
};

function showDeleteNoteConfirm(locale) {
   return Swal.fire({
     title:
       locale === "id"
         ? "Apakah kamu yakin ingin menghapus catatan ini?"
         : "Are you sure want to delete this notes?",
     showDenyButton: true,
     confirmButtonText: locale === "id" ? "Iya" : "Yes",
     denyButtonText: locale === "id" ? "Tidak" : "No",
     icon: "warning",
   });
};

function showLogoutConfirm(locale) {
   return Swal.fire({
     title:
       locale === "id"
         ? "Apakah kamu yakin ingin keluar aplikasi?"
         : "Are you sure want logout?",
     showDenyButton: true,
     confirmButtonText: locale === "id" ? "Iya" : "Yes",
     denyButtonText: locale === "id" ? "Tidak" : "No",
     icon: "warning",
   });
};

function searchNotes(keyword, notes) {
  if (notes === null) return notes;
  const result = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );
  return result;
}

export {
  getAccessToken,
  putAccessToken,
  deleteAccessToken,
  login,
  register,
  getUserLogged,
  addNote,
  getActiveNotes,
  getArchivedNotes,
  getNote,
  archiveNote,
  unarchiveNote,
  deleteNote,
  validateRegisterForm,
  validateLoginForm,
  showDeleteNoteConfirm,
  showLogoutConfirm,
  searchNotes
};
