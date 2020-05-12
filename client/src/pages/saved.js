import React, { Component } from "react";
import Card from "../components/SaveCard";
// import Book from "../components/Book";
import Footer from "../components/Footer";
// import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Link } from "react-router-dom";
import { List } from "../components/List";

class Saved extends Component {
    // state = {
    //   restaurants: []
    // };
  
    // componentDidMount() {
    //   this.getSavedRestaurants();
    // }
  
    // getSavedRestaurants = () => {
    //   API.getSavedRestaurants()
    //     .then(res =>
    //       this.setState({
    //         restaurants: res.data
    //       })
    //     )
    //     .catch(err => console.log(err));
    // };
  
    // handleRestaurantDelete = id => {
    //   API.deleteRestaurant(id).then(res => this.getSavedRestaurants());
    // };
  
    render() {
      return (
        <Container>
          <Row>
            <Col size="md-12">
            <Link
                  onClick={this.toggleNav}
                  className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                  to="/" >
                log-in
              </Link> 
              <Card title="Saved Restaurants" icon="download">
                {this.state.restaurants.length ? (
                  <List>
                    {this.state.restaurants.map(restaurants => (
                      <restaurants
                        key={restaurants._id}
                        title={restaurants.title}
                        openNow={restaurants.open_now}
                        image={restaurants.image}
                        Button={() => (
                          <button
                            // onClick={() => this.handleRestaurantDelete(restaurant._id)}
                            // className="btn btn-danger ml-2"
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