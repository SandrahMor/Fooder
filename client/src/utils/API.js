import axios from "axios";

export default {
  // Gets books from the Google API
  getRestaurants: function(q) {
    return axios.get("/api/google");
  },
  // Gets all saved books
  getSavedRestaurants: function() {
    return axios.get("/api/restaurants");
  },
  // Deletes the saved book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
  // Saves an book to the database
  saveBook: function(restaurantData) {
    return axios.post("/api/restaurants", restaurantData);
  }
};