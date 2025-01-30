const baseUrl = "http://localhost:3001";
const headers = {
  "Content-Type": "application/json",
};
const authorization = {
  "Content-Type": "application/json",
  authorization: `Bearer ${localStorage.getItem("jwt")}`,
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

export function addItem({ _id, name, weather, imageUrl }) {
  return request(`${baseUrl}/items`, {
    method: "POST",
    headers: authorization,
    body: JSON.stringify({ _id, name, weather, imageUrl }),
  });
}

export function deleteItem(cardId) {
  return request(`${baseUrl}/items/${cardId}`, {
    method: "DELETE",
    headers: authorization,
  });
}

export function editProfile(user) {
  return request(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: authorization,
    body: JSON.stringify({
      name: user.name,
      avatar: user.avatar,
    }),
  });
}
