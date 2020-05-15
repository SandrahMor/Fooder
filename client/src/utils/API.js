import axios from "axios";

export default {
  // Gets books from the Google API
  getRestaurants: function(q) {
    return axios.get("/api/google");
  },
  // Gets all saved books
  getSavedRestaurants: function() {
    return axios.get("/api/user");
  },
  // Deletes the saved book with the given id
  deleteRestaurant: function(id) {
    return axios.delete("/api/user/" + id);
  },
  // Saves an book to the database
  saveRestaurant: function(userData) {
    console.log("MYDATA", userData)
    return axios.post("/api/user", userData);
  }
};