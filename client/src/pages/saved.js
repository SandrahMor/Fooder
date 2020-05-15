import React, { Component } from "react";
import Card from "../components/SaveCard";
import Restaurant from "../components/Restaurant";
import Footer from "../components/Footer";
 import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

class Saved extends Component {
    state = {
      restaurants: []
    };
  
    componentDidMount() {
      console.log("MOUNTED")
      this.getSavedRestaurants();
    }
  
    getSavedRestaurants = () => {
      API.getSavedRestaurants()
        .then(res =>
          this.setState({
            restaurants: res.data
          })
        )
        .catch(err => console.log(err));
    };
  
    handleRestaurantDelete = id => {
      API.deleteRestaurant(id).then(res => this.getSavedRestaurants());
    };
  
    render() {
      return (
        <Container >
          <Row>
            <Col size="md-12">
              <Card title="Saved Restaurants" icon="download">
                {this.state.restaurants.length ? (
                  <List>
                    {this.state.restaurants.map(restaurant => (
                      <Restaurant
                        key={restaurant._id}
                        title={restaurant.name}
                        rating={restaurant.rating}
                        Button={() => (
                          <button
                            onClick={() => this.handleRestaurantDelete(restaurant._id)}
                            variant="outline-success"
                          >
                            Delete
                          </button>
                        )}
                      />
                    ))}
                  </List>
                ) : (
                  <h2 className="text-center">No Saved restaurants</h2>
                )}
              </Card>
            </Col>
          </Row>
          <Footer />
        </Container>
      );
    }
  }
  
  export default Saved;