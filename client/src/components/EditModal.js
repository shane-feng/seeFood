import React, { Component } from 'react';
import axios from 'axios';

import { Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../App.css';

class EditModal extends Component {
    // Ingredient name input
    onChangeIngredient = e => {
        this.setState({ ingredient: e.target.value });
    };

    // Ingredient weight input
    onChangeWeight = e => {
        this.setState({ weight: e.target.value.trim() });
    };

    // Ingredient expiration date input
    onChangeExpires = e => {
        this.setState({ expires: e.target.value });
    };

    // Upload Ingredient Image
    onChangeFile = e => {
        const files = e.target.files;
        const reader = new FileReader();

        reader.addEventListener(
            'load',
            () => {
                this.setState({
                    image: reader.result
                });
                console.log(this.state.image);
            },
            false
        );

        reader.readAsDataURL(files[0]);
    };

    // Submit ingredient info
    onSubmit = e => {
        e.preventDefault();

        const item = {
            ingredient: this.state.ingredient,
            weight: this.state.weight,
            expires: this.state.expires,
            image: this.state.image
        };

        axios
            .post('https://seefood2019.herokuapp.com/ingredients/update/' + this.props.itemToEdit._id, item)
            .catch(err => console.log(err));

        setTimeout(() => {
            window.location = '/';
        }, 3000);
    };

    render() {
        return (
            <Modal isOpen={this.props.modal} toggle={this.props.editIngredient}>
                <ModalHeader toggle={this.props.editIngredient}>Edit Ingredient Info</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup>
                            <Label for="ingredient">Ingredient</Label>
                            <Input
                                type="text"
                                name="editIngredient"
                                placeholder={this.props.itemToEdit.ingredient}
                                onChange={this.onChangeIngredient}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="weight">Weight</Label>
                            <Input
                                type="text"
                                name="weight"
                                placeholder={this.props.itemToEdit.weight}
                                onChange={this.onChangeWeight}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="expires">Expiration</Label>
                            <Input type="date" name="expires" onChange={this.onChangeExpires} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="image">Image</Label>
                            <Input type="file" name="file" value={this.props.image} onChange={this.onChangeFile} />
                        </FormGroup>
                        <Button>Update Ingredient</Button>
                    </Form>
                </ModalBody>
            </Modal>
        );
    }
}

export default EditModal;
