import React, { Component } from 'react';

import '../App.css';
import { Container, Jumbotron } from 'reactstrap';

class About extends Component {
    render() {
        return (
            <Container expand="md">
                <Jumbotron>
                    <h1 className="display-3 aboutHeader">What's In My Fridge?</h1>
                    <p className="lead pt-5 pb-1">Take Your Fridge & Pantry Everywhere You Go!</p>
                    <p className="details">
                        Add the ingredients' name, weight, expiration date, and upload an image. You can see all of the
                        "My Ingredients" tab sorted by their expiration date. Perfectly healthy ingredients will have
                        their expiration date highlighted in green, while expired ingredients will show "EXPIRED"
                        highlighted in red. Now managing your ingredients will be easier than ever!
                    </p>
                </Jumbotron>
                <div className="row footer">
                    <div className="col-4 text-center">
                        <a href="https://github.com/shane-feng/seeFood">
                            <img className="footer-icons" src="https://image.flaticon.com/icons/svg/25/25231.svg"></img>
                        </a>
                    </div>
                    <div className="col-4 text-center mb-0">
                        <a href="https://www.linkedin.com/in/shane-feng/">
                            <img className="footer-icons" src="https://image.flaticon.com/icons/svg/34/34405.svg"></img>
                        </a>
                    </div>
                    <div className="col-4 text-center">
                        <a href="mailto:sfeng14@my.bcit.ca">
                            <img
                                className="footer-icons"
                                src="https://www.flaticon.com/premium-icon/icons/svg/542/542689.svg"
                            ></img>
                        </a>
                    </div>
                </div>
            </Container>
        );
    }
}

export default About;
