const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.wtwr.daustin.com"
    : "http://localhost:3001";

const headers = {
  "Content-Type": "application/json",
};
const authorization = () => {
  return {
    "Content-Type": "application/json",
    authorization: `Bearer ${localStorage.getItem("jwt")}`,
  };
};

export function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

export function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

export function getItems() {
  return request(`${baseUrl}/items`, {
    method: "GET",
    headers: headers,
  });
}

export function addItem({ name, weather, imageUrl }) {
  return request(`${baseUrl}/items`, {
    method: "POST",
    headers: authorization(),
    body: JSON.stringify({ name, weather, imageUrl }),
  });
}

export function deleteItem(cardId) {
  return request(`${baseUrl}/items/${cardId}`, {
    method: "DELETE",
    headers: authorization(),
  });
}

export function editProfile(user) {
  return request(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: authorization(),
    body: JSON.stringify({
      name: user.name,
      avatar: user.avatar,
    }),
  });
}

export function addCardLike(id) {
  return request(`${baseUrl}/items/${id}/likes`, {
    method: "PUT",
    headers: authorization(),
  });
}

export function removeCardLike(id) {
  return request(`${baseUrl}/items/${id}/likes`, {
    method: "DELETE",
    headers: authorization(),
  });
}
