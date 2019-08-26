const express = require('express');
const router = express.Router();

// Ingredient Model
const Ingredient = require('../models/IngredientModel');

// Route To Get All Ingredients
router.get('/', (req, res) => {
    Ingredient.find()
        .sort({ expires: -1 })
        .then(item => res.json(item))
        .catch(err => res.status(400).json(`An Error Occurred With the Following: ${err}`));
});

// Route To Get A Single Ingredient
router.get('/:id', (req, res) => {
    Ingredient.findById(req.params.id)
        .sort({ date: -1 })
        .then(ingredient => res.json(ingredient))
        .catch(err => res.status(400).json(`An Error Occurred With the Following: ${err}`));
});

// Route To Update An Ingredient
router.post('/update/:id', (req, res) => {
    Ingredient.findById(req.params.id).then(ingredients => {
        (ingredients.ingredient = req.body.ingredient),
            (ingredients.weight = req.body.weight),
            (ingredients.expires = req.body.expires),
            (ingredients.image = req.body.image);

        ingredients
            .save()
            .then(() => res.json(`${req.body.ingredient} is updated!`))
            .catch(err => res.json(`An Error Occurred With the Following: ${err}!`));
    });
});

// Route To Delete An Ingredient
router.delete('/:id', (req, res) => {
    Ingredient.findByIdAndDelete(req.params.id)
        .then(() => res.json(`Removed ${req.body.ingredient} From Your Inventory!`))
        .catch(err => res.status(404).json(`Ingredient with ID: ${req.params.id} does not exist!`));
});

module.exports = router;
