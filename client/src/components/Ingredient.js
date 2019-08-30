import React, { Component } from 'react';

import { Card, CardImg, CardBody, CardTitle, Col, Button } from 'reactstrap';
import '../App.css';

class Ingredient extends Component {
    // Get Expiration Date In Month/Date/Year Format
    getExpiryDate = item => {
        return new Date(item.expires).getTime() <= Date.now() ? 'EXPIRED' : item.expires.substr(0, 10);
    };

    // Get Added Date
    getAddedDate = item => {
        return item.createdAt.toString().substr(0, 10);
    };

    // Check If Ingredient Is Expired
    healthy = item => {
        return new Date(item.expires).getTime() <= Date.now() ? false : true;
    };

    // Load Image
    getImage = item => {
        if (item.image == null) {
            return 'https://i.pinimg.com/originals/be/10/8b/be108b9289b7a79fb5c17d0ce2f068c0.jpg';
        } else {
            return item.image;
        }
    };

    // Load Default Image On Error
    onError = e => {
        e.target.setAttribute('src', 'https://i.pinimg.com/originals/be/10/8b/be108b9289b7a79fb5c17d0ce2f068c0.jpg');
    };

    // Set Healthy / Expired Color
    onExpiredStyle = item => {};

    render() {
        return this.props.ingredients.map(item => {
            return (
                <div key={item._id}>
                    <Col sm="4">
                        <Card className="ingredients shadow lg p-3 mb-5 bg-white rounded">
                            <CardImg
                                top
                                className="pics shadow mb-2 bg-white rounded"
                                src={this.getImage(item)}
                                onError={this.onError}
                                alt="Image"
                            />
                            <CardBody className="text-center">
                                <CardTitle>{item.ingredient}</CardTitle>
                                <hr />
                                <CardTitle>{item.weight}</CardTitle>
                                <hr />
                                <CardTitle className={this.healthy(item) ? 'bg-success expires' : 'bg-danger expires'}>
                                    {this.getExpiryDate(item)}
                                </CardTitle>
                                <Button onClick={() => this.props.editIngredient(item)} className="editButton mr-2">
                                    Edit
                                </Button>
                                <Button
                                    className="deleteButton"
                                    onClick={this.props.deleteIngredient.bind(this, item._id)}
                                >
                                    Delete
                                </Button>
                                <CardTitle className="boughtOn align-middle">
                                    <p className="pt-1">
                                        <span>Added: </span>
                                        {this.getAddedDate(item)}
                                    </p>
                                </CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                </div>
            );
        });
    }
}

export default Ingredient;
