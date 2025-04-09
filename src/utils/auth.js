import { request } from "./api";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.wtwr.daustin.com"
    : "http://localhost:3001";
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export function onRegister(email, password, name, avatar) {
  return request(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, avatar, email, password }),
  });
}

export function onLogin(email, password) {
  return request(`${baseUrl}/signin`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ email, password }),
  });
}

export function checkToken(token) {
  return request(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
}
