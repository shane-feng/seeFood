import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Form, Input } from 'reactstrap';
import '../App.css';

import Ingredient from './Ingredient';
import EditModal from './EditModal';

class IngredientsList extends Component {
    state = {
        ingredients: [],
        search: '',
        itemToEdit: '',
        modal: false
    };

    // Get Ingredients From DB
    componentDidMount() {
        axios
            .get('http://localhost:5000/ingredients/')
            .then(res => {
                this.setState({ ingredients: res.data });
            })
            .catch(err => {
                console.log(err);
            });
    }

    // Edit Ingredient
    editIngredient = item => {
        this.setState({
            modal: !this.state.modal,
            itemToEdit: item
        });
    };

    // Delete Ingredient
    deleteIngredient = id => {
        axios
            .delete('http://localhost:5000/ingredients/' + id)
            .then(res => console.log(`Item with ID ${id} deleted!`))
            .catch(err => console.log(err));
        this.setState({
            ingredients: this.state.ingredients.filter(item => item._id !== id)
        });
    };

    // Set search State To User Search Input
    handleChange = e => {
        this.setState({
            search: e.target.value
        });
    };

    render() {
        // Filtered Ingredients
        const filteredIngredients = this.state.ingredients.filter(item => {
            return item.ingredient.toLowerCase().includes(this.state.search.toLowerCase());
        });

        return (
            <div>
                <Container
                    className="pt-4"
                    style={{
                        backgroundImage: `url(https://image.freepik.com/free-photo/white-boards-wooden-background-texture_52793-44.jpg)`
                    }}
                >
                    <Form inline className="justify-content-center mb-5">
                        <Input
                            type="text"
                            placeholder="Search Ingredients..."
                            className="searchBar shadow p-3 mr-sm-0"
                            onChange={this.handleChange}
                        />
                    </Form>
                    <Row className="justify-content-center">
                        <Ingredient
                            ingredients={this.state.search !== '' ? filteredIngredients : this.state.ingredients}
                            deleteIngredient={this.deleteIngredient}
                            editIngredient={this.editIngredient}
                            modal={this.state.modal}
                        />
                    </Row>
                    <EditModal
                        ingredient={this.state.ingredient}
                        weight={this.state.weight}
                        expires={this.state.expires}
                        image={this.state.image}
                        modal={this.state.modal}
                        editIngredient={this.editIngredient}
                        itemToEdit={this.state.itemToEdit}
                    />
                </Container>
            </div>
        );
    }
}

export default IngredientsList;
