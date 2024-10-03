// //Step 2: Save an item
// Add the handleAddItemSubmit handler to App.js. In this handler,
//call the corresponding methods from api.js and update the
//clothingItems (your name may differ) state with an extended copy
//of the current array using the spread ... operator:

// setClothingItems([item, ...clothingItems]);
// If everything is working correctly, new items should appear
//at the beginning of the list. After refreshing the page, the new
//cards will disappear. To save them, we'll need a server with a
//database. (However, there's no need to think about saving cards
//just yet.)

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
  });
}

export function deleteItem(cardId) {
  return request(`${baseUrl}/items/${cardId}`, {
    method: "DELETE",
    headers: headers,
  });
}
