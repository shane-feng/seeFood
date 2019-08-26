const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Ingredient Schema
const IngredientSchema = new Schema(
    {
        ingredient: {
            type: String,
            required: true
        },
        weight: {
            type: String,
            required: true
        },
        expires: {
            type: Date,
            required: true
        },
        image: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

module.exports = Ingredient = mongoose.model('ingredient', ingredientSchema);
