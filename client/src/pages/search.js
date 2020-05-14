import React, { Component } from "react";
import Card from "../components/SaveCard";
import Form from "../components/Form";
import Restaurant from "../components/Restaurant";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";


class Search extends Component {
  state = {
    restaurants: [],
    q: "",
    message: "Search To Begin!"
  };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  getRestaurants = () => {
    API.getRestaurants(this.state.q)
      .then(res =>
        this.setState({
          restaurants: res.data
        })
      )
      .catch(() =>
      // We always use the setState method to update a component's state
        this.setState({
          restaurants: [],
          message: "No restaurants Found, Try a Different Query"
        })
      );
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getRestaurants();
  };

  // handleRestaurantSave = id => {
  //   const restaurant = this.state.restaurants.find(restaurant => restaurant.id === id);

  //   API.saveRestaurant({
  //     // googleId: restaurant.id,
  //     // title: result.name,
  //     // openNow: result.opening_hours.open_now,
  //     // image: result.photos
  //   }).then(() => this.getRestaurants());
  // };
  // // The render method returns the JSX that should be rendered
  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Card title="restaurant Search" icon="far fa-restaurant">
              <Form
                // handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
              />
            </Card>
          </Col>
        </Row>
        <Row>
            {/* card to ask for selection foom user */}
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Results">
              {this.state.restaurants.length ? (
                <List>
                  {this.state.restaurants.map(restaurant => (
                    <Restaurant
                    // key={restaurants._id}
                    // title={restaurants.title}
                    // openNow={restaurants.open_now}
                    // image={restaurants.image}
                      Button={() => (
                        <button
                          onClick={() => this.handleRestaurantSave(restaurant.id)}
                          className="btn btn-primary ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">{this.state.message}</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}


export default Search;





// class Search extends Component {
//   state = {
//     image: "",
//     match: false,
//     matchCount: 0
//   };

//   // When the component mounts, load the next dog to be displayed
//   componentDidMount() {
//     this.loadNextRestaurant();
//   }

//   handleBtnClick = event => {
//     // Get the data-value of the clicked button
//     const btnType = event.target.attributes.getNamedItem("data-value").value;
//     // Clone this.state to the newState object
//     // We'll modify this object and use it to set our component's state
//     const newState = { ...this.state };

//     if (btnType === "pick") {
//       // Set newState.match to either true or false depending on whether or not the dog likes us (1/5 chance)
//       newState.match = 1 === Math.floor(Math.random() * 5) + 1;

//       // Set newState.matchCount equal to its current value or its current value + 1 depending on whether the dog likes us
//       newState.matchCount = newState.match
//         ? newState.matchCount + 1
//         : newState.matchCount;
//     } else {
//       // If we thumbs down'ed the dog, we haven't matched with it
//       newState.match = false;
//     }
//     // Replace our component's state with newState, load the next dog image
//     this.setState(newState);
//     this.loadNextRestaurant();
//   };

//   loadNextRestaurant = () => {
//     API.getRestaurants()
//       .then(res =>
//         this.setState({
//           image: results.photos
//         })
//       )
//       .catch(err => console.log(err));
//   };

//   render() {
//     return (
//       <div>
//         <h3 className="text-center">
//           Pick the photo of the place you'd like to eat at. 
//         </h3>
//         <Card image={this.state.image} handleBtnClick={this.handleBtnClick} />
//       </div>
//     );
//   }
// }

// export default Search;


// class Search extends Component {
//   state = {
//     restaurant: null
//   };

//   async componentDidMount() {
//     const url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyBVbcko5gMzL50MmzOJnfAk86hsIJVvu6A&location=45.086140,-93.258360&radius=24000&type=restaurant";
//     const response = await fetch(url);
//     const data = await response.json();
//     this.setState({ restaurant: data.results[0]});
//   }
 
//   render() {
//     return (
//       <div>
//         <div>{this.state.restaurant.name}</div>
//         <div>{this.state.restaurant.opening_hours.open_now}</div>
//         <img src={this.state.restaurant.photos} alt = ""/>
//       </div>
//     );
//   }
// }










