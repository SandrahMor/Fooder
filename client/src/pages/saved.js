class Saved extends Component {
    state = {
      restaurants: []
    };
  
    componentDidMount() {
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
        <Container>
          <Row>
            <Col size="md-12">
              <Jumbotron>
                <h1 className="text-center">
                  <strong>(React) Google Books Search</strong>
                </h1>
                <h2 className="text-center">Search for and Save Books of Interest.</h2>
              </Jumbotron>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
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
                            onClick={() => this.handleRestaurantDelete(restaurant._id)}
                            className="btn btn-danger ml-2"
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