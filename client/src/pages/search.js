import React, { Component } from "react";
import Card from "../components/SaveCard";
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

  componentDidMount() {
    console.log("MOUNTED Search")
    API.getRestaurants()
    .then(res =>
      this.setState({
        restaurants: res.data
      })
    )
  }

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

  handleRestaurantSave = id => {
    const restaurant = this.state.restaurants.find(restaurant => restaurant.id === id);
    console.log("MYSEARCH", restaurant)
    API.saveRestaurant({
      userId: restaurant.id,
      name: restaurant.name,
      rating: restaurant.rating,
    })
    .then(() => this.getRestaurants());
  }


  // // The render method returns the JSX that should be rendered
  render() {
    return (
      <Container>
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
                        key={restaurant._id}
                        title={restaurant.name}
                        rating={restaurant.rating}
                        Button={() => (
                        <button
                          onClick={() => this.handleRestaurantSave(restaurant.id)}
                          className="btn  ml-2" variant="outline-success"
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










