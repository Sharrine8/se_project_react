const baseUrl = "http://localhost:3001";
const headers = {
  "Content-Type": "application/json",
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
  });
}

export function addItem({ name, weather, imageUrl }) {
  return request(`${baseUrl}/items`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ name, weather, imageUrl }),
  });
}

export function deleteItem(cardId) {
  return request(`${baseUrl}/items/${cardId}`, {
    method: "DELETE",
    headers: headers,
  });
}
