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
